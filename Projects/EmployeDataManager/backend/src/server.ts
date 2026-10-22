import express from 'express';
import { env } from './config/api.js';
const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(env.port, ()=>{
  console.log(`server running on port ${env.port}`)
})