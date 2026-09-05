# Task 3: Eliminação de Promessas Vazias e Seção "Os 3 Pilares DALUDI"

## Files:
- Modify: `index.html` (substituição das seções `#dores` e `#impacto` e ajustes de CSS)

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis estritamente proibidos nos cards e títulos — utilizar ícones vetoriais SVG minimalistas com traço ciano.
- Proibidas métricas fictícias ou sem fonte (remover de vez "37% margem perdida", "6h/dia", "3x velocidade").
- Não utilizar MCP insforge para deploy.

## Objetivo específico:
1. Localizar as seções `<section id="dores">` e `<section id="impacto">` em `index.html` (por volta das linhas 1805 a 1877).
2. Substituir essas seções pela nova seção executiva `<section id="pilares">`:
   - Header da seção:
     - Tag: `Pilares de Excelência`
     - H2: `Engenharia e Inteligência de Ponta a Ponta`
     - Subtítulo executivo: `Combinamos desenvolvimento de produtos digitais, automação de sistemas legados e arquitetura de dados corporativos para gerar resultados tangíveis.`
   - Grid de 3 Pilares (`.pilares-grid`):
     - **Pilar 1: Plataforma Proprietária (PubliAI)**
       - Ícone SVG minimalista (camadas de software / terminal moderno).
       - Badge: `Produto Ativo em Produção`
       - H3: `Plataforma Proprietária & Marketplace`
       - Parágrafo: `Desenvolvemos e operamos o PubliAI, ecossistema tecnológico dedicado à gestão estratégica no Mercado Livre com esteira de IA, análise de viabilidade e supervisão técnica especializada.`
     - **Pilar 2: Engenharia de Agentes & Automação Corporativa**
       - Ícone SVG minimalista (agentes / conexões inteligentes).
       - Badge: `Automação Sob Medida`
       - H3: `Agentes Autônomos & Integração de ERPs`
       - Parágrafo: `Projetamos agentes inteligentes integrados diretamente a bancos de dados, ERPs, CRMs e WhatsApp. Eliminamos gargalos manuais e criamos rotinas operacionais autônomas com total rastreabilidade.`
     - **Pilar 3: Arquitetura de Dados & Decisão Executiva**
       - Ícone SVG minimalista (arquitetura de dados / métricas executivas).
       - Badge: `Decisão Orientada a Dados`
       - H3: `Arquitetura de Dados & Business Intelligence`
       - Parágrafo: `Estruturação de pipelines de dados, painéis gerenciais avançados e modelos analíticos que dão à liderança visibilidade em tempo real sobre estoques, custos e margem real.`
   - Micro-CTA corporativo:
     - `Quer entender como aplicar esses pilares na sua operação? <a href="#contato">Falar com um Arquiteto de Sistemas →</a>`
3. Ajustar/limpar estilos CSS das seções antigas se necessário e criar estilos elegantes para `.pilares-grid`, `.pilar-card`, `.pilar-badge` e `.pilar-icon` com hover sutil `translateY(-4px)` e borda ciano suave.
4. Escrever relatório em `docs/superpowers/tasks/task-3-report.md`.
