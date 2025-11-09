const db = require('../config/database');

class Agendamento {
    static async criar(dados) {
        try {
            const conn = await db.getConnection();
            const query = 'INSERT INTO agendamentos (cliente_id, servico_id, data_agendada, observacoes, valor_total) VALUES (?, ?, ?, ?, ?)';
            const result = await conn.query(query, [
                dados.cliente_id,
                dados.servico_id,
                dados.data_agendada,
                dados.observacoes,
                dados.valor_total
            ]);
            conn.release();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async listarPorCliente(clienteId) {
        try {
            const conn = await db.getConnection();
            const query = `
                SELECT a.*, s.nome as servico_nome, s.tipo as servico_tipo 
                FROM agendamentos a 
                JOIN servicos s ON a.servico_id = s.id 
                WHERE a.cliente_id = ?
                ORDER BY a.data_agendada DESC`;
            const [agendamentos] = await conn.query(query, [clienteId]);
            conn.release();
            return agendamentos;
        } catch (error) {
            throw error;
        }
    }

    static async atualizarStatus(id, status) {
        try {
            const conn = await db.getConnection();
            const query = 'UPDATE agendamentos SET status = ? WHERE id = ?';
            const result = await conn.query(query, [status, id]);
            conn.release();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Agendamento;