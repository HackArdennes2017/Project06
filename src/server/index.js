require('es6-promise').polyfill()
require('isomorphic-fetch')

import express from 'express'
import compression from 'compression'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from 'config'
import render from 'server/render'
import api from 'server/api'

if (config.env === 'production') {
  mongoose.connect('mongodb://localhost/sardine')
}

const server = express()

const stats =
  config.env === 'production'
    ? require(path.join(config.distFolder, 'stats.json'))
    : {}

if (config.env === 'development') {
  require('./webpack')(server)
}

if (config.env === 'production') {
  server.use(bodyParser.json({ limit: '50mb' }))
  server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  server.use('/api', api)
  server.use(compression())
  server.use('/dist', express.static(config.distFolder))
}

server.use('/assets', express.static(config.assetsFolder))
server.use(render(stats))

server.listen(config.port, 'localhost', () => {
  console.log(`> http://localhost:${config.port} - ${config.env}`) // eslint-disable-line
})
