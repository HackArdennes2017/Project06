import mongoose from 'mongoose'

export default mongoose.model('Item', {
  type: {
    type: String,
    enum: ['tent', 'chair', 'mattress', 'sleeping-bag'],
  },
  quality: {
    type: String,
    enum: ['good', 'used', 'bad', 'recycle'],
  },
  picture: String,
  pictureSmall: String,
  inStock: { type: Boolean, default: false },
  booked: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false },
})
