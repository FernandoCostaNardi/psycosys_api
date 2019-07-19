const Product = require("../models/patient");

exports.getAll = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fielData]) => {
      return res.json(rows);
    })
    .catch(err => {
      console.log(err);
    });
};
