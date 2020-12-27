var orm = require("../config/orm");

var burger = {
    // get all the burgers, insert a burger, or eat a burger
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(column, value, cb) {
        orm.insertOne("burgers", column, value, function(res) {
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", burgerId, function (res) {
          cb(res);
        });
      }
};

module.exports = burger;