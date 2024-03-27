const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT;
const userRouter = require("./routes/user");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
