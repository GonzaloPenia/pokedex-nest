import * as Joi from 'joi';

export const joiValidationSchema = Joi.object({
  MONGODB: Joi.string().uri().required(),
  PORT: Joi.number().min(3000).default(3005),
  DEFAULT_LIMIT: Joi.number().min(1).default(6),
});
