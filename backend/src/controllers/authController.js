const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

class AuthController {
    static async register(req, res) {
        try {
            const { nome, email, senha, telefone } = req.body;
            if (!nome || !email || !senha) {
                return res.status(400).json({ message: 'nome, email e senha são obrigatórios' });
            }

            const existing = await Usuario.buscarPorEmail(email);
            if (existing) {
                return res.status(409).json({ message: 'Email já cadastrado' });
            }

            await Usuario.criar({ nome, email, senha, telefone });
            return res.status(201).json({ message: 'Usuário criado com sucesso' });
        } catch (error) {
            console.error('AuthController.register error', error);
            return res.status(500).json({ message: 'Erro interno' });
        }
    }

    static async login(req, res) {
        try {
            const { email, senha } = req.body;
            if (!email || !senha) return res.status(400).json({ message: 'email e senha são obrigatórios' });

            const user = await Usuario.buscarPorEmail(email);
            if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });

            const valid = await bcrypt.compare(senha, user.senha);
            if (!valid) return res.status(401).json({ message: 'Credenciais inválidas' });

            const payload = { id: user.id, nome: user.nome, email: user.email, tipo: user.tipo };
            const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

            // Não retornar a senha
            delete user.senha;

            return res.json({ token, user: payload });
        } catch (error) {
            console.error('AuthController.login error', error);
            return res.status(500).json({ message: 'Erro interno' });
        }
    }
}

module.exports = AuthController;
