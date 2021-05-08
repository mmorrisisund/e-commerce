const { Schema, model } = require('mongoose')

const requiredString = { type: String, required: true }

const petSchema = new Schema({
  name: requiredString,
  type: { ...requiredString, enum: ['dog', 'cat'] },
  dob: { type: Date, required: true },
  description: requiredString,
  sex: { type: Boolean, required: true, enum: ['male', 'female'] },
  spayed: Boolean,
  breed: requiredString,
  created: { type: Date, default: Date.now, immutable: true },
})

module.exports = model('Pet', petSchema)
