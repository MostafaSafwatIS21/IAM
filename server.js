import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dbConnection from "./config/dbConnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import env from "dotenv";
env.config();

import routes from "./Router/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("tiny"));
app.get("/test", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Server is running",
  });
});
app.use("/api/v1/app", routes);
app.all("/*splat", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use(errorHandler);

app.listen(process.env.PORT || 3040, () => {
  dbConnection();
  console.log(`Server is running on port ${process.env.PORT || 3040}`);
});
