// openai-backend/index.js
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { OpenAI } = require('openai')

dotenv.config()
const app = express()
const port = 3000

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.use(cors())
app.use(express.json())

app.post('/api/ask', async (req, res) => {
  try {
    const { messages } = req.body

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages
    })

    res.json({ reply: response.choices[0].message.content })
  } catch (error) {
    console.error('OpenAI error:', error)
    res.status(500).json({ error: 'Failed to fetch response from OpenAI' })
  }
})

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`)
})
