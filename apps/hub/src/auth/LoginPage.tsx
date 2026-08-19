import { useState, type FormEvent } from 'react';
import { useAuth } from './AuthContext.js';

export function LoginPage() {
  const { login, loginError, loggingIn } = useAuth();
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void login(email);
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Monvi Hub</h1>
        <p>Entre com seu e-mail para acessar os painéis.</p>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="voce@monvi.com.br"
        />
        <button type="submit" disabled={loggingIn}>
          {loggingIn ? 'Entrando...' : 'Entrar'}
        </button>
        {loginError && <p role="alert">{loginError}</p>}
      </form>
    </div>
  );
}
