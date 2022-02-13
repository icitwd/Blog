const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { connectionHelper } = require("./connectionHelper");
const { BlogCategoryRoutes, BlogRoutes } = require("./routes");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//app.use(express.static("public"));
//app.use(express.urlencoded({extended: true}));

connectionHelper.connect();

app.use("/category", BlogCategoryRoutes);
app.use("/blog", BlogRoutes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
