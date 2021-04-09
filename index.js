require("dotenv").config({ path: "./config/config.env" });
const path = require("path");
const express = require("express");
const DbConnect = require("./config/db");
var cors = require("cors");
const app = express();

DbConnect();
app.use(cors());
app.use(express.json());

//mount routes
const friends = require("./routes/friends");

app.use("/", friends);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api Running");
  });
}

const Port = process.env.PORT;

app.listen(
  Port,
  console.log(`Connected to ${Port} in ${process.env.NODE_ENV} environment.`)
);
