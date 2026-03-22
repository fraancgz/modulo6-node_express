import path from 'path'
import fs from 'fs'
import 'dotenv/config'

// Defino el puerto
const PORT = process.env.PORT || 3005

// Defino la ruta raiz
const ROOT_PATH = process.cwd()

// Archivo package.json
let packageInfo

try {
    // Ruta del package.json
    const packageRoot = path.join(ROOT_PATH, 'package.json')

    // Leo el archivo package.json  
    const data = fs.readFileSync(packageRoot, 'utf-8');
    // Lo transformo a objeto para poder acceder a sus propiedades
    packageInfo = JSON.parse(data)

} catch (error) {
    console.log('Error al cargar package.json')
    // Establesco data por defecto por seguridad
    packageInfo = { name: "App", version: "0.0.0" }; 
}

// Defino la info estática del servidor y del proyecto
const appStatus = {
    app_name: packageInfo.name,
    app_version: packageInfo.version,
    platform: process.platform,
    node_version: process.version,
    environment: process.env.NODE_ENV || 'development'
}

export {PORT, ROOT_PATH, appStatus}