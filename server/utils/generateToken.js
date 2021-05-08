const jwt = require('jsonwebtoken')

module.exports = payload => {
  return jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET)
}
