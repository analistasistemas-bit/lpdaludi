# Refatoração da Landing Page DALUDI — Plano de Implementação

> **Para execução agentic:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recomendado) ou `superpowers:executing-plans` para implementar este plano tarefa por tarefa. As etapas usam a sintaxe de checkbox (`- [ ]`) para rastreamento.

**Objetivo:** Refatorar a Landing Page `index.html` da DALUDI, eliminando promessas vazias, números fictícios e emojis informais, inserindo o PubliAI (`app.publiai.daludi.com.br`) como produto proprietário e serviço de sucesso da operação no Mercado Livre, elevando o design para um patamar executivo e profissional de engenharia de software e inteligência artificial.

**Arquitetura:** Arquivo único `index.html` autocontido (HTML semântico + CSS puro com Custom Properties + Vanilla JS). Design System dark executivo baseado nos tokens DALUDI (`#050505`, `#0B0F14`, `#00F5C4`). Zero dependências de frameworks externos pesados.

**Tech Stack:** HTML5 semântico, CSS3 moderno (Grid, Flexbox, backdrop-filter, Custom Properties), Vanilla JavaScript (Intersection Observer, Canvas API, Event Listeners).

## Global Constraints

- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis proibidos nos títulos e cards de serviço/dor — utilizar ícones vetoriais SVG minimalistas inline.
- Proibidas métricas fictícias ou sem fonte (ex: 37% de margem perdida, 6h/dia, 3x velocidade).
- PubliAI (`app.publiai.daludi.com.br`) deve ser destacado com fidelidade à sua operação real: cockpit de marketplace (Mercado Livre) com módulos de Viabilidade, Esteira de Lotes & IA, Revisão Técnica Humana Daludi, Pulse/Saúde dos Anúncios, Gestão de Estoque e Inteligência Financeira.
- Contatos reais preservados: WhatsApp `5581996459595`, LinkedIn Diego Araújo, formulário de contato.
- Não utilizar MCP insforge para deploy automático.

---

### Task 1: Atualização da Navbar e Metadados Executivos

**Files:**
- Modify: `index.html:1-35` (head/metadados) e `index.html:1750-1780` (navbar desktop e mobile)

**Interfaces:**
- Consumes: Estrutura semântica HTML de navegação.
- Produces: Navbar com link direto e badge para `#publiai` e links de âncora atualizados.

- [ ] **Step 1: Identificar e planejar a nova estrutura da Navbar**
  - Links: Soluções (`#solucoes`), PubliAI (`#publiai` com badge `NOVO` ou `APP`), Autoridade (`#fundador`), Cases (`#cases`), Método (`#metodo`) e CTA `Falar com Diego` (`#contato`).

- [ ] **Step 2: Aplicar alterações nos links e tags na Navbar de `index.html`**
  - Atualizar tanto o menu desktop quanto o menu mobiledrawer.
  - Atualizar o `<title>` e meta description para refletir: "DALUDI | Engenharia de Software, IA e Gestão de Marketplace".

- [ ] **Step 3: Verificar no navegador e garantir que as âncoras funcionem sem erro**
  - Validar se o scroll smooth funciona e se os links não quebram.

---

### Task 2: Refatoração do Hero Section para Padrão Executivo

**Files:**
- Modify: `index.html:1777-1803` (seção `#hero`) e blocos CSS correspondentes

**Interfaces:**
- Consumes: Canvas de partículas e tokens de tipografia/cor existentes.
- Produces: Hero executivo sem promessas genéricas de ganho financeiro fácil.

- [ ] **Step 1: Substituir a copy do Hero**
  - Tag superior: `Engenharia de Software & Inteligência Artificial`
  - H1: `Arquitetura de Sistemas, Inteligência Artificial e <span class="gradient-text">Produtos Digitais em Produção</span>`
  - Subtítulo: `Desenvolvemos plataformas proprietárias como o PubliAI, construímos agentes autônomos integrados a ERPs e desenhamos arquiteturas de dados sob medida. Mais de 25 anos de liderança em tecnologia conectando estratégia a software real.`
  - CTAs duplos:
    - Primário: `Conversar sobre seu Projeto →` (`#contato`)
    - Secundário: `Conhecer o PubliAI ↗` (`#publiai`)
  - Badges de credenciais: `Plataforma Própria (PubliAI)` • `Agentes & ERPs` • `Arquitetura de Dados` • `+25 Anos de Experiência`

- [ ] **Step 2: Ajustar estilos CSS do Hero**
  - Garantir alinhamento limpo, tipografia nítida e responsividade em 375px, 768px e 1280px.

---

### Task 3: Eliminação de Promessas Vazias e Seção "Os 3 Pilares DALUDI"

**Files:**
- Modify: `index.html:1805-1877` (substituição das seções `#dores` e `#impacto`)

**Interfaces:**
- Consumes: Classes de cards e grid existentes (`.card`, `.glass`, `.container`).
- Produces: Seção `#pilares` com 3 pilares corporativos e ícones SVG minimalistas (sem emojis e sem estatísticas inventadas).

- [ ] **Step 1: Remover cards com emojis de dores informais e métricas arbitrárias ("37% margem perdida", "6h/dia")**
- [ ] **Step 2: Construir a nova seção `#pilares` com 3 Pilares de Excelência Técnica:**
  1. **Plataforma Proprietária (PubliAI):** Desenvolvimento e operação de SaaS de alta complexidade para marketplace no Mercado Livre, integrando IA generativa, análise de concorrência e esteira de revisão humana.
  2. **Engenharia de Agentes & Automação Corporativa:** Agentes autônomos que operam conectados ao ERP, CRM, WhatsApp e banco de dados, eliminando gargalos operacionais com precisão e rastreabilidade.
  3. **Arquitetura de Dados & Inteligência Executiva:** Modelagem de dados corporativos, BI avançado e algoritmos de recomendação que dão à diretoria visibilidade em tempo real sobre estoques, compras e margem.
- [ ] **Step 3: Inserir ícones SVG profissionais e minimalistas em cada card**
  - Substituir emojis por SVGs com traço ciano `--hero`.

---

### Task 4: Showcase de Alto Impacto do PubliAI (`#publiai`)

**Files:**
- Modify: `index.html` (inserir nova seção `<section id="publiai">`) e adicionar estilos CSS dedicados.

**Interfaces:**
- Consumes: Informações reais da plataforma `app.publiai.daludi.com.br` (módulos Viabilidade, Lotes & IA, Revisão Técnica Humana Daludi, Pulse/Saúde, Estoque e Finanças).
- Produces: Seção visual de impacto simulando a interface do cockpit do PubliAI com badges, módulos e CTA externo.

- [ ] **Step 1: Estruturar o HTML da seção `#publiai`**
  - Header da seção:
    - Tag: `Produto Proprietário DALUDI`
    - Título: `PubliAI: O Cockpit de Inteligência e Operação para Mercado Livre`
    - Subtítulo: `Uma plataforma desenvolvida pela DALUDI para conduzir a operação de marketplace dos clientes de ponta a ponta. Nossa equipe técnica opera e revisa; você acompanha a inteligência e os resultados na mesma tela.`
  - Mockup/Cockpit UI interativo em CSS/SVG puro:
    - Barra de status com link ativo: `app.publiai.daludi.com.br` (status: `Produção / Online`)
    - Cards dos 5 Módulos Centrais:
      1. **Viabilidade de Produtos:** Estudo de margem, concorrência e potencial de vendas antes de cadastrar ou estocar.
      2. **Esteira de Lotes & IA:** Geração assistida por IA de títulos estratégicos, fichas técnicas, variações e descrições otimizadas para o algoritmo do Mercado Livre.
      3. **Revisão Técnica DALUDI:** Supervisão humana especializada em cada anúncio antes de publicar no canal oficial.
      4. **Pulse (Saúde dos Anúncios):** Monitoramento contínuo de concorrência, preço, perda de Buy Box e qualidade cadastral.
      5. **Gestão de Estoque & Indicadores:** Prevenção de rupturas, alertas de reposição e métricas financeiras consolidadas.
  - CTA de ação: Botão primário `Acessar o PubliAI (app.publiai.daludi.com.br) ↗` e botão secundário `Contratar Operação Assistida →` (`#contato`).

- [ ] **Step 2: Estilizar a seção com estética de terminal/cockpit SaaS Dark**
  - Uso de bordas sutis com brilho ciano, tags de status verdes, tipografia mono em cabeçalhos de módulo e layout responsivo (cards adaptáveis no mobile).

---

### Task 5: Refatoração da Seção de Soluções & Competências

**Files:**
- Modify: `index.html:1922-2030` (seção `#solucoes`)

**Interfaces:**
- Consumes: Carrossel ou Grid de soluções existente.
- Produces: 4 frentes com terminologia sólida de engenharia e consultoria executiva.

- [ ] **Step 1: Atualizar os 4 cards de soluções para linguagem técnica e profissional:**
  1. **Operação de Marketplace com PubliAI:** Gestão estratégica no Mercado Livre apoiada por plataforma própria e revisão humana de ponta a ponta.
  2. **Arquitetura de Agentes de IA & Automação:** Agentes integrados para triagem, suporte especializado, esteiras de validação e rotinas de backoffice.
  3. **Engenharia de Dados & Dashboards de Decisão:** Estruturação de pipelines de dados, modelos preditivos e painéis executivos em Power BI com IA embarcada.
  4. **Desenvolvimento de Aplicações Corporativas Sob Medida:** Criação de web apps, ferramentas operacionais de campo com geolocalização e microsserviços integrados a ERPs.
- [ ] **Step 2: Trocar emojis por ícones SVG e eliminar títulos apelativos (ex: "Porta de Entrada, Recomendado")**

---

### Task 6: Reformulação da Seção de Cases de Sucesso (Casos Reais de Engenharia)

**Files:**
- Modify: `index.html:2089-2244` (seção `#cases`)

**Interfaces:**
- Consumes: Carrossel de cases.
- Produces: 4 casos concretos focados em arquitetura de solução e problemas de negócio resolvidos, sem métricas arbitrárias.

- [ ] **Step 1: Substituir os cases atuais pelos 4 casos reais aprofundados:**
  1. **PubliAI — Plataforma SaaS de Marketplace:** Criação do ecossistema proprietário com esteira de IA, concorrência e revisão humana para Mercado Livre.
  2. **App de Visitas de Campo com Geolocalização & IA:** Solução mobile integrada para validação geográfica de visitas externas, auditoria de ponto e recuperação ágil de vendas perdidas por concorrência/preço.
  3. **Agente Inteligente de Vendas e CRM via WhatsApp:** Integração de IA diretamente ao banco de dados e ERP para qualificação instantânea de leads, consulta de estoque e suporte comercial.
  4. **Inteligência Preditiva de Estoque e Reposição:** Modelo preditivo conectado a ERP de distribuição e varejo para mitigar ruptura de itens de alta curva e evitar acúmulo de capital parado.
- [ ] **Step 2: Formatar os cards com tags de arquitetura técnica (ex: `Python`, `PostgreSQL`, `APIs REST`, `Mercado Livre API`, `LLMs corporativas`)**

---

### Task 7: Refinamento de Autoridade (Fundador), Método, FAQ e Formulário

**Files:**
- Modify: `index.html:2032-2086` (seção `#fundador`), `index.html:2247-2352` (seção `#metodo` e FAQ), `index.html:2355-2420` (`#contato` e Footer)

**Interfaces:**
- Consumes: Dados biográficos do fundador e stepper de 5 etapas.
- Produces: Apresentação equilibrada do fundador como Arquiteto de Sistemas / Ex-Diretor de TI, stepper do método com ícones SVG e FAQ atualizado com perguntas sobre o PubliAI e modelo de contratação.

- [ ] **Step 1: Ajustar seção do Fundador (Diego Araújo)**
  - Destacar o papel de Arquiteto de Software e Criador do PubliAI, além da bagagem de +25 anos como Diretor de TI e Operações.
- [ ] **Step 2: Refinar o Stepper do Método**
  - Substituir emojis `🔍`, `📐`, `⚙️`, `🎓`, `📊` por ícones SVG minimalistas nos 5 passos: Diagnóstico, Arquitetura, Implementação, Capacitação e Sustentação.
- [ ] **Step 3: Atualizar FAQ**
  - Incluir perguntas como: *"O que é o PubliAI e como ele funciona na prática?"*, *"Minha empresa pode contratar apenas o PubliAI ou também consultoria customizada?"*, *"Como a DALUDI garante a privacidade e segurança dos dados?"*.
- [ ] **Step 4: Revisar formulário de contato e links do WhatsApp**
  - Garantir labels claras, campo opcional de interesse ("PubliAI / Marketplace", "Agentes de IA", "Desenvolvimento Sob Medida", "Diagnóstico Estratégico") e link do WhatsApp direto com mensagem pré-formatada.

---

### Task 8: Verificação Técnica, Teste de Responsividade e Validação

**Files:**
- Test/Verify: `index.html` em diferentes viewports e execução dos scripts de verificação.

**Interfaces:**
- Consumes: Arquivo único `index.html`.
- Produces: Relatório de verificação sem erros de console, validação do HTML e CSS.

- [ ] **Step 1: Validar sintaxe HTML e ausência de tags não fechadas**
- [ ] **Step 2: Testar interatividade dos scripts Vanilla JS**
  - Verificar se o canvas de partículas funciona no desktop e desativa no mobile (< 768px).
  - Testar carrossel de soluções e carrossel de cases (botões prev/next, swipe e dots).
  - Testar accordion do FAQ (abrir/fechar suave).
  - Testar validação e envio do formulário.
- [ ] **Step 3: Testar responsividade (375px mobile, 768px tablet, 1280px desktop)**
- [ ] **Step 4: Executar validação de código limpo e conformidade com `GEMINI.md`**
