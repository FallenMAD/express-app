import { Product } from '../models/product.js'

export const productsController = {
  getAddProduct(req, res, next) {
    res.render('add-product', { 
      docTitle: 'Add Product', 
      path: req.originalUrl, 
    });
  },

  addProduct(req, res, next) {
    const { title } = req.body;
    const product = new Product(title)
    product.save(product)
    res.redirect('/');
  },

  getProduct(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop', { 
        products, 
        docTitle: 'Shop', 
        path: req.url 
      });
    })
  }
}


