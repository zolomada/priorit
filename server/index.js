const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
