import { Schema, model } from 'mongoose'

const PointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

const AdressSchema = new Schema({
  place: String,
  number: Number,
  neighborhood: String,
  complement: String,
  city: String,
  state: String,
  country: String,
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
})

const DeliverySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  address: AdressSchema
}, {
  timestamps: true
})

export default model('Delivery', DeliverySchema)
