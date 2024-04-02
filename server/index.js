const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { verifyToken } = require("./utility");

const app = express();
const PORT = process.env.PORT;
const userRouter = require("./routes/user");
const goalsRouter = require("./routes/goals");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/", userRouter);

// Middleware to verify token

const tokenMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(403).json({ error: "Invalid token" });
  }

  req.user = decodedToken;
  next();
};

app.use((req, res, next) => {
  if (req.path === "/" || req.path === "/register" || req.path === "/login") {
    return next();
  }
  tokenMiddleware(req, res, next);
});

app.use("/goals", goalsRouter);

app.get("/test", (req, res) => {
  res.send("Test route is working");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
