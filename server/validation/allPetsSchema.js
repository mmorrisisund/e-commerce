const Joi = require('joi')

module.exports = Joi.object({
  sort: Joi.string().optional(),
  fields: Joi.string().optional(),
  limit: Joi.number().min(1).optional(),
  page: Joi.number().min(1).optional(),
}).unknown(true)
