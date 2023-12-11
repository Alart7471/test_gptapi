import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { main } from './modules/openai-gpt.js'


const PORT = 8081;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.get('/api/gpt', async (req, res) =>{
    console.log(req.query.message)
    
    let answer = await main(req.query.message)
    res.status(200).json({
        answer: answer
    })
  })

app.listen(PORT, (err) => {
    if(err){
      return console.log(err);
    }
    console.log('Server OK (:' + PORT + ')')
  })