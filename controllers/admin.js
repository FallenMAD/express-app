import { Product } from "../models/product.js";

export const adminController = {
  getAddProduct(req, res, next) {
    res.render('admin/add-product', { 
      docTitle: 'Add Product', 
      path: req.originalUrl, 
    });
  },
  
  postAddProduct(req, res, next) {
    const { title } = req.body;
    const product = new Product(title)
    product.save(product)
    res.redirect('/');
  },
}