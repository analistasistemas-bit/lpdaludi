# 🏗️ Arquitetura Técnica

A Landing Page da DALUDI foi desenvolvida seguindo uma filosofia de **"Ultra-Lightweight & High-Performance"**, utilizando tecnologias nativas para garantir velocidade máxima e fácil manutenção.

## 🛠️ Stack Tecnológica

- **HTML5**: Estrutura semântica focada em SEO e acessibilidade.
- **CSS3**: Estilização baseada em Custom Properties (variáveis) para modularidade.
- **JavaScript (ES6+)**: Lógica de interação, animações e manipulação de DOM sem dependências externas.
- **Vanilla Approach**: Zero frameworks pesados (React/Vue) ou bibliotecas de terceiros (jQuery/Bootstrap).

## 📂 Estrutura de Arquivo Único

Para otimizar o carregamento e simplificar o deploy, o projeto utiliza um padrão de **Single File Application**:

- `index.html`: Contém todo o HTML, CSS (em `<style>`) e JavaScript (em `<script>`).
- Assets: Imagens locais na pasta `imagens_daludi/`.

### Vantagens desta Abordagem:
1. **Zero Requests Extras**: Menos chamadas HTTP para arquivos .css ou .js.
2. **Deploy Instantâneo**: Basta fazer o upload do arquivo `index.html`.
3. **Performance Crítica**: Renderização imediata sem bloqueios de recursos externos.

## 🏗️ Arquitetura Híbrida (Serverless)

Embora a Landing Page seja um arquivo estático para máxima performance, o projeto utiliza uma infraestrutura híbrida com backend serverless:

- **Frontend**: Hospedagem estática (CDN) para o `index.html`.
- **Backend (Edge)**: As requisições de formulário e autenticação são processadas por **Edge Functions** hospedadas na **InsForge**.
- **Data Layer**: Banco de Dados Postgres (via Supabase/InsForge) para persistência de leads e usuários.
- **Email Service**: Integração com **Resend** para disparos transacionais.

Veja mais detalhes na [Documentação da API](./backend-api.md) e no [Esquema do Banco](./database-schema.md).

---
*DALUDI Architecture — v1.1 — Março 2026*
