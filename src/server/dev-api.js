import express from 'express'

import api from './api'

const apiServer = express()

apiServer.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

apiServer.use(api)

apiServer.listen(3001, () => {
  console.log(`listening on 3001`)
})
