import Product from './model.js';


export default class productController {

  static getProducts = (req, res, next) => {
    res.status(200).json(Product.fetchAll());
  }

  static getProductById = (req, res, next) => {
    res.status(200).json(Product.findById(req.params.prodId));
  }

  static save = (req, res, next) => {
    const prod = req.body;
    const savedProd = new Product(null, prod.title, prod.price, prod.description).save();
    res.status(201).json(savedProd);
  }

  static update = (req, res, next) => {
    const prod = req.body;
    const updatedProd = new Product(req.params.prodId, prod.title, prod.price, prod.description).update();
    res.status(200).json(updatedProd);
  }

  static deleteById = (req, res, next) => {
    Product.deleteById(req.params.prodId);
    res.status(200).end();
  }
}

export class getProducts {
}