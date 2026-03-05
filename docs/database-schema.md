# 🗄️ Esquema do Banco de Dados

A DALUDI utiliza o banco de dados Postgres via InsForge/Supabase. Abaixo estão as definições das tabelas principais.

## 📊 Tabela: `leads`
Armazena todas as capturas realizadas no funil de vendas.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|-------------|-----------|
| `id` | `uuid` | Sim | Identificador único (Primary Key) |
| `nome` | `text` | Sim | Nome completo do lead |
| `empresa` | `text` | Sim | Nome da organização |
| `cargo` | `text` | Sim | Cargo do decisor |
| `email` | `text` | Sim | E-mail de contato |
| `whatsapp` | `text` | Sim | Telefone/WhatsApp |
| `faturamento_mensal` | `text` | Não | Faixa de faturamento (vinda do diagnóstico) |
| `numero_colaboradores` | `text` | Não | Qtd de funcionários |
| `principal_gargalo` | `text` | Não | Dor estratégica relatada |
| `objetivo_12_meses` | `text` | Não | Metas de crescimento |
| `status` | `text` | Sim | `lead_inicial` ou `qualified` |
| `origem` | `text` | Sim | Local da captura (ex: `home_form`) |
| `created_at` | `timestamp` | Sim | Data de criação |
| `updated_at` | `timestamp` | Sim | Data da última alteração |

## 🔑 Tabela: `admin_users`
Controle de acesso ao painel administrativo.

| Coluna | Tipo | Obrigatório | Descrição |
|--------|------|-------------|-----------|
| `id` | `uuid` | Sim | Identificador único |
| `username` | `text` | Sim | User de login (Unique) |
| `password_hash` | `text` | Sim | Senha (atualmente texto plano - *Atenção*) |
| `email` | `text` | Não | E-mail para recebimento de 2FA |
| `status` | `text` | Sim | `pending`, `approved` ou `blocked` |
| `otp_code` | `text` | Não | Último código de 6 dígitos gerado |
| `otp_expiry` | `timestamp` | Não | Validade do OTP (10 minutos) |
| `created_at` | `timestamp` | Sim | Data de registro |

---
*DALUDI DB Schema — v1.0 — Março 2026*
