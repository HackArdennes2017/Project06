import express from 'express'

const api = express()

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

api.get('/', (req, res) => res.send('ok'))

api.listen(3001, () => {
  console.log(`listening on 3001`)
})
