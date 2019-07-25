const Patient = require("../models/patient");

exports.getAll = (req, res, next) => {
  Patient.fetchAll()
    .then(([rows, fielData]) => {
      return res.json(rows);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getOne = (req, res, next) => {
  Patient.findOne(req, res)
    .then(([rows, fielData]) => {
      return res.json(rows);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.delete = (req, res, next) => {
  Patient.delete(req, res)
    .then(([rows, fielData]) => {
      console.log(res.json(rows));
      return res.json(rows);
    })
    .catch(err => {
      console.log(err);
    });
};
