const express = require("express");
const routes = express.Router();

const patientController = require("./controllers/PatientController");

routes.get("/patients", patientController.getAll);
routes.get("/patients/:nome", patientController.getOne);
routes.delete("/patients/:id", patientController.delete);

module.exports = routes;
