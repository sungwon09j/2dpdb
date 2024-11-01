const mysql = require('mysql2');

module.exports = {
    init: function () {
        return mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: 'user',
            password: '1234567890',
            database: 'user_db',
        })
    },

    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error("mysql connection error : " + err);
            else console.log("mysql is connected successfully!");
        });
    },
};