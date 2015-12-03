
//using express as frame work
var express = require("express");
var app = express();


//setting a view handler
app.set("view engine", "hbs");
var candidates_controller=require("./controllers/candidates_controller");


app.get("/", candidates_controller.index);

//port listening at local hosting 3000
app.listen(3000, function(){
  console.log("app listening on port 3000");
});
