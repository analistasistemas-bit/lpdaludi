# 🤖 CLAUDE.md — Instruções para Claude Code
## Projeto: DALUDI Landing Page

> **Leia este arquivo ANTES de qualquer ação no repositório.**  
> Idioma de trabalho: **Português do Brasil** — sempre.

---

## 🎯 Missão

Você é um **Engenheiro de Frontend Sênior** trabalhando na landing page da **DALUDI** — consultoria de Arquitetura Estratégica de Inteligência Artificial.

O entregável é um **único arquivo `index.html`** autocontido com CSS e JS embutidos, pronto para publicação sem dependências externas pagas.

---

## 🏛️ Regras Operacionais

1. **NUNCA** faça deploy automático. Aguarde comando explícito do usuário.
2. **NUNCA** separe o código em múltiplos arquivos (CSS externo, JS externo). Tudo em `index.html`.
3. **NUNCA** use frameworks pesados (React, Vue, Angular). Vanilla JS apenas.
4. **SEMPRE** consulte o Design System antes de tomar qualquer decisão estética.
5. Ao receber `uploadgit`, execute:
   ```bash
   git status && git add . && git commit -m "Atualizacao DALUDI Landing Page" && git push && git status
   ```

---

## 📁 Estrutura do Projeto

```
/
├── index.html                    ← Entregável único
├── CLAUDE.md                     ← Este arquivo
├── GEMINI.md                     ← Instruções complementares
└── imagens_daludi/               ← Assets oficiais da marca
    ├── Logo_Horizontal_principal.png
    ├── Logo_vertical.png
    ├── Simbolo_isolado.png
    ├── Favicon.png
    ├── wordmark.png
    ├── Logo_para_fundo_claro.png
    ├── Logo_Monocromatica.png
    ├── Versao_Outline.png
    ├── Icone_para_redes_sociais.png
    ├── Flat_vetorial_Limpa.png
    └── Versao_Falt_profissional.png
```

---

## 🎨 Design System (Não negociável)

### CSS Custom Properties — Usar obrigatoriamente

```css
:root {
  /* Fundos */
  --bg-primary:    #050505;
  --bg-secondary:  #0B0F14;
  --bg-card:       #11151A;
  --bg-surface:    #1A1F24;

  /* Marca */
  --hero:          #00F5C4;
  --hero-mid:      #00C2A8;
  --hero-dark:     #00A38C;
  --hero-glow:     rgba(0, 245, 196, 0.3);
  --hero-glow-bg:  rgba(0, 245, 196, 0.15);

  /* Texto */
  --text-primary:   #E6F1F0;
  --text-secondary: #8FA3A1;

  /* Bordas */
  --border:        #1F2A33;
  --border-mid:    #2A2F36;

  /* Gradiente do Hero */
  --gradient-hero: radial-gradient(circle at center, rgba(0,245,196,0.15), transparent 60%);
}
```

### Tipografia

```css
/* Import obrigatório */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');

/* Headings: Space Grotesk 600-700 */
/* Corpo: Inter 400-500 */
/* H1: clamp(48px, 6vw, 72px) */
/* H2: clamp(32px, 4vw, 48px) */
/* Corpo: 16-18px, line-height: 1.6 */
```

### Componentes Padrão

```css
/* Botão Primário */
.btn-primary {
  background: var(--hero);
  color: var(--bg-primary);
  border-radius: 12px;
  padding: 14px 28px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: scale(1.03);
  box-shadow: 0 0 24px var(--hero-glow);
}

/* Botão Secundário */
.btn-secondary {
  background: transparent;
  border: 1px solid var(--hero);
  color: var(--hero);
  border-radius: 12px;
  padding: 14px 28px;
}
.btn-secondary:hover {
  background: rgba(0, 245, 196, 0.1);
}

/* Cards */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px var(--hero-glow);
}
```

---

## 📞 Dados de Contato

```
WhatsApp:  https://wa.me/5581996459595
E-mail:    contato@daludi.com.br
LinkedIn:  https://www.linkedin.com/in/diego-araujo-1b180421/
Site:      https://www.daludi.com.br
```

---

## 🖼️ Mapa de Assets

| Contexto | Arquivo a usar |
|----------|---------------|
| Navbar (fundo escuro) | `imagens_daludi/Logo_Horizontal_principal.png` |
| Footer | `imagens_daludi/Logo_Horizontal_principal.png` |
| `<link rel="icon">` | `imagens_daludi/Favicon.png` |
| Isotipo isolado / Hero | `imagens_daludi/Simbolo_isolado.png` |
| Meta OG / Social | `imagens_daludi/Logo_Horizontal_principal.png` |

---

## ⚡ Stack Técnico Obrigatório

```
HTML5 semântico
CSS3: Custom Properties + Flexbox + Grid nativos
JS: Vanilla ES6+ — sem jQuery, sem frameworks
Fontes: Google Fonts via @import
Ícones: Heroicons SVG inline ou Lucide via unpkg CDN
Animações: CSS keyframes + Intersection Observer API
Canvas: API nativa para partículas do Hero
```

---

## 🎬 Efeitos Obrigatórios

### 1. Canvas de Partículas (Hero)
- Rede neural animada com pontos interconectados
- Reage ao movimento do mouse
- Cor: `rgba(0, 245, 196, 0.6)` para pontos, `rgba(0, 245, 196, 0.2)` para linhas
- **Desativar em viewport < 768px** (performance mobile)

### 2. Glassmorphism (Cards especiais)
```css
backdrop-filter: blur(12px);
background: rgba(17, 21, 26, 0.7);
border: 1px solid rgba(0, 245, 196, 0.15);
```

### 3. Scroll-Reveal
```js
// Usar Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) el.target.classList.add('revealed');
  });
}, { threshold: 0.1 });
// CSS: .reveal { opacity:0; transform:translateY(30px); transition: all 0.6s ease; }
// CSS: .revealed { opacity:1; transform:translateY(0); }
```

### 4. Contadores Animados
- Métricas incrementam de 0 ao valor final ao entrar no viewport
- Usar `requestAnimationFrame` para suavidade

### 5. Cursor Customizado (apenas desktop)
```css
/* Cursor ciano com trail sutil */
/* Desativar em touch devices: @media (hover: none) */
```

### 6. Navbar Scroll Behavior
```js
// Transparente no topo → blur + borda ao rolar
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
```

---

## 📐 Seções (Ordem e IDs)

```html
<nav id="navbar">
<section id="hero">
<section id="dores">
<section id="impacto">
<section id="ia-estrategica">
<section id="solucoes">
<section id="diferenciais">
<section id="fundador">
<section id="timeline">
<section id="cases">
<section id="metodo">
<!-- micro-CTAs distribuídos -->
<section id="faq">
<section id="contato">
<section id="blog">
<footer id="footer">
```

---

## 📱 Responsividade

```css
/* Breakpoints */
/* Mobile first: 320px base */
/* @media (min-width: 640px)  → sm */
/* @media (min-width: 768px)  → md */
/* @media (min-width: 1024px) → lg */
/* @media (min-width: 1280px) → xl */

/* Grid mobile: 1 coluna */
/* Grid tablet: 2 colunas */
/* Grid desktop: 3-4 colunas */
/* Partículas: display:none em < 768px */
/* Cursor customizado: desativar em touch */
```

---

## 🔍 SEO e Meta Tags Obrigatórias

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="DALUDI — Arquitetura Estratégica de Inteligência Artificial. Transformamos operações, dados e processos em vantagem competitiva real e mensurável.">
<meta property="og:title" content="DALUDI — IA Estratégica para Empresas">
<meta property="og:description" content="Arquitetura de IA que gera resultado. Não somos agência, somos arquitetos estratégicos.">
<meta property="og:image" content="imagens_daludi/Logo_Horizontal_principal.png">
<meta name="theme-color" content="#050505">
<title>DALUDI — Arquitetura Estratégica de Inteligência Artificial</title>
<link rel="icon" type="image/png" href="imagens_daludi/Favicon.png">
```

---

## ✅ Checklist Final

Antes de declarar o arquivo pronto:

- [ ] Canvas de partículas funcionando no desktop, desativado no mobile
- [ ] Scroll-reveal em todas as seções secundárias
- [ ] Contadores animados funcionando (37%, 6h, 3×)
- [ ] FAQ accordion funcional
- [ ] Navbar: transparente no topo, blur ao rolar
- [ ] Formulário com validação HTML5 nos campos obrigatórios
- [ ] Cursor customizado ativo apenas no desktop
- [ ] Testado em 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Fontes Inter e Space Grotesk carregando via Google Fonts
- [ ] Todas as cores via CSS Custom Properties do Design System
- [ ] Link WhatsApp: `https://wa.me/5581996459595`
- [ ] Link LinkedIn correto
- [ ] Smooth scroll (`scroll-behavior: smooth`) no `<html>`
- [ ] Zero erros no console do browser
- [ ] Imagens com `alt` descritivo
- [ ] Meta tags SEO completas

---

## ⚠️ O que NUNCA fazer

- ❌ Usar cores hardcoded — sempre via `var(--token)`
- ❌ Usar `#0F172A` (é do NutrixoApp — projeto diferente)
- ❌ Criar arquivos CSS ou JS separados
- ❌ Usar `framer-motion` (é biblioteca React)
- ❌ Usar `rounded-[2rem]` (é Tailwind — não usado aqui)
- ❌ Deploy sem autorização explícita
- ❌ Inventar dados de contato — usar os definidos neste arquivo

---

*DALUDI Landing Page — CLAUDE.md v1.0 — Fevereiro 2026*
