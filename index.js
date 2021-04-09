require("dotenv").config({ path: "./config/config.env" });
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

const Port = process.env.PORT || 3001;

app.listen(Port, console.log(`Connected to ${Port}`));
