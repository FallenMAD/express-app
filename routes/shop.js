import express from 'express';

import { products as adminData } from './admin.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', { 
    products: adminData, 
    docTitle: 'Shop', 
    path: '/', 
    isActiveShop: true, 
    productCss: true 
  });
});

export default router;