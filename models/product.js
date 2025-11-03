import path from 'path';
import fs from 'fs';
import { rootDir } from '../utils/dirnameHelper.js';

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  return fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }

    cb(JSON.parse(fileContent));
  });
};

export class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const id =
      Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    getProductsFromFile((products) => {
      products.push({ ...this, id });

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((product) => product.id === id);
      cb(product);
    });
  }

  static getAllProducts(cb) {
    getProductsFromFile(cb);
  }
}
