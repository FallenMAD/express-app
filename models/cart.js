import path from 'path';
import fs from 'fs';
import { rootDir } from '../utils/dirnameHelper.js';

const p = path.join(rootDir, 'data', 'cart.json');

export class Cart {
  static addProduct(id, price) {
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart.products.findIndex((p) => p.id === id);
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;

        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }

      cart.totalPrice = cart.totalPrice + +price;
      fs.writeFile(p, JSON.stringify(cart), (err) => console.log(err));
    });
  }

  static deleteProduct(id, price) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }

      const cart = JSON.parse(fileContent);
      const { products, totalPrice } = cart;

      const existingProductIndex = products.findIndex((p) => p.id === id);
      const updatedProducts = products.filter((p) => p.id !== id);
      const updatedPrice = totalPrice - (existingProductIndex.qty * price);

      fs.writeFile(p, JSON.stringify({products: updatedProducts, totalPrice: updatedPrice}), (err) => console.log(err));
    })
  }
}
