# Guia de Configuração e Testes: Funil DALUDI

Este documento contém o passo a passo para você configurar as chaves de API da Resend no seu painel InsForge e validar se todo o fluxo de captação e e-mail do funil de diagnóstico está funcionando corretamente.

## 1. Configuração de Variáveis de Ambiente (InsForge)

Para que os e-mails automáticos via Resend sejam enviados pelas nossas Edge Functions, precisamos registrar a sua chave do Resend (API Key) nas configurações de Secrets do seu projeto InsForge.

1. Acesse o **Dashboard da InsForge** (`https://dashboard.insforge.app/...`).
2. Navegue até seu projeto **DALUDI**.
3. Vá no menu lateral em **Functions** > **Secrets** (Variáveis de Ambiente / Segredos).
4. Adicione uma nova variável:
   - **Chave (Name/Key):** `RESEND_API_KEY`
   - **Valor (Value):** `sua_chave_re_...` que você obteve do painel do Resend.
5. Verifique se as funções já possuem as de sistema padrão injetadas: `INSFORGE_BASE_URL`, `INSFORGE_ANON_KEY` (se não constarem nos Secrets visíveis, deixe por conta da plataforma, são injetadas nativamente (`Deno.env.get('ANON_KEY')` etc).

> **Aviso:** Sem o registro manual de `RESEND_API_KEY` nos secrets, as notificações automáticas de email não vão disparar (o formulário terminará o sucesso, mas silenciosamente pulará a etapa de email).

## 2. Como Testar Localmente (Teste Guiado)

Como o projeto agora depende de chamadas à internet e à API da plataforma, não basta "clicar duas vezes" no `index.html`. Você precisa utilizar um pequeno Servidor HTTP local para simular um domínio real e permitir o CORS corretamente.

### Passo 2.1: Rodando a página localmente
Abra seu terminal no diretório `/Users/diego/Desktop/IA/LandingPage_Daludi` e suba um servidor da sua escolha:

- **Via Python:** `python3 -m http.server 8080` (Acesse `http://localhost:8080`)
- **Via NPX (Serve):** `npx serve .` (Acesse `http://localhost:3000`)

### Passo 2.2: Roteiro de QA para Qualificação de Leads

Siga exatamente o roteiro abaixo para provar o sistema de ponta a ponta:

#### Fluxo 1: Cliente inicia na Home (Ideal)
1. Acesse o `index.html` via servidor local.
2. Preencha o bloco "Quero agendar meu diagnóstico" com dados fictícios. Ex: *Aurelio (CTO), Acme Tech, Celular: 81 99999-0000*.
3. Clique em enviar.
4. **Comportamento Esperado:** Você verá um aviso breve de "Analisando..." e logo será redirecionado para a página `diagnostico.html` junto com um grande UUID no final da barra de endereços (ex: `/diagnostico.html?leadId=893a-bc...`).
5. **Na tela de Diagnóstico:** Aguarde de 1 a 2 segundos; observe que os campos de Nome, Cargo, E-mail e Telefone devem se auto-preencher como mágica.
6. Informe o *Faturamento, Colaboradores, Gargalo e Objetivo*.
7. Submeta o Diagnóstico.
8. **Comportamento Esperado:** Mensagem local ou redirecionamento para `obrigado-diagnostico.html`.
9. **No Inbox do Resend (ou seu e-mail próprio):** confira se chegaram dois emails:
   - Um e-mail interno pra `start@daludi.com.br` avisando o time sobre os dados do Aurelio CTO.
   - Um e-mail recebido na caixa fictícia do lead (se usou a sua própria durante o teste) contendo o PDF.
   
#### Fluxo 2: Cliente acessa Diagnóstico Diretamente (Curioso)
1. Delete todo contexto e acesse `http://localhost:8080/diagnostico.html` na mão limpa.
2. Como não há `?leadId=`, tudo virá vazio.
3. Preencha e envie.
4. **Comportamento Esperado:** O script da UI tem agora o comportamento inteligente para perceber que ele é zero-contexto, logo criará o ID via API Inicial internamente e logo depois conectará às lógicas do diagnóstico. Nenhuma barreira extra existirá.

#### Fluxo 3: Evasão Anti-spam (Honeypot)
1. Inspecione o elemento (DevTools F12) de qualquer formulário e encontre a tag `input name="_gotcha"`.
2. Remova o seu `display: none` via CSS e escreva "SPAMBOT" ali dentro.
3. Tente enviar.
4. **Comportamento Esperado:** Falso positivo ativado; O script diz falsamente pra UI que mandou (para enganar o BOT), e o leva para tela de obrigado, porém NADA é submetido ao nosso Supabase/InsForge ou Resend (você confere que o DB da InsForge não detectou nenhuma nova linha).

## 3. Implantação de Produção

Sendo tudo JavaScript Vanilla, e o *Backend* sendo provido totalmente isolado via Edge Functions e Postgrest da InsForge, **Deploy para produção** não requer build.

- Apenas dê um `uploadgit`, o seu provedor de infraestrutura (Vercel ou Github Pages) já vai publicar no site `www.daludi.com.br`. Tudo já rodará e trará as conexões automáticas pros servidores da InsForge configurados! 🚀
