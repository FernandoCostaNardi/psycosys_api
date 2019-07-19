const express = require("express");
const routes = express.Router();

const patientController = require("./controllers/PatientController");

routes.get("/patients", patientController.getAll);

module.exports = routes;
