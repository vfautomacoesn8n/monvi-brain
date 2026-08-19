import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AutomationsDashboardPage } from '../src/pages/AutomationsDashboardPage.js';

describe('AutomationsDashboardPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('busca e renderiza os dados reais do GET /automations/dashboard', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        workflows: { total: 3, byStatus: { active: 3 } },
        invocations: { total: 10, byStatus: { succeeded: 8, failed: 2 } },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<AutomationsDashboardPage token="token-de-teste" />);

    expect(await screen.findByText('Dashboard de automações')).toBeInTheDocument();
    expect(screen.getByText('Workflows')).toBeInTheDocument();
    expect(screen.getByText('Invocações')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/automations/dashboard'),
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer token-de-teste' }),
      })
    );
  });

  it('mostra uma mensagem de erro quando a chamada falha', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ message: 'Erro interno.' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<AutomationsDashboardPage token="token-de-teste" />);

    expect(await screen.findByRole('alert')).toHaveTextContent('Erro interno.');
  });
});
