import { Product } from '../models/product.js';

export const adminController = {
  getAddProduct(req, res, next) {
    res.render('admin/add-product', {
      docTitle: 'Add Product',
      path: req.originalUrl,
    });
  },

  postAddProduct(req, res, next) {
    const { title, imageUrl, price, description } = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save(product);
    res.redirect('/');
  },

  getProducts(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('admin/list-product', {
        products,
        docTitle: 'Admin Products',
        path: req.originalUrl,
      });
    });
  },
};
