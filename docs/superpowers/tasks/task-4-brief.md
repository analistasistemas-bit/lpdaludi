# Task 4: Showcase de Alto Impacto do PubliAI (`#publiai`)

## Files:
- Modify: `index.html` (inserção da nova seção `<section id="publiai">` e estilos CSS dedicados)

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis proibidos — utilizar ícones vetoriais SVG minimalistas para cada módulo.
- Fidelidade total ao ecossistema real do PubliAI: cockpit para Mercado Livre, módulos de Viabilidade, Lotes & IA, Revisão Técnica Daludi, Pulse (Saúde e Concorrência), Estoque & Métricas.
- Não utilizar MCP insforge para deploy.

## Objetivo específico:
1. Inserir a nova `<section id="publiai">` logo após a seção `<section id="pilares">`.
2. Estruturar a seção:
   - Header da seção (`.reveal`):
     - Tag: `Produto Proprietário DALUDI`
     - H2: `PubliAI: O Cockpit de Inteligência e Operação para Mercado Livre`
     - Subtítulo: `Uma plataforma desenvolvida pela DALUDI para conduzir a operação de marketplace dos clientes de ponta a ponta. Nossa equipe técnica opera e revisa; você acompanha a inteligência e os resultados na mesma tela.`
   - Cockpit Container (`.publiai-cockpit`):
     - Top bar simulando app corporativo:
       - Esquerda: Logo/identificador `PubliAI` + Badge `v2.4 Production` + status verde pulsante `Sistema Online`.
       - Direita: Link clicável estilizado com ícone externo `app.publiai.daludi.com.br ↗` abrindo `https://app.publiai.daludi.com.br` em nova aba.
     - Grid de 5 Módulos Reais (`.cockpit-modules`):
       1. **Módulo Viabilidade:** Ícone SVG de balança/análise.
          - Título: `Viabilidade & Inteligência de Mercado`
          - Texto: `Estudo prévio de margem, histórico de preços e concorrência no Mercado Livre antes de empenhar capital em estoque ou cadastro.`
       2. **Módulo Esteira de Lotes & IA:** Ícone SVG de automação/lote.
          - Título: `Esteira de Preparação em Lotes com IA`
          - Texto: `Geração em escala de títulos de alta indexação, fichas técnicas completas, variações e descrições alinhadas ao algoritmo do canal.`
       3. **Módulo Revisão Técnica Especializada:** Ícone SVG de verificação/escudo.
          - Título: `Revisão Humana Especializada DALUDI`
          - Texto: `Nenhum anúncio vai ao ar no escuro. A equipe de especialistas da DALUDI revisa e refina cada lote antes da publicação definitiva.`
       4. **Módulo Pulse:** Ícone SVG de pulso/alerta.
          - Título: `Pulse: Monitoramento de Saúde & Concorrência`
          - Texto: `Vigilância contínua sobre oscilações de preço da concorrência, perda de Buy Box, reputação e alertas de moderação no Mercado Livre.`
       5. **Módulo Estoque & Financeiro:** Ícone SVG de estoque/gráfico.
          - Título: `Sincronização de Estoque & Indicadores`
          - Texto: `Prevenção ativa contra rupturas, pausa automática de anúncios zerados e retorno imediato pós-reposição com conciliação do canal.`
     - Banner de Operação Compartilhada:
       - *"Você não compra uma ferramenta para operar sozinho. Você conta com a infraestrutura do software e a equipe sênior da DALUDI operando o canal com você."*
     - Ações e CTAs da seção:
       - Botão primário (`.btn-primary`): `Acessar o PubliAI (app.publiai.daludi.com.br) ↗` (link `https://app.publiai.daludi.com.br`, target="_blank", rel="noopener noreferrer")
       - Botão secundário (`.btn-secondary`): `Contratar Operação Assistida →` (link `#contato`)
3. Criar os estilos CSS com visual cockpit executivo: borda de vidro (`var(--glass-border)`), gradiente dark, indicador de status online verde, tipografia precisa e cards interativos com hover.
4. Escrever relatório em `docs/superpowers/tasks/task-4-report.md`.
