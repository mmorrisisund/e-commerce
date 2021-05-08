const { Schema, model } = require('mongoose')

const requiredString = { type: String, required: true }

const userSchema = new Schema({
  email: { ...requiredString, unique: true },
  password: { type: Schema.Types.ObjectId, ref: 'Password' },
  isAdmin: { type: Boolean, default: false },
})

module.exports = model('User', userSchema)
