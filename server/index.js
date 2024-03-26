const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
