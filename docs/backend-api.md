# 🔌 Documentação da API (Edge Functions)

Este documento descreve as Edge Functions que compõem o backend da DALUDI, hospedadas na plataforma **InsForge**.

## 🚀 Endpoints Públicos (Funil de Leads)

### 1. `lead-inicial`
- **Slug**: `lead-inicial`
- **Método**: `POST`
- **Descrição**: Cria um novo registro de lead a partir dos dados simplificados da Home.
- **Payload**: `{ "nome", "email", "empresa", "whatsapp", "cargo" }`
- **Retorno**: `{ "id": "uuid", "success": true }`

### 2. `lead-get`
- **Slug**: `lead-get`
- **Método**: `GET`
- **Descrição**: Recupera dados parciais de um lead via ID para pré-preenchimento.
- **Parâmetros**: `?id=uuid`
- **Retorno**: Objeto do lead ou erro 404.

### 3. `lead-diagnostico`
- **Slug**: `lead-diagnostico`
- **Método**: `POST`
- **Descrição**: Atualiza o lead com dados de diagnóstico e dispara e-mails via Resend.
- **Payload**: `{ "id", "faturamento_mensal", "numero_colaboradores", "principal_gargalo", "objetivo_12_meses" }`
- **Ações**: Altera status para `qualified` e envia PDF ao lead e notificação interna.

---

## 🔐 Endpoints Administrativos (Autenticação)

### 4. `admin-auth`
- **Slug**: `admin-auth`
- **Método**: `POST`
- **Descrição**: Primeira etapa do login. Valida credenciais e gera o OTP.
- **Payload**: `{ "username", "password" }`
- **Retorno**: `{ "data": { "require_2fa": true } }`

### 5. `admin-auth-2fa-verify`
- **Slug**: `admin-auth-2fa-verify`
- **Método**: `POST`
- **Descrição**: Segunda etapa do login. Valida o código de 6 dígitos.
- **Payload**: `{ "username", "otp" }`
- **Retorno**: `{ "success": true }`

### 6. `admin-register`
- **Slug**: `admin-register`
- **Método**: `POST`
- **Descrição**: Solicitação de novo acesso administrativo (status pendente).
- **Payload**: `{ "username", "password", "email" }`

---

## 🛠️ Endpoints de Gestão (Protegidos)
*Requerem Header `Authorization: Basic base64(user:pass)`*

### 7. `admin-leads-get-all`
- **Slug**: `admin-leads-get-all`
- **Método**: `GET`
- **Descrição**: Lista todos os leads capturados com suporte a ordenação.

### 8. `admin-users-manage`
- **Slug**: `admin-users-manage`
- **Métodos**: 
  - `GET`: Lista todos os administradores.
  - `POST`: Altera status (`approved`/`blocked`) de um administrador.

---
*DALUDI API Docs — v1.0 — Março 2026*
