import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../src/App.js';
import { AuthProvider } from '../src/auth/AuthContext.js';

describe('LoginPage', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('renderiza o formulário de login quando não há sessão', () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    expect(screen.getByRole('heading', { name: 'Monvi Hub' })).toBeInTheDocument();
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeInTheDocument();
  });

  it('faz login real via POST /auth/dev-login e mostra a tela inicial autenticada', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ sessionToken: 'token-de-teste', expiresAt: '2026-08-20T00:00:00Z' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    await user.type(screen.getByLabelText('E-mail'), 'ceo@monvi.com.br');
    await user.click(screen.getByRole('button', { name: 'Entrar' }));

    await waitFor(() => {
      expect(screen.getByText('Escolha um painel para visualizar.')).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/auth/dev-login'),
      expect.objectContaining({ method: 'POST' })
    );
    expect(sessionStorage.getItem('monvi-hub-session-token')).toBe('token-de-teste');
  });

  it('mostra uma mensagem de erro quando o login falha', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ message: 'Dados de login inválidos. Informe um e-mail válido.' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );

    await user.type(screen.getByLabelText('E-mail'), 'rejeitado@monvi.com.br');
    await user.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('Dados de login inválidos.');
  });
});
