# 🛡️ Segurança e Autenticação (2FA)

A DALUDI prioriza a segurança do painel administrativo através de um fluxo de autenticação robusto e verificação em duas etapas.

## 1. Mecanismo de Autenticação
- **Protocolo**: Basic Auth via Headers HTTP.
- **Implementação**: O frontend envia as credenciais no formato `Authorization: Basic base64(username:password)`.
- **Backend**: As Edge Functions validam essa string diretamente contra o banco de dados `admin_users`.

## 2. Fluxo de Segundo Fator (2FA)
Para garantir que apenas usuários autorizados acessem os dados sensíveis dos leads, implementamos o seguinte fluxo:

1. **Credenciais**: O usuário insere nome e senha.
2. **Geração de OTP**: O backend gera um código aleatório de 6 dígitos.
3. **Validade**: O código expira automaticamente após **10 minutos** (`otp_expiry`).
4. **Entrega**: O código é enviado via e-mail utilizando a API da **Resend** através do remetente verificado `start@daludi.com.br`.
5. **Verificação**: O usuário deve inserir o código na UI para completar a sessão.

## 3. Gestão de Status
O acesso não é imediato após o cadastro. Administradores possuem três estados:
- `pending`: Acabou de se cadastrar, não pode logar.
- `approved`: Acesso total liberado (após aprovação manual no DB ou por outro admin).
- `blocked`: Acesso revogado permanentemente.

## 4. Recomendações de Segurança
- [ ] **Hash de Senha**: Atualmente as senhas são armazenadas em texto plano para compatibilidade inicial. Recomenda-se a migração para `bcrypt` ou `argon2` em iterações futuras.
- [ ] **Rotação de API Keys**: As chaves do Resend e InsForge devem ser rotacionadas periodicamente nos Secrets da plataforma.

---
*DALUDI Security Docs — v1.0 — Março 2026*
