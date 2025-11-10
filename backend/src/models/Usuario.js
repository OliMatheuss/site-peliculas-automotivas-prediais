const db = require('../config/database');
const bcrypt = require('bcryptjs');

class Usuario {
    static async criar(dados) {
        try {
            const conn = await db.getConnection();
            // hashear senha antes de salvar
            const saltRounds = 10;
            const hashed = await bcrypt.hash(dados.senha, saltRounds);
            const query = 'INSERT INTO usuarios (nome, email, senha, telefone) VALUES (?, ?, ?, ?)';
            const result = await conn.query(query, [dados.nome, dados.email, hashed, dados.telefone]);
            conn.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async buscarPorEmail(email) {
        try {
            const conn = await db.getConnection();
            const query = 'SELECT * FROM usuarios WHERE email = ?';
            const rows = await conn.query(query, [email]);
            conn.release();
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async listar() {
        try {
            const conn = await db.getConnection();
            const [usuarios] = await conn.query('SELECT id, nome, email, tipo, telefone, criado_em FROM usuarios');
            conn.release();
            return usuarios;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Usuario;