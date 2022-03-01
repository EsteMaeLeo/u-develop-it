const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MySQL password
        user: 'root',
        //Your MySQL password
        password: 'Sql2022',
        database: 'election'
    },
    console.log('connected to the election database.')
);

module.exports = db;