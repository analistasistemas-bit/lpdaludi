# 📖 Guia de Manutenção e Deploy

Este guia orienta como realizar alterações e manter a Landing Page da DALUDI atualizada.

## 🛠️ Como fazer alterações

Como o projeto é um arquivo único (`index.html`), o fluxo é direto:

1. **Textos e Conteúdo**: Procure pelas tags semânticas (`<section>`, `<h2>`, `<p>`) no corpo do HTML.
2. **Estilos (CSS)**: Localize a tag `<style>` no cabeçalho. Utilize as variáveis no topo para mudar cores globais.
3. **Imagens**: Substitua na pasta `imagens_daludi/` mantendo os nomes originais para atualização automática.

## 🚀 Fluxo de Deploy

Sempre valide localmente antes de subir para produção.

### Comandos de Versionamento (Git)
Utilize o comando rápido:
```bash
git status
git add .
git commit -m "Nova atualização DALUDI"
git push
```

## 🧪 Verificação Pós-Edição

Antes de finalizar qualquer alteração, verifique:
- [ ] O canvas de partículas continua responsivo?
- [ ] O formulário de contato envia os dados corretamente?
- [ ] A visualização em dispositivos móveis (375px) está preservada?
- [ ] Há erros no console do desenvolvedor (F12)?

---
*DALUDI User Guide — v1.0 — Fevereiro 2026*
