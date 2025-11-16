import { Product } from '../models/product.js';
import { Cart } from '../models/cart.js';

export const shopController = {
  getIndex(req, res, next) {
    Product.findAll()
      .then((result) => {
        res.render('shop/product-list', {
          products: result,
          docTitle: 'Product list',
          path: req.originalUrl,
        });
      })
      .catch((err) => console.log(err));
  },

  getProducts(req, res, next) {
    Product.findAll()
      .then((result) => {
        res.render('shop/index', {
          docTitle: 'Shop',
          path: req.originalUrl,
          products: result,
        });
      })
      .catch((err) => console.log(err));
  },

  getProductDetails(req, res, next) {
    const { id } = req.params;
    Product.findByPk(id)
      .then((result) => {
        res.render('shop/product-details', {
          docTitle: 'Details Product Page',
          path: '/products',
          product: result,
        });
      })
      .catch((err) => console.log(err));
  },

  getCart(req, res, next) {
    Cart.getCartProducts((cart) => {
      // Product.getProductsFromDB((products) => {
      //   const cartProducts = [];
      //   for (const product of products) {
      //     const cartProduct = cart.products.find((item) => item.id === product.id);
      //     console.log('cartProduct', cartProduct);
      //     if (cartProduct) {
      //       cartProducts.push({ ...product, qty: cartProduct.qty });
      //     }
      //   }
      //   console.log(cartProducts);
      //   res.render('shop/cart', {
      //     docTitle: 'Cart',
      //     path: req.originalUrl,
      //     products: cartProducts,
      //   });
      // });

      res.render('shop/cart', {
        docTitle: 'Cart',
        path: req.originalUrl,
      });
    });
  },

  postCart(req, res, next) {
    const { id } = req.body;
    // Product.findById(id, (product) => {
    //   Cart.addProduct(id, product.price);
    // });
    res.redirect('/cart');
  },

  deleteCartProduct(req, res, next) {
    const { id } = req.params;
    // Product.findById(id, (product) => {
    //   Cart.deleteProduct(id, product.price);
    //
    // });
    res.redirect('/cart');
  },

  getOrders(req, res, next) {
    res.render('shop/orders', {
      docTitle: 'Orders',
      path: req.originalUrl,
    });
  },

  getCheckout(req, res, next) {
    res.render('shop/checkout', {
      docTitle: 'Checkout',
      path: req.originalUrl,
    });
  },
};
