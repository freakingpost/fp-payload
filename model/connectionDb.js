module.exports.connectDB = function () {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: '209.99.16.168',
        user: 'proxa91n_admin',
        password: 'QDmyD+F?]Y{E',
        database: 'proxa91n_fp_payload'
    });

    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });
}