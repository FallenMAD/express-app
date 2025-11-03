const fs = require('fs');
const path = require('path');

const p = path.join(rootDir, 'data', 'cart.json')

export class Class {
  static addProduct(id) {
    fs.readFile(p, (err, fileContent) => {
      const cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent)
      }

      const existingProducts = cart.products.find(p => p.id = id);
      let updatedProduct;
      if (existingProducts) {
        updatedProduct = { ...existingProducts }
        updatedProduct.qty = updatedProduct.qty + 1;
      } else {
        updatedProduct = { id, qty: 1}
      }
    })
  }
}