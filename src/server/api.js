import express from 'express'
import path from 'path'
import mime from 'mime'
import crypto from 'crypto'
import multer from 'multer'

import resizeImage from './resizeImage'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../assets/uploads'))
  },
  filename: (req, file, cb) => {
    /* eslint-disable */
    crypto.pseudoRandomBytes(16, (err, raw) => {
      /* eslint-enable */
      cb(
        null,
        raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype), // eslint-disable-line
      )
    })
  },
})

const upload = multer({ storage })

import Item from 'server/models/Item'

const api = express.Router()

api.post('/item', upload.single('picture'), async (req, res) => {
  const filenameSmall = await resizeImage(req.file.filename)
  const item = new Item({
    ...req.body,
    picture: req.file.filename,
    pictureSmall: filenameSmall,
  })
  await item.save()
  res.send(item)
})

api.get('/item', async (req, res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  } catch (err) {
    console.log(err) // eslint-disable-line
  }
})

api.get('/receive-item', async (req, res) => {
  const { id } = req.query
  const item = await Item.findById(id)
  item.inStock = true
  await item.save()
  res.send({ ok: true })
})

api.post('/items/:id/book', async (req, res) => {
  try {
    const { _id } = req.body
    const item = await Item.findById(_id)
    item.booked = true
    await item.save()
    res.send(item)
  } catch (err) {
    res.send(err)
  }
})

api.post('/items/:id/delete', async (req, res) => {
  try {
    const { _id } = req.body
    const item = await Item.findById(_id)
    item.deleted = true
    await item.save()
    res.send(item)
  } catch (err) {
    res.send(err)
  }
})

api.post('/items/:id/receive', async (req, res) => {
  try {
    const { _id } = req.body
    const item = await Item.findById(_id)
    item.inStock = true
    await item.save()
    res.send(item)
  } catch (err) {
    res.send(err)
  }
})

api.get('/take-item', async (req, res) => {
  try {
    const { id } = req.query
    const item = await Item.findById(id)
    item.deleted = true
    await item.save()
    res.send(item)
  } catch (err) {
    res.send(err)
  }
})

export default api
