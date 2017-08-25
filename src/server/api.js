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
    console.log(items)
    res.send(items)
  } catch (err) {
    console.log(err)
  }
})

export default api
