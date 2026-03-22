import {appStatus} from '../config/index.js'

/**
* Controlador básico para la ruta raíz.
* Envía una respuesta de texto plano para confirmar que el servidor está en línea.
*/
const home = (req, res) => {
  res.render('home')
}

/**
* Controlador para la ruta de estado.
* Proporciona datos técnicos y el estado del servidor en tiempo real.
*/
const getStatus = (req, res) => {

    const uptimeSeconds = Math.round(process.uptime());
    
    // Respondo con código 200 y un objeto JSON estructurado
    res.status(200).json({
        status: 'ok',
        data: {
            // Spread operator: inyecto las propiedades estáticas
            ...appStatus,
            
            // Agrego los datos dinámicos del servidor
            // Lógica para manejar el singular/plural el tiempo de actividad
            uptime: `${uptimeSeconds} ${uptimeSeconds === 1 ? 'second' : 'seconds'}`, 
            // Fecha y hora actual del servidor (formato local)
            server_time: new Date().toLocaleString(),
            // Identificador único del proceso en el Sistema Operativo
            pid: process.pid // Process ID
        }
    })
}

export {home, getStatus}



