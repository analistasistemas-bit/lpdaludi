# Task 8: Verificação Técnica, Teste de Responsividade e Validação

## Files:
- Test & Validate: `index.html`

## Global Constraints:
- Arquivo único de entrega: todo código vive exclusivamente em `/Users/diego/Desktop/IA/LandingPage_Daludi/index.html`.
- Paleta oficial: `--bg-primary: #050505`, `--bg-secondary: #0B0F14`, `--bg-card: #11151A`, `--hero: #00F5C4`, `--text-primary: #E6F1F0`, `--text-secondary: #8FA3A1`, `--border: #1F2A33`.
- Emojis proibidos nas seções principais de serviços/cards — conferir varredura de emojis.
- Proibido deploy automático (não usar Insforge).

## Objetivo específico:
1. Executar verificação automatizada via script Python no terminal:
   - Validar parsing HTML via `html.parser` (fechamento de todas as tags).
   - Verificar ausência de IDs duplicados.
   - Verificar se todos os links de âncora (`#hero`, `#solucoes`, `#publiai`, `#fundador`, `#cases`, `#metodo`, `#contato`) possuem as seções correspondentes com id exato.
   - Verificar integridade do JavaScript (sintaxe, event listeners, funções dos carrosséis, FAQ, canvas e mobile drawer).
   - Fazer varredura de emojis em cabeçalhos, títulos e descrições para garantir acabamento 100% executivo.
2. Escrever relatório final em `docs/superpowers/tasks/task-8-report.md`.
