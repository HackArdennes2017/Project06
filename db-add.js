require('babel-register')

const mongoose = require('mongoose')

const Item = require('./src/server/models/Item')

mongoose.connect('mongodb://localhost/sardine')

async function add([type, quality, picture, pictureSmall]) {
  const item = new Item({
    type,
    quality,
    picture,
    pictureSmall,
    inStock: true,
  })
  await item.save()
}

async function doAll() {
  const items = await Item.find({ inStock: true, booked: false })
  if (items.length > 15) {
    process.exit(0)
    return
  }
  await add([
    'tent',
    'good',
    '907e80b81c7d456e4cb59be0926223141503826321951.jpeg',
    '907e80b81c7d456e4cb59be0926223141503826321951_small.jpeg',
  ])
  await add([
    'chair',
    'used',
    '0bbf686e998cddfb3ee6d722110ceb181503825248667.jpeg',
    '0bbf686e998cddfb3ee6d722110ceb181503825248667_small.jpeg',
  ])
  await add([
    'mattress',
    'used',
    '435975b0730b8f8b7d7b782ed99271d21503824784639.jpeg',
    '435975b0730b8f8b7d7b782ed99271d21503824784639_small.jpeg',
  ])
  await add([
    'tent',
    'bad',
    '907e80b81c7d456e4cb59be0926223141503826321951.jpeg',
    '907e80b81c7d456e4cb59be0926223141503826321951_small.jpeg',
  ])
  await add([
    'sleeping-bag',
    'recycle',
    'dab2f10a15a180b50d416ad9932f4e341503826395124.jpeg',
    'dab2f10a15a180b50d416ad9932f4e341503826395124_small.jpeg',
  ])

  await add([
    'tent',
    'used',
    '907e80b81c7d456e4cb59be0926223141503826321951.jpeg',
    '907e80b81c7d456e4cb59be0926223141503826321951_small.jpeg',
  ])
  await add([
    'chair',
    'good',
    '0bbf686e998cddfb3ee6d722110ceb181503825248667.jpeg',
    '0bbf686e998cddfb3ee6d722110ceb181503825248667_small.jpeg',
  ])
  await add([
    'mattress',
    'recycle',
    '435975b0730b8f8b7d7b782ed99271d21503824784639.jpeg',
    '435975b0730b8f8b7d7b782ed99271d21503824784639_small.jpeg',
  ])
  await add([
    'sleeping-bag',
    'good',
    'dab2f10a15a180b50d416ad9932f4e341503826395124.jpeg',
    'dab2f10a15a180b50d416ad9932f4e341503826395124_small.jpeg',
  ])
  await add([
    'tent',
    'good',
    'fddf85fc8e8910cfa42f838f1850af2c1503828117574.jpeg',
    'fddf85fc8e8910cfa42f838f1850af2c1503828117574_small.jpeg',
  ])
  process.exit(0)
}

doAll()
