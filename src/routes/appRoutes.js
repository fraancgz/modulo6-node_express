import express from 'express'
import {home, getStatus} from '../controllers/appController.js'
 
const router = express.Router()

router.get('/', home)

router.get('/status', getStatus)

export default router