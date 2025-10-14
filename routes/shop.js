import express from 'express';

import { shopController } from '../controllers/shop.js';

const router = express.Router();

router.get('/', shopController.getProducts);
// router.get('/products')
router.get('/cart', shopController.getCart);
// router.get('/checkout');

export default router;