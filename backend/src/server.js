const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API está funcionando!' });
});

// Porta do servidor
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});