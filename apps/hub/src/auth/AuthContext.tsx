import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { apiPost, ApiError } from '../api/client.js';
import type { DevLoginResponse } from '../api/types.js';

const SESSION_STORAGE_KEY = 'monvi-hub-session-token';

interface AuthContextValue {
  sessionToken: string | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
  loginError: string | null;
  loggingIn: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [sessionToken, setSessionToken] = useState<string | null>(() =>
    sessionStorage.getItem(SESSION_STORAGE_KEY)
  );
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const login = useCallback(async (email: string) => {
    setLoggingIn(true);
    setLoginError(null);
    try {
      const response = await apiPost<DevLoginResponse>('/auth/dev-login', { email });
      sessionStorage.setItem(SESSION_STORAGE_KEY, response.sessionToken);
      setSessionToken(response.sessionToken);
    } catch (err) {
      setLoginError(err instanceof ApiError ? err.message : 'Falha ao entrar. Tente novamente.');
    } finally {
      setLoggingIn(false);
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setSessionToken(null);
  }, []);

  const value = useMemo(
    () => ({ sessionToken, login, logout, loginError, loggingIn }),
    [sessionToken, login, logout, loginError, loggingIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usado dentro de um AuthProvider.');
  }
  return context;
}
