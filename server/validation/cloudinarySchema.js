const Joi = require('joi')

module.exports = Joi.object({
  folder: Joi.string().valid('avatars', 'pets').required().messages({
    'any.only': 'Image folder must be "avatars" or "pets"',
  }),
})
