//express server
var express = require("express");

//express router ---> CRUD
var router = express.Router();

/*
  ROUTES
*/

//home page
router.get("/", function(req, res){
  res.render("home", {});
});


module.exports = router;
