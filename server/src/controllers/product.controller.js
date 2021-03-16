const { productService } = require('../services');

const createProduct = (req, res) => {
  //req.body.product
  const { product } = req.body;
  productService
    .createProduct(product)
    .then((data) => {
      console.log(data);
      res.json({ id: data._id, status: 'successful' });
    })
    .catch((err) => {
      res.json({ status: 'error' });
    });
};

const deleteImageByIndexAndId = async (req, res) => {
  const id = req.params.id;
  const index = req.body.index;
  const product = await productService.getOneProduct(id);
  console.log('eski HALİ ', product);
  product.images.splice(index, 1);
  console.log('YENİ HALİ ', product);
  let result = await productService.updateProduct(id, product);
  res.json({ result });
};

const getOneProduct = (req, res) => {
  // products/afasdfadad
  const id = req.params.id;
  productService
    .getOneProduct(id)
    .then((data) => {
      res.json({ data });
    })
    .catch((err) => {
      res.json({ status: 'error', err });
    });
};

const getProducts = (req, res) => {
  productService
    .getAllProducts()
    .then((data) => {
      res.json({ data: data });
    })
    .catch(() => {
      res.json({ status: 'error' });
    });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  let process = await productService.deleteProductById(id);
  res.json(process);
};

const updateProduct = async (req, res) => {
  let process = await productService.updateProduct(req.params.id, req.body.product);
  res.json({ process });
};

const uploadImageById = async (req, res) => {
  const id = req.params.id;
  const fileNames = req.fileNames;
  let product = { $push: { images: fileNames } };

  let process = await productService.updateProduct(id, product);
  res.json({ process });
};

module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  uploadImageById,
  getOneProduct,
  deleteImageByIndexAndId,
};
