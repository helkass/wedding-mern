const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const brideRoute = require("./routes/brides");
const commentsRoute = require("./routes/comments");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running");
});

app.use("/api/auth", authRoute);
app.use("/api/brides", brideRoute);
app.use("/api/comments", commentsRoute);
