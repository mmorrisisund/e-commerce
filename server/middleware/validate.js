const Joi = require('joi')

module.exports = schema => (req, res, next) => {
  const { error } = schema.validate(req.body)

  if (error) {
    const { details } = error
    const message = details.map(i => i.message).join('\n')

    if (process.env.NODE_ENV === 'development') {
      return res.json({ status: 'fail', data: { error } })
    } else {
      return res.json({ status: 'fail', data: { message } })
    }
  }
  next()
}
