const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const { token } = req.cookies

  if (!token) {
    return res.json({
      status: 'fail',
      data: { message: 'You must be logged in to access this resource' },
    })
  }

  const userId = jwt.verify(token, process.env.JWT_SECRET)
  req = { state: { userId } }
  next()
}
