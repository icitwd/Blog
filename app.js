const express = require("express");
const mongoose = require('mongoose');
const app = express();
const { connectionHelper } = require('./connectionHelper')
const { BlogCategoryRoutes, BlogRoutes} = require("./routes");

//body parser çağırmadım çünkü expressin içinde default var.

//app.use(express.static("public"));
//app.use(express.urlencoded({extended: true}));



connectionHelper.connect()




app.use("/category", BlogCategoryRoutes);
app.use("/blog", BlogRoutes);




app.listen(3000, () => {
        console.log("Server started on port 3000");
    });