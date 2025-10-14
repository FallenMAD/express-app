import { Product } from '../models/product.js'

export const shopController = {
  getProducts(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop/product-list', { 
        products, 
        docTitle: 'Shop', 
        path: req.url 
      });
    })
  },

  getCart(req, res, next) {
    res.render('shop/cart', {
      docTitle: 'Cart',
      path: req.originalUrl
    })
  }
}


