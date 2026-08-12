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

  return app;
}
