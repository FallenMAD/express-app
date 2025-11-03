import express from 'express';
import { adminController } from '../controllers/admin.js';

const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
router.get('/list-product', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:id', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);
export default router;
