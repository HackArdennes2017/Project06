import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import apiRoutes from './api'

mongoose.connect('mongodb://localhost/sardine')

const api = express()

api.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

api.use(apiRoutes)

// ----------------------------------------

api.listen(3001, () => {
  console.log(`listening on 3001`) // eslint-disable-line
})
