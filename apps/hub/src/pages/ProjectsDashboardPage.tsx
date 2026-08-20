import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { apiGet, ApiError } from '../api/client.js';
import type { Project, ProjectDashboardResponse, ProjectsListResponse } from '../api/types.js';
import { CountsCard } from '../components/CountsCard.js';
import { Button } from '../components/ui/button.js';
import { Card, CardContent } from '../components/ui/card.js';

function ProjectPicker({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (projectId: string) => void;
}) {
  if (projects.length === 0) {
    return <p className="text-sm text-medium-gray">Nenhum projeto encontrado.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {projects.map((project) => (
        <li key={project.id}>
          <button type="button" onClick={() => onSelect(project.id)} className="block w-full max-w-md text-left">
            <Card className="transition-colors hover:border-signal-blue">
              <CardContent className="flex items-center justify-between p-4">
                <span className="text-sm font-medium text-off-white">{project.name}</span>
                <span className="font-mono text-xs text-medium-gray">{project.status}</span>
              </CardContent>
            </Card>
          </button>
        </li>
      ))}
    </ul>
  );
}

function ProjectDashboard({ token, projectId }: { token: string; projectId: string }) {
  const [data, setData] = useState<ProjectDashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    apiGet<ProjectDashboardResponse>(`/projects/${projectId}/dashboard`, token)
      .then((response) => {
        if (!cancelled) {
          setData(response);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Falha ao carregar o dashboard do projeto.');
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
  }, [token, projectId]);

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
      <h1 className="text-xl font-semibold text-off-white">{data.project.name}</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <CountsCard title="Tarefas" total={data.tasks.total} byKey={data.tasks.byStatus} />
        <CountsCard title="Entregáveis" total={data.deliverables.total} byKey={data.deliverables.byStatus} />
        <CountsCard title="Riscos (por status)" total={data.risks.total} byKey={data.risks.byStatus} />
        <CountsCard title="Riscos (por severidade)" total={data.risks.total} byKey={data.risks.bySeverity} />
        <CountsCard title="Aprovações" total={data.approvals.total} byKey={data.approvals.byStatus} />
      </div>
    </div>
  );
}

export function ProjectsDashboardPage({ token }: { token: string }) {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    apiGet<ProjectsListResponse>('/projects', token)
      .then((response) => {
        if (!cancelled) {
          setProjects(response.projects);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof ApiError ? err.message : 'Falha ao carregar a lista de projetos.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  if (selectedProjectId) {
    return (
      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="sm" className="w-fit" onClick={() => setSelectedProjectId(null)}>
          <ArrowLeft className="h-4 w-4" />
          Voltar para a lista de projetos
        </Button>
        <ProjectDashboard token={token} projectId={selectedProjectId} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-off-white">Projetos</h1>
      {error && (
        <p role="alert" className="text-sm text-red-400">
          {error}
        </p>
      )}
      {!error && !projects && <p className="text-sm text-medium-gray">Carregando...</p>}
      {!error && projects && <ProjectPicker projects={projects} onSelect={setSelectedProjectId} />}
    </div>
  );
}
