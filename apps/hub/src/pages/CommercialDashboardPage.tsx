import { useEffect, useState } from 'react';
import { apiGet, ApiError } from '../api/client.js';
import type { CommercialDashboardResponse } from '../api/types.js';
import { CountsCard } from '../components/CountsCard.js';

export function CommercialDashboardPage({ token }: { token: string }) {
  const [data, setData] = useState<CommercialDashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiGet<CommercialDashboardResponse>('/commercial/dashboard', token)
      .then((response) => {
        if (!cancelled) {
          setData(response);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Falha ao carregar o dashboard comercial.');
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
      <h1 className="text-xl font-semibold text-off-white">Dashboard comercial</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <CountsCard title="Leads" total={data.leads.total} byKey={data.leads.byStatus} />
        <CountsCard title="Oportunidades" total={data.opportunities.total} byKey={data.opportunities.byStage} />
        <CountsCard title="Atividades (por status)" total={data.activities.total} byKey={data.activities.byStatus} />
        <CountsCard title="Atividades (por tipo)" total={data.activities.total} byKey={data.activities.byType} />
      </div>
    </div>
  );
}
