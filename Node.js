const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ev_charging',
});

connection.connect((err) => {
    if (err){
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');


    connection.end((err) => {
        if(err){
            console.error('Error closing MySQL connection: ', err);
            return;
        }
        console.log('MySQL connection closed');
    });
});