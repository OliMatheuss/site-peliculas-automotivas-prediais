# Site de Instalação de Películas Prediais e Automotivas

Este projeto consiste em um site completo para um serviço de instalação de películas prediais e automotivas, com frontend em React e backend em Node.js.

## Estrutura do Projeto

O projeto está dividido em duas partes principais: frontend e backend.

### Frontend (`/frontend`)

```
frontend/
├── public/                  # Arquivos públicos estáticos
│   ├── index.html          # Página HTML principal
│   ├── manifest.json       # Configurações PWA
│   └── robots.txt         # Configurações para crawlers
├── src/                    # Código fonte do frontend
    ├── assets/            # Recursos estáticos
    │   ├── images/        # Imagens do site (fotos de serviços, banners)
    │   ├── icons/         # Ícones e logos
    │   └── videos/        # Vídeos demonstrativos
    ├── components/        # Componentes React
    │   ├── common/        # Componentes reutilizáveis (botões, inputs, cards)
    │   ├── layout/        # Componentes de layout (header, footer, sidebar)
    │   └── sections/      # Seções específicas das páginas
    ├── pages/             # Páginas do site
    │   ├── home/          # Página inicial
    │   ├── services/      # Página de serviços oferecidos
    │   ├── portfolio/     # Galeria de trabalhos realizados
    │   ├── about/         # Informações sobre a empresa
    │   └── contact/       # Página de contato
    ├── services/          # Serviços e utilitários
    │   ├── api/          # Integrações com o backend
    │   └── utils/        # Funções utilitárias
    ├── styles/           # Estilos da aplicação
    │   ├── global/       # Estilos globais
    │   └── themes/       # Temas e variáveis de estilo
    └── contexts/         # Contextos React para gerenciamento de estado

### Backend (`/backend`)

```
backend/
├── src/                  # Código fonte do backend
│   ├── config/          # Configurações do servidor
│   │   ├── database.js  # Configuração do banco de dados
│   │   └── auth.js      # Configuração de autenticação
│   ├── controllers/     # Controladores da aplicação
│   │   ├── auth/        # Controladores de autenticação
│   │   ├── services/    # Controladores de serviços
│   │   └── contact/     # Controladores de contato
│   ├── models/         # Modelos do banco de dados
│   │   ├── User.js     # Modelo de usuários
│   │   └── Service.js  # Modelo de serviços
│   ├── routes/         # Rotas da API
│   │   ├── auth.js     # Rotas de autenticação
│   │   ├── services.js # Rotas de serviços
│   │   └── contact.js  # Rotas de contato
│   ├── services/       # Lógica de negócio
│   │   ├── email/      # Serviço de envio de emails
│   │   └── upload/     # Serviço de upload de arquivos
│   ├── utils/          # Funções utilitárias
│   │   ├── validation.js # Validações
│   │   └── formatters.js # Formatadores
│   └── middlewares/    # Middlewares
│       ├── auth.js     # Middleware de autenticação
│       └── upload.js   # Middleware de upload
├── tests/              # Testes da aplicação
│   ├── unit/          # Testes unitários
│   └── integration/   # Testes de integração
└── uploads/           # Pasta para armazenamento de arquivos
```

## Funcionalidades Principais

### Frontend

#### Páginas
- **Home**: Página inicial com apresentação dos serviços principais
- **Serviços**: Catálogo detalhado de serviços oferecidos
- **Portfolio**: Galeria de trabalhos realizados com fotos antes/depois
- **Sobre**: História da empresa, missão, visão e valores
- **Contato**: Formulário de contato e informações

#### Componentes
- **Common**: Componentes reutilizáveis em todo o site
- **Layout**: Estrutura visual comum entre as páginas
- **Sections**: Seções específicas para cada página

### Backend

#### API Endpoints
- Autenticação de usuários
- Gerenciamento de serviços
- Upload de imagens
- Envio de formulários de contato
- Gerenciamento de portfólio

#### Modelos de Dados
- Usuários
- Serviços
- Portfólio
- Contatos
- Configurações

## Tecnologias Utilizadas

### Frontend
- React.js
- React Router
- Styled Components
- Axios
- Context API

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Multer (upload de arquivos)
- Nodemailer (envio de emails)

## Configuração do Ambiente

1. Clone o repositório
2. Instale as dependências do frontend e backend
3. Configure as variáveis de ambiente
4. Inicie os servidores de desenvolvimento

## Scripts Disponíveis

### Frontend
- `npm start`: Inicia o servidor de desenvolvimento
- `npm build`: Gera a build de produção
- `npm test`: Executa os testes

### Backend
- `npm start`: Inicia o servidor
- `npm dev`: Inicia o servidor em modo desenvolvimento
- `npm test`: Executa os testes

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature
3. Commit suas alterações
4. Push para a branch
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
