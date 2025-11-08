import { Product } from '../models/product.js';
import { Cart } from '../models/cart.js';

export const shopController = {
  getProducts(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop/product-list', {
        products,
        docTitle: 'Product list',
        path: req.originalUrl,
      });
    });
  },

  getProductDetails(req, res, next) {
    const { id } = req.params;
    Product.findById(id, (product) => {
      res.render('shop/product-details', {
        docTitle: 'Details Product Page',
        path: '/products',
        product,
      });
    });
  },

  getCart(req, res, next) {
    Cart.getCartProducts(cart => {
      Product.getAllProducts((products) => {
        const cartProducts = [];
        for (const product of products) {
          const cartProduct = cart.products.find((item) => item.id === product.id);
          console.log('cartProduct', cartProduct)
          if (cartProduct) {
            cartProducts.push({...product, qty: cartProduct.qty});
          }
        }
        console.log(cartProducts);
        res.render('shop/cart', {
          docTitle: 'Cart',
          path: req.originalUrl,
          products: cartProducts,
        });
      })
    })
  },

  deleteCartProduct(req, res, next) {
    const { id } = req.params;
    Product.findById(id, (product) => {
      Cart.deleteProduct(id, product.price);
      res.redirect('/cart');
    });
  },

  postCart(req, res, next) {
    const { id } = req.body;
    Product.findById(id, (product) => {
      Cart.addProduct(id, product.price);
    });
    res.redirect('/cart');
  },

  getOrders(req, res, next) {
    res.render('shop/orders', {
      docTitle: 'Orders',
      path: req.originalUrl,
    });
  },

  getIndex(req, res, next) {
    Product.getAllProducts((products) => {
      res.render('shop/index', {
        products,
        docTitle: 'Shop',
        path: req.originalUrl,
      });
    });
  },

  getCheckout(req, res, next) {
    res.render('shop/checkout', {
      docTitle: 'Checkout',
      path: req.originalUrl,
    });
  },
};
