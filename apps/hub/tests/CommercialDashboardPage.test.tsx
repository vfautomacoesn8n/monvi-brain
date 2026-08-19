import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CommercialDashboardPage } from '../src/pages/CommercialDashboardPage.js';

describe('CommercialDashboardPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('busca e renderiza os dados reais do GET /commercial/dashboard', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        leads: { total: 5, byStatus: { new: 3, qualified: 2 } },
        opportunities: { total: 2, byStage: { proposal: 2 } },
        activities: { total: 4, byStatus: { done: 4 }, byType: { diagnosis: 4 } },
      }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<CommercialDashboardPage token="token-de-teste" />);

    expect(await screen.findByText('Dashboard comercial')).toBeInTheDocument();
    expect(screen.getByText('Leads')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/commercial/dashboard'),
      expect.objectContaining({
        headers: expect.objectContaining({ Authorization: 'Bearer token-de-teste' }),
      })
    );
  });

  it('mostra uma mensagem de erro quando a chamada falha', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ message: 'Sessão inválida ou expirada.' }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<CommercialDashboardPage token="token-invalido" />);

    expect(await screen.findByRole('alert')).toHaveTextContent('Sessão inválida ou expirada.');
  });
});
