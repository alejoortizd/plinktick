import express from 'express';
import { valorTotalStocks } from '../controllers/calcularTotalController.js';

const router = express.Router()

router.post('/calcular-total-stocks', valorTotalStocks)


export default router;
