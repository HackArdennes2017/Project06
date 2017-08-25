import express from 'express'
import mongoose from 'mongoose'

import Item from 'server/models/Item'

// yourope
mongoose.connect('mongodb://localhost/sardine')

const api = express()

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ---------------------------------------- routes

api.post('/item', async (req, res) => {
  const itemRaw = req.body
  const item = new Item(itemRaw)
  await item.save()
  res.send(item)
})

// ----------------------------------------

api.listen(3001, () => {
  console.log(`listening on 3001`)
})
