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

## ⚙️ Componentes Principais

### Fluxo de Animação
Utilizamos o **Intersection Observer API** para ativar animações de scroll-reveal, garantindo que o navegador não processe animações fora da área visível (viewport).

### Sistema de Partículas (Hero)
Implementado via **HTML5 Canvas**, oferecendo uma rede neural interativa que reage ao movimento do cursor em tempo real, sem impactar a performance do scroll principal.

### Formulário de Contato
Integração via AJAX para evitar recarregamento de página, garantindo uma UX fluida para o usuário final.

---
*DALUDI Architecture — v1.0 — Fevereiro 2026*
