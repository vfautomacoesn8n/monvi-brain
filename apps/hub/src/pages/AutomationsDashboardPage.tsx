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
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard de automações</h1>
      <div className="dashboard-cards">
        <CountsCard title="Workflows" total={data.workflows.total} byKey={data.workflows.byStatus} />
        <CountsCard title="Invocações" total={data.invocations.total} byKey={data.invocations.byStatus} />
      </div>
    </div>
  );
}
