import express from 'express'
import appRoutes from './routes/appRoutes.js'
import path from 'path'
import {engine} from 'express-handlebars'
import {PORT, ROOT_PATH} from './config/index.js'

// El import de dotenv está en el archivo de index de Config

// Express
const app = express()

// MiddleWare

// Configurar el motor de plantillas hbs
app.engine('hbs', engine({
    extname: '.hbs', // Define la extensión corta. Sin esto tendriamos que poner la extension completa
    defaultLayout: 'main', //define cuál es el layout base
    layoutsDir: path.join(ROOT_PATH, 'src','views','layouts') //Ruta explícita a layouts
})) 
app.set('view engine', 'hbs') // Lo establece como motor por defecto
app.set('views', path.join(ROOT_PATH, 'src','views')) // Indica la ruta de las vistas


// Routes
app.use('/', appRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
