const Product = require('../models/products.model');

const getAllProducts = () => {
  return Product.find({});
};
const createProduct = (productBody) => {
  return Product.create(productBody);
};

const getOneProduct = (id) => {
  return Product.findOne({ _id: id });
};

const deleteProductById = (id) => {
  return Product.deleteOne({ _id: id });
};

const updateProduct = (id, product) => {
  return Product.updateOne({ _id: id }, product);
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProductById,
  updateProduct,
  getOneProduct,
};
