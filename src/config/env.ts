import { ApplicationEnv, loadEnv, trimmedRequiredString, trimmedString } from "@app/internal/env";

import joi from "joi";

const env = loadEnv<ApplicationEnv>({
  port: joi.number().required(),
  node_env: trimmedString.valid("dev", "test", "production", "staging").default("dev"),
  api_version: trimmedString.default("/api/v1"),
  auth_scheme: trimmedString.default("Bearer"),
  is_production: joi.when("node_env", {
    is: joi.valid("dev", "test"),
    then: joi.boolean().default(false),
    otherwise: joi.boolean().default(true)
  }),
  session_ttl: joi.number().required(),
  app_secret: trimmedRequiredString.min(32),
  application_name: trimmedString.default("sms-screener"),
  postgres_host: joi.string().required(),
  postgres_port: joi.number().required(),
  postgres_db: joi.string().required(),
  postgres_user: joi.string().required(),
  postgres_password: joi.string().required(),
  postgres_schema: joi.string().default("public"),
  redis_url: joi.string().trim().required(),
  redis_password: joi.string().default("")
});

export default env;
