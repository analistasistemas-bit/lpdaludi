# Design: Página Administrativa (/admin) e Gestão de Leads

## 1. Objetivo
Criar uma interface administrativa segura e integrada para:
1. Visualizar todos os leads cadastrados pelos formulários da Landing Page.
2. Gerenciar o acesso de novos usuários administrativos (aprovação/rejeição).

## 2. Abordagem e Arquitetura Selecionada

A solução escolhida (Opção 2) integra todo o fluxo de gestão na própria página `/admin.html`. 

### 2.1. Frontend (`/admin/index.html` ou `/admin.html`)
- Página única em HTML/CSS/JS (Vanilla).
- **Sem Autenticação (Deslogado)**: Exibe formulário de Login e opção para "Solicitar Acesso" (Cadastro).
- **Com Autenticação (Logado)**: Exibe o Dashboard com duas abas principais:
  - **Aba 1: Leads** (Lista de leads capturados com status e detalhes).
  - **Aba 2: Acessos** (Lista de usuários pendentes solicitando acesso).

### 2.2. Backend (Insforge Edge Functions)
Como o site é hospedado de forma estática, a lógica de negócio e segurança residirá inteiramente no Backend (Insforge):
- **Tabela `admin_users`**: Armazenar e-mail, senha (hash) e status (`pending`, `approved`).
- **Função `admin-auth`**: Recebe credenciais de login e retorna um token (ou valida o login).
- **Função `admin-register`**: Recebe a solicitação de novo usuário, salva no banco como `pending` e dispara e-mail via **Resend**.
- **Função `admin-leads-get`**: Retorna a lista de leads apenas para usuários autenticados.
- **Função `admin-users-manage`**: Lista, aprova ou bloqueia usuários (acessível apenas por usuários aprovados, como o `root`).

### 2.3. Serviço de E-mail (Resend)
O envio de e-mails de notificação de novo cadastro será feito usando a API do Resend diretamente de dentro da Edge Function `admin-register`.
- **Gatilho**: O e-mail `diego@daludi.com.br` recebe um alerta assim que um novo usuário administrativo se cadastra, informando-o para acessar o painel e gerenciar a liberação.

## 3. Estrutura do Banco de Dados (Insforge)

### Tabela `admin_users` (NOVA)
- `id` (uuid, primary key)
- `username` (texto, único)
- `password_hash` (texto)
- `status` (texto: 'pending', 'approved', 'blocked')
- `created_at` (timestamp)

*(Nota: Segurança exige que a senha seja encriptada via bcrypt ou similar no backend, ou delegada para um serviço de Auth nativo se o Insforge suportar).*

## 4. Requisitos de UI (Design System)
- A estética seguirá a identidade visual `DALUDI` atual:
  - Cores: Fundo `#050505`/`#11151A` e acento `#00F5C4`.
  - Glassmorphism para cards de login e modal.
  - Tabela limpa e funcional para leitura ágil de métricas de leads.

## 5. Próximos Passos
1. Criar a tabela `admin_users` e inserir manualmente o usuário `root`.
2. Desenvolver as Edge Functions.
3. Desenvolver a página frontend `/admin/index.html`.
