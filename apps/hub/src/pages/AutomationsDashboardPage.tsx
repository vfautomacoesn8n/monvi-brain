import { useEffect, useState } from 'react';
import { apiGet, ApiError } from '../api/client.js';
import type { AutomationsDashboardResponse } from '../api/types.js';
import { CountsCard } from '../components/CountsCard.js';

export function AutomationsDashboardPage({ token }: { token: string }) {
  const [data, setData] = useState<AutomationsDashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiGet<AutomationsDashboardResponse>('/automations/dashboard', token)
      .then((response) => {
        if (!cancelled) {
          setData(response);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Falha ao carregar o dashboard de automações.');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  if (loading) {
    return <p className="text-sm text-medium-gray">Carregando...</p>;
  }

  if (error) {
    return (
      <p role="alert" className="text-sm text-red-400">
        {error}
      </p>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-off-white">Dashboard de automações</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <CountsCard title="Workflows" total={data.workflows.total} byKey={data.workflows.byStatus} />
        <CountsCard title="Invocações" total={data.invocations.total} byKey={data.invocations.byStatus} />
      </div>
    </div>
  );
}
