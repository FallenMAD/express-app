import { Product } from '../models/product.js';

export const adminController = {
  getAddProduct(req, res, next) {
    res.render('admin/edit-product', {
      docTitle: 'Add Product',
      path: req.originalUrl,
      editing: false,
    });
  },

  postAddProduct(req, res, next) {
    const { title, imageUrl, price, description } = req.body;
    const product = new Product(null, title, imageUrl, description, price);
    product.save()
      .then(() => {
        res.redirect('/admin/list-product');
      })
      .catch((err) => console.log(err));
  },

  deleteProduct(req, res, next) {
    const { id } = req.params;
    Product.delete(id);
    res.redirect('/admin/list-product');
  },

  getEditProduct(req, res, next) {
    const { id } = req.params;
    const isEditMode = req.query.edit;
    if (!isEditMode) {
      return res.redirect('/');
    }

    Product.findById(id, (product) => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('admin/edit-product', {
        docTitle: 'Editing Product',
        path: req.originalUrl,
        editing: isEditMode,
        product: product,
      });
    });
  },

  postEditProduct(req, res, next) {
    const { id, title, imageUrl, price, description } = req.body;
    const product = new Product(id, title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/list-product');
  },

  getProducts(req, res, next) {
    Product.getProductsFromDB()
      .then(([products, fieldData]) => {
        res.render('admin/list-product', {
          products,
          docTitle: 'Admin Products',
          path: req.originalUrl,
        })
      })
      .catch((err) => console.log(err));
  },
};
