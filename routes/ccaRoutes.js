import express from 'express';
import { informacionStocks } from '../controllers/calcularControllers.js';

const router = express.Router()

router.post('/calcular-acciones', informacionStocks)


export default router;
