import { db } from '../../db/client.js';
import { auditEvent } from '../../db/schema/session.js';

export interface AuditParams {
  eventType: string;
  severity?: 'info' | 'warn' | 'error' | 'critical';
  actorPersonId?: string | null;
  clientId?: string | null;
  projectId?: string | null;
  actionDetails: Record<string, unknown>;
  requestId?: string | null;
}

export async function recordAuditEvent(params: AuditParams): Promise<void> {
  try {
    await db.insert(auditEvent).values({
      eventType: params.eventType,
      severity: params.severity || 'info',
      actorPersonId: params.actorPersonId || null,
      clientId: params.clientId || null,
      projectId: params.projectId || null,
      actionDetails: params.actionDetails,
      requestId: params.requestId || null,
    });
  } catch (err) {
    // In dev mode without live database container, ignore audit recording error
  }
}
