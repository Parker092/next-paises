import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'paises',
  port: 3306
});

export async function query(sql, values) {
  const [results] = await pool.query(sql, values);
  return results;
}
