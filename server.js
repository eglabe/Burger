var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

const PORT = 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));