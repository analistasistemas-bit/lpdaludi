# Task 5: Refatoração da Seção de Soluções & Competências

## Files:
- Modify: `index.html` (seções `#ia-estrategica` e `#solucoes`, e estilos CSS relacionados)

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis estritamente proibidos nos títulos, tags e cards — usar ícones vetoriais SVG minimalistas inline com traço ciano.
- Eliminar tags informais como "🔍 Porta de Entrada, Recomendado".
- Não utilizar MCP insforge para deploy.

## Objetivo específico:
1. Atualizar a seção `<section id="ia-estrategica">`:
   - Substituir os ícones dos 3 cards de conceito (`✕ → ✓`, emojis) por ícones SVG elegantes.
   - Refinar os textos para manter tom executivo e de engenharia.
2. Atualizar a seção `<section id="solucoes">`:
   - Título: `Quatro frentes de atuação de alta engenharia para operações reais`
   - Atualizar os 4 cards do carrossel (`#solucoes-track`):
     - **Card 1: Gestão de Marketplace com PubliAI (Mercado Livre)**
       - Tag: `Plataforma & Operação Especializada` (com SVG)
       - H3: `Operação de Marketplace com PubliAI`
       - Descrição: `Condução estratégica e técnica da operação no Mercado Livre apoiada por software proprietário. Unimos automação de ponta a ponta à supervisão de especialistas sênior.`
       - Lista técnica de entregáveis (viabilidade, esteira com IA, revisão humana, Pulse/concorrência, estoque).
       - Benefício: `Escala com governança, dados confiáveis e equipe técnica operando o canal.`
     - **Card 2: Agentes de IA e Automação de Processos**
       - Tag: `Agentes Autônomos & Integração` (com SVG)
       - H3: `Arquitetura de Agentes de IA e Automação`
       - Descrição: `Desenvolvimento de agentes corporativos autônomos integrados diretamente a ERPs, CRMs, WhatsApp e bancos de dados corporativos.`
       - Lista técnica de entregáveis (agentes especialistas, triagem, RAG corporativo, APIs seguras, logs auditáveis).
       - Benefício: `Processos padronizados, redução de retrabalho manual e escala operacional sem inflar headcount.`
     - **Card 3: Arquitetura de Dados e Dashboards Executivos**
       - Tag: `Inteligência Analítica & BI` (com SVG)
       - H3: `Engenharia de Dados e BI com IA Embarcada`
       - Descrição: `Transformação de dados fragmentados em inteligência decisória através de pipelines estruturados e painéis executivos com análises preditivas.`
       - Lista técnica de entregáveis (modelagem corporativa, Power BI avançado, previsão de demanda, detecção de anomalias, alertas preditivos).
       - Benefício: `A diretoria decide com números auditados e projeções claras em tempo real.`
     - **Card 4: Sistemas Web e Aplicativos Corporativos Sob Medida**
       - Tag: `Engenharia de Software Corporativa` (com SVG)
       - H3: `Sistemas e Aplicativos Corporativos Customizados`
       - Descrição: `Projetamos e construímos softwares internos sob medida para rotinas operacionais e de campo onde as ferramentas de mercado não atendem.`
       - Lista técnica de entregáveis (web apps administrativos, apps mobile com geolocalização e ponto, esteiras de validação, microsserviços integrados a ERPs).
       - Benefício: `Sistemas proprietários aderentes à sua operação, sem custos abusivos de licenças de terceiros.`
3. Garantir funcionamento pleno do carrossel de soluções (`#sol-prev`, `#sol-next`, dots), scroll reveal e responsividade.
4. Escrever relatório em `docs/superpowers/tasks/task-5-report.md`.
