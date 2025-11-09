import { Cart } from '../models/cart.js';
import { pool as db } from '../utils/database.js';

export class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products(title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.description, this.imageUrl],
    )
  }

  static delete(id) {}

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE id = ?', [id]);
  }

  static getProductsFromDB() {
    return db.execute('SELECT * FROM products');
  }
}
