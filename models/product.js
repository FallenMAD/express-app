import path from 'path'
import fs from 'fs';
import { rootDir } from '../utils/dirnameHelper.js';

const p = path.join(rootDir, 'data', 'products.json')

const getProductsFromFile = (cb) => {
  return fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    
    cb(JSON.parse(fileContent))
  })
}

export class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    getProductsFromFile((products) => {
      console.log(products)
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static getAllProducts(cb) {
    getProductsFromFile(cb)
  }
}