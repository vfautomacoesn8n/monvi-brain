import Fastify, { type FastifyInstance } from "fastify";
import type { AppConfig } from "../config/environment.js";
import { registerErrorHandler } from "../errors/error-handler.js";
import { registerHealthRoutes } from "../http/routes/health.js";
import { registerAuthRoutes } from "../http/routes/auth.js";
import { registerClientRoutes } from "../http/routes/client.js";
import { registerProjectRoutes } from "../http/routes/project.js";
import { registerContactRoutes } from "../http/routes/contact.js";
import { registerProjectMembershipRoutes } from "../http/routes/project-membership.js";
import { registerTaskRoutes } from "../http/routes/task.js";
import { registerDeliverableRoutes } from "../http/routes/deliverable.js";
import { registerApprovalRoutes } from "../http/routes/approval.js";
import { registerDependencyRoutes } from "../http/routes/dependency.js";
import { registerRiskRoutes } from "../http/routes/risk.js";
import { registerCommentRoutes } from "../http/routes/comment.js";
import { registerHistoryRoutes } from "../http/routes/history.js";
import { registerDashboardRoutes } from "../http/routes/dashboard.js";
import { registerLeadRoutes } from "../http/routes/lead.js";
import { registerOpportunityRoutes } from "../http/routes/opportunity.js";
import { registerActivityRoutes } from "../http/routes/activity.js";
import { registerCommercialDashboardRoutes } from "../http/routes/commercial-dashboard.js";
import { registerSourceRoutes } from "../http/routes/source.js";
import { registerDocumentRoutes } from "../http/routes/document.js";
import { registerDocumentVersionRoutes } from "../http/routes/document-version.js";
import { registerDocumentPermissionRoutes } from "../http/routes/document-permission.js";
import { registerSearchRoutes } from "../http/routes/search.js";
import { registerMemoryNoteRoutes } from "../http/routes/memory-note.js";
import { registerAutomationWorkflowRoutes } from "../http/routes/automation-workflow.js";
import { registerAutomationTriggerRoutes } from "../http/routes/automation-trigger.js";
import { registerAutomationInvocationRoutes } from "../http/routes/automation-invocation.js";
import { registerAutomationDashboardRoutes } from "../http/routes/automation-dashboard.js";
import { registerAiAgentRoutes } from "../http/routes/ai-agent.js";
import { createLoggerOptions } from "../logging/logger.js";

export async function buildApp(
  config: AppConfig
): Promise<FastifyInstance> {
  const app = Fastify({
    logger: createLoggerOptions(config),
    requestIdHeader: "x-request-id"
  });

  registerErrorHandler(app);

  await app.register(registerHealthRoutes, {
    prefix: "/api/v1",
    config
  });

  await app.register(registerAuthRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerClientRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerProjectRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerContactRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerProjectMembershipRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerTaskRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDeliverableRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerApprovalRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDependencyRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerRiskRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerCommentRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerHistoryRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDashboardRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerLeadRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerOpportunityRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerActivityRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerCommercialDashboardRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerSourceRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDocumentRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDocumentVersionRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerDocumentPermissionRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerSearchRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerMemoryNoteRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerAutomationWorkflowRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerAutomationTriggerRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerAutomationInvocationRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerAutomationDashboardRoutes, {
    prefix: "/api/v1"
  });

  await app.register(registerAiAgentRoutes, {
    prefix: "/api/v1"
  });

  return app;
}
