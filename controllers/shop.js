import { Product } from '../models/product.js'

export const shopController = {
  getProducts(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop/product-list', { 
        products, 
        docTitle: 'Product list', 
        path: req.originalUrl
      });
    })
  },

  getProductDetails(req, res, next) {
    const { id } = req.params
    Product.findById(id, (product) => {
      res.render(`shop/product-details`, {
        docTitle: 'Details Product Page',
        path: req.originalUrl,
        product,
      });
    })
  },

  getCart(req, res, next) {
    res.render('shop/cart', {
      docTitle: 'Cart',
      path: req.originalUrl
    })
  },

  getOrders(req, res, next) {
    res.render('shop/orders', {
      docTitle: 'Orders',
      path: req.originalUrl
    })
  },

  getIndex(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop/index', { 
        products, 
        docTitle: 'Shop', 
        path: req.originalUrl
      });
    })
  },

  getCheckout(req, res, next) {
    res.render('shop/checkout', {
      docTitle: 'Checkout',
      path: req.originalUrl
    })
  },
}


