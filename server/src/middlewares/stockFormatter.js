module.exports = (req, res, next) => {
  let stock = req.body.product.stock;
  Object.keys(stock).map((key) => {
    Object.keys(stock[key]).map((subkey) => {
      stock[key][subkey] = Number(stock[key][subkey]);
    });
  });
  next();
};
