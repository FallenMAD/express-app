import mysql from 'mysql2';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Romanqwert12345',
}).promise();