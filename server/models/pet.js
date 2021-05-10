const { Schema, model } = require('mongoose')

const requiredString = { type: String, required: true }

const petSchema = new Schema({
  name: requiredString,
  type: { ...requiredString, enum: ['dog', 'cat'] },
  dob: { type: Date, required: true },
  description: requiredString,
  sex: { ...requiredString, enum: ['male', 'female'] },
  spayed: Boolean,
  breed: requiredString,
  created: { type: Date, default: Date.now, immutable: true },
  image: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  location: {
    type: { type: String, enum: ['Point'] },
    coordinates: { type: [Number] },
  },
})
petSchema.index({ location: '2dsphere' })

module.exports = model('Pet', petSchema)
