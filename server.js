//dependencies
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
//create instance of express
const app = express();

//handlebars setup
app.engine("hbs", hbs({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views/partials"
}));

//set engine to view our hbs templates
app.set("view engine", "hbs");

// //CSS
app.use("/css", express.static(__dirname + "/public/assets/css"));
app.use("/images", express.static(__dirname + "/public/assets/images"));

const jsonParser = bodyParser.json();

// Import routes and give the server access to them.
var routes = require("./controller/pDetailCont.js");
app.use("/", routes);

//create instance of port
const PORT = process.env.PORT || 3000;
//server listener
app.listen(PORT, ()=>{
  console.log(`App running on port ${PORT}`);
})
