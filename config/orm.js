var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableName], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    insertOne: function(newBurger, cb) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + newBurger + "' , false)";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    },
    updateOne: function(burgerId, cb) {
      var queryString = "UPDATE burgers SET devoured = true WHERE id = " + burgerId;
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      });
    }
  };
  
  module.exports = orm;