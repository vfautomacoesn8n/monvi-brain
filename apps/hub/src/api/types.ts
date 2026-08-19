export interface DevLoginResponse {
  sessionToken: string;
  expiresAt: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
}

export interface ProjectsListResponse {
  projects: Project[];
}

export interface CountsByKey {
  total: number;
  byStatus?: Record<string, number>;
  byStage?: Record<string, number>;
  byType?: Record<string, number>;
  bySeverity?: Record<string, number>;
}

export interface CommercialDashboardResponse {
  leads: CountsByKey;
  opportunities: CountsByKey;
  activities: CountsByKey;
}

export interface AutomationsDashboardResponse {
  workflows: CountsByKey;
  invocations: CountsByKey;
}

export interface ProjectDashboardResponse {
  project: Project;
  tasks: CountsByKey;
  deliverables: CountsByKey;
  risks: CountsByKey;
  approvals: CountsByKey;
}
