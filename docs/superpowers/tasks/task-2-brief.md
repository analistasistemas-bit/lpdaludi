# Task 2: Refatoração do Hero Section para Padrão Executivo

## Files:
- Modify: `index.html` (seção `#hero` e estilos CSS do hero se necessário)

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis proibidos nos títulos e badges — usar tipografia limpa e elegante.
- Proibidas promessas vazias (ex: "Transforme sua Operação em Lucro Real").
- Preservar o canvas de partículas (`#particleCanvas`), o gradiente mesh de fundo (`.hero-mesh`) e o indicador de scroll (`.scroll-indicator`).
- Não utilizar MCP insforge para deploy.

## Objetivo específico:
1. Localizar a seção `<section id="hero">` em `index.html` (por volta da linha 1777).
2. Atualizar o conteúdo textual com padrão executivo sênior:
   - Tag superior (`.section-tag`): `Engenharia de Software & Inteligência Artificial`
   - H1: `Arquitetura de Sistemas, Inteligência Artificial e <span class="gradient-text">Produtos Digitais em Produção</span>`
   - Subtítulo (`.hero-sub`): `Desenvolvemos plataformas proprietárias como o PubliAI, construímos agentes autônomos integrados a ERPs e desenhamos arquiteturas de dados sob medida. Mais de 25 anos de liderança em tecnologia conectando estratégia a software real.`
   - CTAs duplos (`.hero-ctas`):
     - Botão Primário (`.btn-primary`): `Conversar sobre seu Projeto →` com `href="#contato"`
     - Botão Secundário (`.btn-secondary`): `Conhecer o PubliAI ↗` com `href="#publiai"`
   - Badges de credenciais (`.hero-credentials`):
     - `<span>Plataforma Própria (PubliAI)</span>`
     - `<span>Agentes Autônomos & ERPs</span>`
     - `<span>Arquitetura de Dados & BI</span>`
     - `<span>+25 Anos de Experiência</span>`
3. Verificar estilos CSS do Hero para garantir que a quebra de texto, espaçamentos e responsividade continuem impecáveis em mobile (375px), tablet (768px) e desktop (1280px+).
4. Escrever relatório em `docs/superpowers/tasks/task-2-report.md`.
