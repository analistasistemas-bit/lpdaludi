# RoadmapMaestri — Time de Agentes Maestri

> Controlado pelo **Orquestrador**. Cada fase só avança depois de: revisão aprovada (Reviewer) **e** testes verdes (Testes/Verificador).

| Fase | Nome | Responsável | Entrada | Saída | Status |
|---|---|---|---|---|---|
| 0 | Setup do time | Orquestrador | Pasta raiz do projeto aberta | Agentes conectados, LogMaestri.md e RoadmapMaestri.md lidos por todos | 🔄 Em andamento |
| 1 | Spec | Spec | Ideia/pedido do usuário | Requisitos + critérios de aceite (em `memory/LogMaestri.md`) | ⏳ Pendente |
| 2 | Arquitetura | Arquiteto | Requisitos aprovados | Plano técnico, estrutura de pastas, integrações | ⏳ Pendente |
| 3 | Implementação — Frontend | Frontend | Plano técnico | Interface implementada | ⏳ Pendente |
| 3 | Implementação — Backend | Backend | Plano técnico | API, banco, regras implementadas | ⏳ Pendente |
| 4 | Review | Reviewer | Código de Frontend + Backend | Aprovação ou lista de ajustes | ⏳ Pendente |
| 5 | Testes | Testes/Verificador | Código aprovado no review | Evidências de teste (logs, prints, relatório) | ⏳ Pendente |
| 6 | Documentação | Docs | Testes aprovados | README, changelog e tarefas atualizados | ⏳ Pendente |
| 7 | Release | Release/GitHub | Docs prontos | Commit + branch + PR preparados (**push/PR só com sua confirmação explícita**) | ⏳ Pendente |

## Regra de avanço de fase
O Orquestrador só marca uma fase como ✅ Concluída quando:
1. O agente responsável reportou a saída esperada no `memory/LogMaestri.md`.
2. Reviewer aprovou (quando aplicável à fase).
3. Testes/Verificador confirmou (quando aplicável à fase).

## Legenda de status
⏳ Pendente · 🔄 Em andamento · ✅ Concluída · 🛑 Bloqueada (aguardando decisão sua)
