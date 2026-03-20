import express from 'express'
import 'dotenv/config'

const app = express()

const PORT = process.env.PORT || 3000

// MiddleWare

// Routes
app.get('/', (req, res) => {
  res.send('Pagina inicial')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
