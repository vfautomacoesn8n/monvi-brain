import { useEffect, useState } from 'react';
import { apiGet, ApiError } from '../api/client.js';
import type { Project, ProjectDashboardResponse, ProjectsListResponse } from '../api/types.js';
import { CountsCard } from '../components/CountsCard.js';

function ProjectPicker({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (projectId: string) => void;
}) {
  if (projects.length === 0) {
    return <p>Nenhum projeto encontrado.</p>;
  }

  return (
    <ul className="project-picker">
      {projects.map((project) => (
        <li key={project.id}>
          <button type="button" onClick={() => onSelect(project.id)}>
            {project.name} <span className="project-status">{project.status}</span>
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
      <h1>{data.project.name}</h1>
      <div className="dashboard-cards">
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
      <div>
        <button type="button" onClick={() => setSelectedProjectId(null)}>
          &larr; Voltar para a lista de projetos
        </button>
        <ProjectDashboard token={token} projectId={selectedProjectId} />
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <h1>Projetos</h1>
      {error && <p role="alert">{error}</p>}
      {!error && !projects && <p>Carregando...</p>}
      {!error && projects && <ProjectPicker projects={projects} onSelect={setSelectedProjectId} />}
    </div>
  );
}
