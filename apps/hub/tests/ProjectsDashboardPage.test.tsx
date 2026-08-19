import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectsDashboardPage } from '../src/pages/ProjectsDashboardPage.js';

describe('ProjectsDashboardPage', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('lista projetos reais via GET /projects e depois busca o dashboard do projeto escolhido', async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes('/projects/proj-1/dashboard')) {
        return {
          ok: true,
          json: async () => ({
            project: { id: 'proj-1', name: 'Implantação Monvi Brain', status: 'active' },
            tasks: { total: 4, byStatus: { done: 2, in_progress: 2 } },
            deliverables: { total: 1, byStatus: { approved: 1 } },
            risks: { total: 0, byStatus: {}, bySeverity: {} },
            approvals: { total: 1, byStatus: { approved: 1 } },
          }),
        };
      }
      return {
        ok: true,
        json: async () => ({
          projects: [{ id: 'proj-1', name: 'Implantação Monvi Brain', status: 'active' }],
        }),
      };
    });
    vi.stubGlobal('fetch', fetchMock);

    const user = userEvent.setup();
    render(<ProjectsDashboardPage token="token-de-teste" />);

    expect(await screen.findByText('Implantação Monvi Brain')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Implantação Monvi Brain/ }));

    expect(await screen.findByRole('heading', { name: 'Implantação Monvi Brain' })).toBeInTheDocument();
    expect(screen.getByText('Tarefas')).toBeInTheDocument();
  });

  it('mostra uma mensagem quando não há projetos', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ projects: [] }),
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<ProjectsDashboardPage token="token-de-teste" />);

    expect(await screen.findByText('Nenhum projeto encontrado.')).toBeInTheDocument();
  });
});
