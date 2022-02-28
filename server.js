const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});