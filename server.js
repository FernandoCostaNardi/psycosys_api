const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// app.use('api/', require('./src/./src/routes.js'));

app.listen(3002);
