import joi from "joi";

export const isSmsDTO = joi.object({
  from: joi.string().min(6).max(16).required().trim(),
  to: joi.string().min(6).max(16).required().trim(),
  text: joi.string().min(1).max(120).required().trim()
});

export const isAuthDTO = joi.object({
  auth_id: joi.string().required().trim(),
  username: joi.string().required().trim()
});
