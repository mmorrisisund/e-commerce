const bcrypt = require('bcryptjs')
const { Schema, model } = require('mongoose')

const passwordSchema = new Schema({
  password: { type: String, required: true },
})

passwordSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    try {
      this.password = await bcrypt.hash(this.password, 10)
    } catch (error) {
      next(error)
    }
  }
  next()
})

module.exports = model('Password', passwordSchema)
