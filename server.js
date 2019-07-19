const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const createTables = require("./src/config/dbTables");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", require("./src/routes"));

app.listen(3009);
