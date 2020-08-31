import express from 'express'

import { getValidTill, getCardState } from './mockData'
import { config } from './config'
import { authMiddleware } from './auth'

const app = express()
const port = config.port || 3001

app.get('/check-status', (req, res) => {
  res.send('API running!')
})

app.use('/card/:cardNumber', authMiddleware)
app.get('/card/:cardNumber', async (req, res) => {
  const card = req.params.cardNumber
  const validTill = await getValidTill(card)
  const cardState = await getCardState(card)
  res.send({ validTill, cardState })
})

app.listen(port, () => {
  console.log(`Litacka API listening at http://localhost:${port}`)
  if (!config.username || !config.password) {
    console.error('Missing USERNAME and/or PASSWORD enviromental variables')
  }
})
