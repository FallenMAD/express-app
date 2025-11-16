import { Product } from '../models/product.js';

export const adminController = {
  getProducts(req, res, next) {
    Product.findAll()
      .then((result) => {
        res.render('admin/list-product', {
          products: result,
          docTitle: 'Admin Products',
          path: req.originalUrl,
        });
      })
      .catch((err) => console.log(err));
  },

  getAddProduct(req, res, next) {
    res.render('admin/edit-product', {
      docTitle: 'Add Product',
      path: req.originalUrl,
      editing: false,
    });
  },

  postAddProduct(req, res, next) {
    const { title, imageUrl, price, description } = req.body;
    Product.create({
      title,
      price,
      imageURL: imageUrl,
      description,
    })
      .then((result) => {
        res.redirect('/admin/list-product');
      })
      .catch((error) => {
        console.log(error);
      });
  },

  deleteProduct(req, res, next) {
    const { id } = req.params;
    Product.destroy({ where: { id } })
      .then(() => {
        res.redirect('/admin/list-product');
      })
      .catch((err) => console.log(err));
  },

  getEditProduct(req, res, next) {
    const { id } = req.params;
    const isEditMode = req.query.edit;
    if (!isEditMode) {
      return res.redirect('/');
    }

    Product.findByPk(id)
      .then((result) => {
        res.render('admin/edit-product', {
          docTitle: 'Editing Product',
          path: req.originalUrl,
          product: result,
          editing: isEditMode,
        });
      })
      .catch((err) => console.log(err));
  },

  postEditProduct(req, res, next) {
    const { id, title, imageUrl, price, description } = req.body;

    Product.findByPk(id)
      .then((product) => {
        product.title = title;
        product.imageURL = imageUrl;
        product.price = price;
        product.description = description;

        return product.save();
      })
      .then((result) => {
        res.redirect('/admin/list-product');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
