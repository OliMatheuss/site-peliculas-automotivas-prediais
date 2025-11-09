const db = require('../config/database');

class Servico {
    static async criar(dados) {
        try {
            const conn = await db.getConnection();
            const query = 'INSERT INTO servicos (nome, descricao, tipo, preco_base, tempo_estimado) VALUES (?, ?, ?, ?, ?)';
            const result = await conn.query(query, [
                dados.nome,
                dados.descricao,
                dados.tipo,
                dados.preco_base,
                dados.tempo_estimado
            ]);
            conn.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async listar(tipo = null) {
        try {
            const conn = await db.getConnection();
            let query = 'SELECT * FROM servicos WHERE ativo = true';
            if (tipo) {
                query += ' AND tipo = ?';
                const [servicos] = await conn.query(query, [tipo]);
                conn.release();
                return servicos;
            }
            const [servicos] = await conn.query(query);
            conn.release();
            return servicos;
        } catch (error) {
            throw error;
        }
    }

    static async buscarPorId(id) {
        try {
            const conn = await db.getConnection();
            const query = 'SELECT * FROM servicos WHERE id = ?';
            const [servico] = await conn.query(query, [id]);
            conn.release();
            return servico;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Servico;