import 'fastify';

export interface AuthenticatedUser {
  personId: string;
  fullName: string;
  email: string;
  profileId: string | null;
  profileType: string | null;
  roleId: string | null;
  roleName: string | null;
  permissions: string[];
  sessionId: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: AuthenticatedUser;
  }
}
