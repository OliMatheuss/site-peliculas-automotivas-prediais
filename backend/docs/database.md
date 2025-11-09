# Documentação do Banco de Dados - Sistema de Películas

## Visão Geral
Este documento detalha a estrutura do banco de dados MariaDB para o sistema de gerenciamento de instalações de películas prediais e automotivas.

## Escolha do MariaDB
- **Confiabilidade**: Fork do MySQL com garantia de continuidade open-source
- **Performance**: Otimizado para operações CRUD frequentes
- **Compatibilidade**: Funciona perfeitamente com XAMPP
- **Escalabilidade**: Suporta crescimento do volume de dados
- **Comunidade ativa**: Facilidade de encontrar soluções e documentação

## Estrutura do Banco de Dados

### 1. Tabela: `usuarios`
```sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('admin', 'cliente') DEFAULT 'cliente',
    telefone VARCHAR(20),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
**Justificativa**:
- Autenticação e controle de acesso
- Diferenciação entre administradores e clientes
- Dados essenciais para contato

### 2. Tabela: `servicos`
```sql
CREATE TABLE servicos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    tipo ENUM('predial', 'automotivo') NOT NULL,
    preco_base DECIMAL(10,2),
    tempo_estimado VARCHAR(50),
    ativo BOOLEAN DEFAULT true,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
**Justificativa**:
- Cadastro dos tipos de serviços oferecidos
- Separação entre serviços prediais e automotivos
- Preço base para orçamentos
- Flag de ativo para gerenciar disponibilidade

### 3. Tabela: `agendamentos`
```sql
CREATE TABLE agendamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    servico_id INT,
    data_agendada DATETIME NOT NULL,
    status ENUM('pendente', 'confirmado', 'concluido', 'cancelado') DEFAULT 'pendente',
    observacoes TEXT,
    valor_total DECIMAL(10,2),
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);
```
**Justificativa**:
- Controle de agendamentos
- Rastreamento do status do serviço
- Vinculação com cliente e serviço
- Registro de valores e observações

### 4. Tabela: `portfolio`
```sql
CREATE TABLE portfolio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT,
    tipo ENUM('predial', 'automotivo') NOT NULL,
    imagem_antes VARCHAR(255),
    imagem_depois VARCHAR(255),
    servico_id INT,
    data_realizacao DATE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);
```
**Justificativa**:
- Showcase de trabalhos realizados
- Demonstração visual (antes/depois)
- Referência para novos clientes

### 5. Tabela: `orcamentos`
```sql
CREATE TABLE orcamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    servico_id INT,
    area_aproximada DECIMAL(10,2),
    tipo_imovel VARCHAR(50),
    tipo_veiculo VARCHAR(50),
    status ENUM('pendente', 'enviado', 'aprovado', 'rejeitado') DEFAULT 'pendente',
    valor_estimado DECIMAL(10,2),
    validade_orcamento DATE,
    observacoes TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);
```
**Justificativa**:
- Gestão de orçamentos
- Cálculos baseados em área ou tipo de veículo
- Controle de validade
- Histórico de negociações

### 6. Tabela: `avaliacoes`
```sql
CREATE TABLE avaliacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT,
    servico_id INT,
    agendamento_id INT,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    comentario TEXT,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id),
    FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id)
);
```
**Justificativa**:
- Feedback dos clientes
- Métricas de satisfação
- Social proof para novos clientes

### 7. Tabela: `contatos`
```sql
CREATE TABLE contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    mensagem TEXT,
    status ENUM('novo', 'em_analise', 'respondido') DEFAULT 'novo',
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
**Justificativa**:
- Captura de leads
- Gestão de contatos do formulário
- Acompanhamento de status das mensagens

## Índices e Otimizações
```sql
-- Índices para melhorar performance de consultas frequentes
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_agendamentos_data ON agendamentos(data_agendada);
CREATE INDEX idx_portfolio_tipo ON portfolio(tipo);
CREATE INDEX idx_servicos_tipo ON servicos(tipo);
```

## Segurança e Integridade
- Senhas armazenadas com hash
- Constraints de chave estrangeira
- Validações de dados
- Enums para limitar valores válidos
- Timestamps para auditoria

## Decisões de Design
1. **Normalização**: Estrutura normalizada para evitar redundância
2. **Tipos de Dados**: Escolhidos para otimizar espaço e performance
3. **Relacionamentos**: Definidos para manter integridade referencial
4. **Enums**: Usados para campos com valores predefinidos
5. **Timestamps**: Rastreamento automático de criação de registros