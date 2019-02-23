var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newBurger, cb) {
        console.log("What the heck are you???", newBurger);
        orm.insertOne(newBurger, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgerId, cb) {
        orm.updateOne(burgerId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;