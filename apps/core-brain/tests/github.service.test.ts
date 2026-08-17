import { describe, expect, it } from 'vitest';
import { fetchGithubRepository, GithubCredentialMissingError } from '../src/modules/integrations/github.service.js';

describe('github.service — sem chamada de rede real', () => {
  it('lança GithubCredentialMissingError quando o token não é informado', async () => {
    await expect(fetchGithubRepository('vfautomacoesn8n', 'monvi-brain', undefined)).rejects.toThrow(
      GithubCredentialMissingError
    );
  });
});
