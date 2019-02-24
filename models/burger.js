var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(newBurger, cb) {
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