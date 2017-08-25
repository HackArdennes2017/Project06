import mongoose from 'mongoose'

export default mongoose.model('Item', {
  type: {
    type: String,
    enum: ['tent'],
  },
  quality: {
    type: String,
    enum: ['good', 'used', 'bad', 'recycle'],
  },
  image: String,
})
