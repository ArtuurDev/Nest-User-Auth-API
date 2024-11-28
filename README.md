# Gerenciamento de Usuários

Este projeto é uma API que oferece funcionalidades para gerenciamento de usuários, incluindo criação, listagem, atualização e exclusão de registros. Além disso, implementa técnicas avançadas de segurança e controle de acesso.

## 🚀 Funcionalidades

### **1. Hash de Senha**
- Utilizamos técnicas de hashing para armazenamento seguro das senhas no banco de dados.
- Protege as senhas contra acessos não autorizados em caso de vazamento de dados.

### **2. RBAC (Role-Based Access Control)**
- Controle de acesso baseado em funções.
- Permite gerenciar permissões de usuários com base em suas funções (por exemplo, `admin`

### **3. Upload de Arquivos**
- Suporte para upload de arquivos por usuários.
- Inclui funcionalidades de:
  - **Criação** de novos uploads.
  - **Listagem** de arquivos existentes.
  - **Atualização** de arquivos.
  - **Exclusão** de arquivos.

### **4. CRUD de Usuários**
- **Criar Usuários**: Adicione novos registros de usuários.
- **Listar Usuários**: Obtenha uma lista de todos os usuários cadastrados.
- **Atualizar Usuários**: Edite os dados de um usuário existente.
- **Deletar Usuários**: Remova um usuário do banco de dados.

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Plataforma para o desenvolvimento do backend.
- **Nest.js**: Framework para criação de APIs.
- **bcrypt**: Para hashing seguro de senhas.
- **Multer**: Middleware para upload de arquivos.
- **JWT**: Para autenticação e autorização de usuários.
- **PostgreSQL**: Banco de dados para armazenamento dos registros.

