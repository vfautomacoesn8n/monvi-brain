export class GithubCredentialMissingError extends Error {
  constructor() {
    super('GITHUB_PAT não configurado.');
    this.name = 'GithubCredentialMissingError';
  }
}

export class GithubApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly githubMessage: string
  ) {
    super(`GitHub API respondeu ${status}: ${githubMessage}`);
    this.name = 'GithubApiError';
  }
}

export interface GithubRepository {
  name: string;
  fullName: string;
  private: boolean;
  defaultBranch: string;
  openIssuesCount: number;
  htmlUrl: string;
}

export interface GithubIssueComment {
  id: number;
  body: string;
  htmlUrl: string;
  createdAt: string;
}

export interface GithubIssue {
  number: number;
  title: string;
  body: string | null;
  htmlUrl: string;
  createdAt: string;
}

const GITHUB_API_BASE_URL = 'https://api.github.com';
const USER_AGENT = 'monvi-brain-core';

function githubHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': USER_AGENT,
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

async function githubFetch(path: string, token: string): Promise<Response> {
  const headers = githubHeaders(token);

  try {
    return await fetch(`${GITHUB_API_BASE_URL}${path}`, { headers });
  } catch {
    // uma única tentativa extra em caso de falha de rede transitória
    return fetch(`${GITHUB_API_BASE_URL}${path}`, { headers });
  }
}

async function githubPost(path: string, token: string, body: unknown): Promise<Response> {
  const headers = { ...githubHeaders(token), 'Content-Type': 'application/json' };
  const payload = JSON.stringify(body);

  try {
    return await fetch(`${GITHUB_API_BASE_URL}${path}`, { method: 'POST', headers, body: payload });
  } catch {
    // uma única tentativa extra em caso de falha de rede transitória
    return fetch(`${GITHUB_API_BASE_URL}${path}`, { method: 'POST', headers, body: payload });
  }
}

export async function fetchGithubRepository(
  owner: string,
  repo: string,
  token: string | undefined
): Promise<GithubRepository> {
  if (!token) {
    throw new GithubCredentialMissingError();
  }

  const response = await githubFetch(`/repos/${owner}/${repo}`, token);

  if (!response.ok) {
    const body = (await response.json().catch(() => ({}))) as { message?: string };
    throw new GithubApiError(response.status, body.message ?? 'erro desconhecido');
  }

  const data = (await response.json()) as {
    name: string;
    full_name: string;
    private: boolean;
    default_branch: string;
    open_issues_count: number;
    html_url: string;
  };

  return {
    name: data.name,
    fullName: data.full_name,
    private: data.private,
    defaultBranch: data.default_branch,
    openIssuesCount: data.open_issues_count,
    htmlUrl: data.html_url,
  };
}

export async function createGithubIssueComment(
  owner: string,
  repo: string,
  issueNumber: number,
  body: string,
  token: string | undefined
): Promise<GithubIssueComment> {
  if (!token) {
    throw new GithubCredentialMissingError();
  }

  const response = await githubPost(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, token, {
    body,
  });

  if (!response.ok) {
    const responseBody = (await response.json().catch(() => ({}))) as { message?: string };
    throw new GithubApiError(response.status, responseBody.message ?? 'erro desconhecido');
  }

  const data = (await response.json()) as {
    id: number;
    body: string;
    html_url: string;
    created_at: string;
  };

  return {
    id: data.id,
    body: data.body,
    htmlUrl: data.html_url,
    createdAt: data.created_at,
  };
}

export async function createGithubIssue(
  owner: string,
  repo: string,
  title: string,
  body: string | undefined,
  token: string | undefined
): Promise<GithubIssue> {
  if (!token) {
    throw new GithubCredentialMissingError();
  }

  const response = await githubPost(`/repos/${owner}/${repo}/issues`, token, { title, body });

  if (!response.ok) {
    const responseBody = (await response.json().catch(() => ({}))) as { message?: string };
    throw new GithubApiError(response.status, responseBody.message ?? 'erro desconhecido');
  }

  const data = (await response.json()) as {
    number: number;
    title: string;
    body: string | null;
    html_url: string;
    created_at: string;
  };

  return {
    number: data.number,
    title: data.title,
    body: data.body,
    htmlUrl: data.html_url,
    createdAt: data.created_at,
  };
}
