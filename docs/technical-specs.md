# ⚡ Especificações Técnicas e Efeitos

A experiência do usuário na landing page é enriquecida por micro-interações e efeitos visuais premium controlados via JavaScript e CSS.

## 🎞️ Animações e Efeitos

### 1. Sistema de Partículas (Rede Neural)
- **Tecnologia**: Canvas 2D.
- **Comportamento**: Pontos e linhas que se conectam e fogem do mouse cursor.
- **Mobile**: Desativado automaticamente para viewports < 768px para economizar bateria e CPU.

### 2. Scroll Reveal
- **Mecanismo**: `IntersectionObserver`.
- **Efeito**: Fade-in + Slide Up (`translateY`) quando o elemento entra 10% no campo de visão.

### 3. Contadores Animados
- **Função**: Incrementa números (métricas) de 0 até o valor final quando a seção de impacto financeiro é visualizada.

### 4. Custom Cursor
- **Visual**: Círculo na cor Teal com lag sutil (trail).
- **Interação**: Aumenta de tamanho ao pairar sobre links e botões.

## 🔍 SEO e Performance

- **Metatags**: Configurações de OpenGraph (OG) para compartilhamento no LinkedIn e WhatsApp.
- **Desempenho**: Imagens otimizadas e carregamento crítico prioritário.
- **Acessibilidade**: Contraste alto entre texto e fundo; uso de `aria-labels`.

## 📩 Integração de Formulário

O formulário de contato utiliza uma estrutura de validação client-side:
- **Campos Obrigatórios**: Nome, E-mail, Empresa e Mensagem.
- **Envio**: AJAX (Fetch API) integrando com serviço de backend para disparo de e-mails.

---
*DALUDI Technical Specs — v1.0 — Fevereiro 2026*
