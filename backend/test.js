require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'test'
});

async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 AS result");
    console.log('Conexão funcionando:', rows);
  } catch (err) {
    console.error('Erro na conexão:', err);
  } finally {
    if (conn) conn.release();
  }
}

testConnection();