# Task 6: Reformulação da Seção de Cases de Sucesso (Casos Reais de Engenharia)

## Files:
- Modify: `index.html` (seção `#cases` e carrossel de cases)

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Proibidos números arbitrários ou inventados ("60%", "70%", "40% de conversão").
- Focar em 4 casos aprofundados de engenharia de software e inteligência aplicada real.
- Emojis proibidos — utilizar tags técnicas e ícones vetoriais SVG minimalistas.
- Manter o carrossel `#cases-track` responsivo e funcional com os 4 novos cases.
- Não utilizar MCP insforge para deploy.

## Objetivo específico:
1. Localizar a seção `<section id="cases">` em `index.html` (por volta da linha 2089).
2. Atualizar o cabeçalho da seção:
   - Tag: `Engenharia em Produção`
   - H2: `Projetos reais construídos para operações reais`
   - Subtítulo: `Da concepção de plataformas proprietárias à integração de IA no núcleo operacional de nossos clientes.`
3. Substituir os 8 cards anteriores por 4 cases detalhados de alta credibilidade técnica:
   - **Case 1: PubliAI — Plataforma SaaS de Marketplace (Mercado Livre)**
     - Setor/Tag: `SaaS Proprietário • E-commerce`
     - Título: `Cockpit de Inteligência e Operação Assistida para Mercado Livre`
     - Desafio & Solução estruturados (viabilidade, esteira em lotes com IA, revisão humana Daludi, Pulse e estoque).
     - Tags de Arquitetura: `React / TypeScript` • `FastAPI` • `Mercado Livre API` • `LLMs Especializados`
     - Destaque: `Plataforma proprietária ativa operando contas de clientes com transparência total em tempo real.`
   - **Case 2: App de Visitas de Campo com Geolocalização & IA**
     - Setor/Tag: `Vendas & Distribuição • Equipes Externas`
     - Título: `Gestão de Campo com Check-in por GPS e Alertas Comerciais por IA`
     - Desafio & Solução estruturados (rastreio geográfico, registro ágil de concorrência/ruptura e disparo em tempo real para compras).
     - Tags de Arquitetura: `Mobile PWA` • `Geolocalização GPS` • `WhatsApp Cloud API` • `Integração ERP`
     - Destaque: `Rastreabilidade geográfica das visitas e agilidade de reação comercial no mesmo dia.`
   - **Case 3: Agente Inteligente de Vendas e CRM Integrado ao ERP**
     - Setor/Tag: `Atendimento B2B • Vendas`
     - Título: `Agente Autônomo para Qualificação Comercial e Consulta de Estoque 24/7`
     - Desafio & Solução estruturados (triagem via WhatsApp com consulta direta ao banco de dados, verificação de crédito/tabela e encaminhamento pronto ao vendedor).
     - Tags de Arquitetura: `WhatsApp Business API` • `RAG Corporativo` • `Conector ERP` • `Fila Auditável`
     - Destaque: `Atendimento técnico imediato 24/7 com dados reais da empresa e leads qualificados entregues à equipe.`
   - **Case 4: Inteligência Preditiva de Estoque e Reposição**
     - Setor/Tag: `Logística & Suprimentos • Varejo e Distribuição`
     - Título: `Modelo Preditivo de Compras e Prevenção de Ruptura`
     - Desafio & Solução estruturados (análise de séries temporais, sazonalidade e prazos de fornecedores para evitar excessos e rupturas).
     - Tags de Arquitetura: `Power BI Corporativo` • `Pipelines Python` • `Séries Temporais` • `Conexão ODBC ERP`
     - Destaque: `Substituição da compra por intuição por modelos analíticos auditáveis e proteção de margem.`
4. Estilizar as tags de tecnologia (`.tech-tag`), badges de setor e o container de métricas/destaques de cada card.
5. Garantir que o carrossel de cases continue navegável suavemente via `#case-prev`, `#case-next`, swipe e dots.
6. Escrever relatório em `docs/superpowers/tasks/task-6-report.md`.
