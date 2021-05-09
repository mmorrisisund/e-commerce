const Joi = require('joi')

module.exports = Joi.object({
  pageSize: Joi.number().min(1).optional(),
  page: Joi.number().min(1).optional(),
})
