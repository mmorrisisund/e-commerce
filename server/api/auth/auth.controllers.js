const bcrypt = require('bcryptjs')

const User = require('../../models/user')
const Password = require('../../models/password')
const catchAsync = require('../../utils/catchAsync')
const generateToken = require('../../utils/generateToken')

const isDev = process.env.NODE_ENV === 'development'

exports.signUp = catchAsync(async (req, res) => {
  const { email, password } = req.body

  const pw = new Password({ password })
  const user = new User({ email, password: pw._id })

  try {
    await pw.save()
    await user.save()
  } catch (error) {
    if (error.code === 11000) {
      return res.json({
        status: 'fail',
        data: { email: 'Email already exists' },
      })
    }
  }

  res.json({ status: 'success', data: { user } })
})

exports.login = catchAsync(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).populate('password').exec()
  if (!user) {
    return res.json({
      status: 'fail',
      data: { email: 'Email address not found' },
    })
  }

  const isValid = await bcrypt.compare(password, user.password.password)
  if (!isValid) {
    return res.json({ status: 'fail', data: { password: 'Invalid password' } })
  }

  token = generateToken(user._id.toString())
  res.cookie('token', token, { httpOnly: true, sameSite: true, secure: !isDev })
  res.json({ status: 'success', data: null })
})

exports.logout = (req, res) => {
  res.clearCookie('token')
  res.json({ status: 'success', data: null })
}
