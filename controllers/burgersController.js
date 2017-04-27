var express = require("express");

var router = express.Router();

// require burger.js
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file

router.get("/", function(req, res){
    res.end();
});

// Export routes for server.js to use.
module.exports = router;