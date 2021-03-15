module.exports.connectDB = function () {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: process.env.db_host,
        user: process.env.db_user,
        password: process.env.db_password,
        database: process.env.db_name
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });
}