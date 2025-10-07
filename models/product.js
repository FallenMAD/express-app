import path from 'path'
import fs from 'fs';
import { rootDir } from '../utils/dirnameHelper.js';

export class Product {
  constructor(title) {
    this.title = title
  }

  save() {
    const p = path.join(rootDir, 'data', 'products.json')

    fs.readFile(p, (err, fileContent) => {
      let products = [];
      
      if (!err) {
        products = JSON.parse(fileContent)
      }

      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static getAllProducts(cd) {
    const p = path.join(rootDir, 'data', 'products.json')
    // let products = []
    
    return fs.readFile(p, (err, fileContent) => {
      if (err) {
        cd([]);
      }
      
      cd(JSON.parse(fileContent))
      
    })
  }
}