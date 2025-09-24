import express from 'express';

const router = express.Router();

export const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', { 
    docTitle: 'Add Product', 
    path: '/admin/add-product', 
    isActiveProduct: true, 
    productCss: true,
    formsCss: true
  });
})

router.post('/add-product', (req, res, next) => {
  const { title } = req.body;
  products.push({title});
  res.redirect('/');
})

export default router;
