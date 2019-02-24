var express = require("express");
var app = express();

var PORT = process.env.PORT || 6789;

var path = require("path");

// Define public folder for static content
app.use(express.static(__dirname + '/public'));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});