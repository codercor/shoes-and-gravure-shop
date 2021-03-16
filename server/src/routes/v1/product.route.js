const express = require('express');
//const auth = require('../../middlewares/auth');
//const validate = require('../../middlewares/validate');
//const userValidation = require('../../validations/user.validation');
const productController = require('../../controllers/product.controller');
const auth = require('../../middlewares/auth');
const router = express.Router();

const stockFormatter = require('../../middlewares/stockFormatter');

const upload = require('../../middlewares/upload');

router
  .route('/')
  .get(productController.getProducts)
  .post(auth('manageProducts'), stockFormatter, productController.createProduct);
// localhost/products/123131 DELETE
router
  .route('/:id')
  .patch(auth('manageProducts'),stockFormatter,  productController.updateProduct)
  .delete(auth('manageProducts'), productController.deleteProduct)
  .get(productController.getOneProduct);

router
  .route('/:id/image')
  .post(
    auth('manageProducts'),
    (req, res, next) => {
      req.fileNames = [];
      next();
    },
    upload,
    productController.uploadImageById
  )
  .delete(auth('manageProducts'), productController.deleteImageByIndexAndId);

module.exports = router;
