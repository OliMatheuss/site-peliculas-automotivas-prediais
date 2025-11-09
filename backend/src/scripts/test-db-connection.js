const net = require('net');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const host = process.env.DB_HOST || '127.0.0.1';
const port = parseInt(process.env.DB_PORT || '3306', 10);
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_NAME || 'peliculas_db';

console.log(`Testando conexão TCP para ${host}:${port} ...`);

const socket = new net.Socket();
socket.setTimeout(3000);

socket.on('connect', () => {
  console.log(`TCP OK: consegui conectar em ${host}:${port}`);
  socket.destroy();
  testMariaDB();
});

socket.on('timeout', () => {
  console.error(`TCP TIMEOUT: não foi possível conectar em ${host}:${port} (timeout)`);
  socket.destroy();
  process.exitCode = 1;
});

socket.on('error', (err) => {
  console.error(`TCP ERROR: ${err.message}`);
  socket.destroy();
  process.exitCode = 1;
});

socket.connect(port, host);

async function testMariaDB() {
  try {
    const mariadb = require('mariadb');
    console.log('Pacote `mariadb` encontrado — tentando conectar e executar SELECT 1 ...');

    const pool = mariadb.createPool({
      host,
      port,
      user,
      password,
      database,
      connectionLimit: 5
    });

    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query('SELECT 1 as result');
      console.log('Query executada com sucesso:', rows);
    } finally {
      if (conn) conn.release();
      try { await pool.end(); } catch(e){}
    }

    console.log('\nTeste completo: conexão com MariaDB OK.');
    process.exitCode = 0;
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.warn('Pacote `mariadb` não está instalado. Para um teste completo, rode:');
      console.warn('  npm install mariadb dotenv');
      process.exitCode = 0; // TCP já validado; não falhar o processo por módulo ausente
    } else {
      console.error('Falha ao conectar/executar query no MariaDB:', err.message);
      process.exitCode = 1;
    }
  }
}