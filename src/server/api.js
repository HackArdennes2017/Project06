import express from 'express'

import Item from 'server/models/Item'

const api = express.Router()

api.post('/item', async (req, res) => {
  const itemRaw = req.body
  const item = new Item(itemRaw)
  await item.save()
  res.send(item)
})

api.get('/item', async (req, res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  } catch (err) {
    console.log(err)
  }
})

api.get('/receive-item', async (req, res) => {
  const { id } = req.query
  const item = await Item.findById(id)
  item.inStock = true
  await item.save()
  res.send('OK')
})

export default api
