const inputCheck = require('./utils/inputCheck');

const db = require('./db/connection');

const express = require('express');

const apiRoutes = require('./routes/apiRoutes');

const { debuggerStatement } = require('@babel/types');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);


// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUE (?,?,?,?)`;

// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });