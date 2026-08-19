const API_BASE_URL: string = import.meta.env['VITE_API_BASE_URL'] ?? 'http://127.0.0.1:3000/api/v1';

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

async function request<T>(path: string, options: { method?: string; token?: string; body?: unknown } = {}): Promise<T> {
  const headers: Record<string, string> = {};
  if (options.body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }
  if (options.token) {
    headers['Authorization'] = `Bearer ${options.token}`;
  }

  const requestInit: RequestInit = {
    method: options.method ?? 'GET',
    headers,
  };
  if (options.body !== undefined) {
    requestInit.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, requestInit);

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message = (payload && typeof payload === 'object' && 'message' in payload
      ? String((payload as { message: unknown }).message)
      : `Erro ${response.status} ao chamar a API.`);
    throw new ApiError(response.status, message);
  }

  return payload as T;
}

export function apiGet<T>(path: string, token: string): Promise<T> {
  return request<T>(path, { method: 'GET', token });
}

export function apiPost<T>(path: string, body: unknown, token?: string): Promise<T> {
  const options: { method: string; body: unknown; token?: string } = { method: 'POST', body };
  if (token) {
    options.token = token;
  }
  return request<T>(path, options);
}
