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

const GITHUB_API_BASE_URL = 'https://api.github.com';
const USER_AGENT = 'monvi-brain-core';

async function githubFetch(path: string, token: string): Promise<Response> {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': USER_AGENT,
    'X-GitHub-Api-Version': '2022-11-28',
  };

  try {
    return await fetch(`${GITHUB_API_BASE_URL}${path}`, { headers });
  } catch {
    // uma única tentativa extra em caso de falha de rede transitória
    return fetch(`${GITHUB_API_BASE_URL}${path}`, { headers });
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
