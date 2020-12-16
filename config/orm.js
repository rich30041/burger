var connection = require("../config/connection.js");

var orm = {
    selectAll: (table, cb) => {
        console.log(table);
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (table, column, value, cb) => {
        // console.log(table + column + value);
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], (err, res) => {
            if(err) throw err;
            // console.log(res);
            cb(res);
        });
    },
    updateOne: (table, column, burgerId, cb) => {
        var queryString = "UPDATE ?? SET ?? = 1 WHERE id = ?";
        connection.query(queryString, [table, column, burgerId], (err, res) => {
            console.log("update" + queryString);
            if (err) throw err;
            // console.log(res);
            cb(res);
    });
    }
}


module.exports = orm;