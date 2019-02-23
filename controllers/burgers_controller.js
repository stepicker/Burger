var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    console.log("Route hit!", req.body);
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.id });
    });
});


router.put("/api/burgers/:id", function(req, res) {

    burger.update(
        req.params.id,
        function(result) {
        if (result.changedRows === 0) {
            // Return error if no rows were changed
            return res.status(404).end();
        }
        res.status(200).end();
        }
    );
});
  

// Export routes
module.exports = router;