# nlzrk quiz — style reference

Black and silver. Per-type accent colours. No hue in the neutral stack.

---

## Core Rules

- All surface and ink values are **true neutral** — R = G = B always.
  `#0B0B0B` not `#0B0B0E`. `#6E6E6E` not `#707078`.
- **Accent colour is scoped per question type** via a CSS custom property
  `--accent` set on a wrapper element. Components never reference
  `--mcq-accent` or `--sa-accent` directly — only `--accent`.
- Silver (`#A4A4A4`) is the global chrome accent used outside question
  blocks (progress bar on results screen, chrome pip, upload zone, grade badge).
- No `border-radius` anywhere.
- No `box-shadow`. No `text-shadow`. No gradient.

---

## Palette

```css
:root {
  /* surfaces — true neutral */
  --bg:         #0B0B0B;
  --bg-raised:  #101010;
  --bg-inset:   #080808;
  --bg-hover:   #161616;

  /* ink — true neutral */
  --ink:        #D6D6D6;
  --ink-mid:    #6E6E6E;
  --ink-faint:  #323232;
  --ink-ghost:  #1A1A1A;

  /* rules — true neutral */
  --rule:       #1E1E1E;
  --rule-hard:  #2A2A2A;

  /* silver — global chrome accent */
  --silver:     #A4A4A4;
  --silver-hi:  #CCCCCC;
  --silver-lo:  #484848;
  --silver-dim: #363636;

  /* MCQ — cyan */
  --mcq-accent:       #00BFBF;
  --mcq-accent-dim:   #003838;
  --mcq-accent-faint: #001818;

  /* Short answer — orange */
  --sa-accent:        #C87020;
  --sa-accent-dim:    #3A1E00;
  --sa-accent-faint:  #1A0D00;

  /* States */
  --green:      #2A5C38;
  --green-bg:   #060E08;
  --red:        #842020;
  --red-bg:     #0E0606;
}
```

---

## Accent Scoping

Wrap each question card in a type class. All accent-using components
reference `--accent`, `--accent-dim`, `--accent-faint` only.

```css
.q-mc {
  --accent:       var(--mcq-accent);
  --accent-dim:   var(--mcq-accent-dim);
  --accent-faint: var(--mcq-accent-faint);
}
.q-sa {
  --accent:       var(--sa-accent);
  --accent-dim:   var(--sa-accent-dim);
  --accent-faint: var(--sa-accent-faint);
}
```

HTML pattern:
```html
<div class="q-mc">
  <!-- all accent-aware children inherit cyan -->
</div>

<div class="q-sa">
  <!-- all accent-aware children inherit orange -->
</div>
```

Adding a new type later (e.g. flashcard) requires only:
```css
.q-fc {
  --accent: #9A6AC8;          /* whatever colour */
  --accent-dim: #2A1A3C;
  --accent-faint: #160D20;
}
```

---

## Accent-aware elements

These elements use `var(--accent)` and change appearance per type:

| Element | Uses |
|---|---|
| `.q-dot` | `background: var(--accent)` |
| `.q-type-tag` | `color: var(--accent)`, `border-color: var(--accent-dim)` |
| `.progress-fill` | `background: var(--accent)` |
| `.option::before` (hover) | `background: var(--accent)` |
| `.option:hover .opt-key` | `border-color`, `color: var(--accent)` |
| `.feedback.ok` | `border-top-color: var(--accent)` |
| `.feedback-msg.ok` | `color: var(--accent)` |
| `.sa-input` | `border-left: 2px solid var(--accent)`, `caret-color` |
| `.latex-block` | `border-left: 2px solid var(--accent-dim)` |
| `.btn` (primary) | `background: var(--accent)` |

Elements that do **not** inherit type accent — always silver:
- Chrome bar pip
- Section label pip
- Upload zone caret and code tags
- Grade badge
- Ghost button borders

---

## Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Role | Font |
|---|---|
| Question text only | `Instrument Serif` |
| Everything else | `IBM Plex Mono` |

---

## Body / Scanlines

```css
body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'IBM Plex Mono', monospace;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.12) 2px,
    rgba(0,0,0,0.12) 3px
  );
}
```

---

## Chrome Bar

```css
.chrome {
  height: 48px;
  padding: 0 40px;
  position: sticky; top: 0; z-index: 100;
  background: var(--bg-raised);
  border-bottom: 1px solid var(--rule-hard);
}
.chrome::before {         /* top bevel */
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: var(--silver-lo);   /* subtle — not blinding */
}
.chrome-pip {
  width: 5px; height: 5px;
  background: var(--silver);      /* always silver — not type-accented */
}
```

---

## Upload Zone

```css
/* corner ticks — Y2K */
.upload-zone::before { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
.upload-zone::after  { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }
/* both: border-color: var(--silver-dim) */

.upload-hint code {
  color: var(--silver);           /* always silver */
  border: 1px solid var(--rule-hard);
  background: var(--bg-raised);
}
```

Caret text: `>_`

---

## Progress Bar

```css
.progress-fill {
  height: 1px;
  background: var(--accent, var(--silver));   /* falls back to silver outside q-* */
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Question Meta

```css
.q-dot    { width:5px; height:5px; background: var(--accent); }

.q-type-tag {
  font-size: 8px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--accent-dim);
  padding: 2px 7px;
  margin-left: auto;   /* pushes to right of meta row */
}
```

---

## Short Answer Input

```css
.sa-input {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--ink);
  background: var(--bg-inset);
  border: 1px solid var(--rule-hard);
  border-left: 2px solid var(--accent);   /* orange left bar */
  padding: 14px 16px;
  width: 100%;
  resize: none;
  caret-color: var(--accent);
}
.sa-input::placeholder { color: var(--ink-faint); }
.sa-input:focus { outline: none; }
```

---

## Feedback Strip

```css
.feedback.ok  { border-top-color: var(--accent); }       /* cyan or orange */
.feedback.bad { border-top-color: var(--red); }

.feedback-msg.ok  { color: var(--accent); }
.feedback-msg.bad { color: var(--red); }
```

---

## Buttons

Primary button uses `--accent` inside typed blocks, silver outside:

```css
.btn {
  background: var(--accent, var(--silver));
  color: var(--bg);
  font-size: 9px; font-weight: 600;
  letter-spacing: 0.14em; text-transform: uppercase;
  padding: 10px 22px;
}
```

Ghost button is always silver-neutral:
```css
.btn-ghost {
  color: var(--ink-mid);
  border: 1px solid var(--rule-hard);
  padding: 9px 22px;
}
.btn-ghost:hover { border-color: var(--silver-dim); color: var(--ink); }
```

---

## MD Syntax

```
type: mc
Q: Which technique evaluates $\int x^2 e^x dx$?
- Substitution
- Integration by parts *
- Partial fractions
A: Apply IBP twice with $u = x^2$.

type: sa
Q: State the epsilon-delta definition of continuity.
A: For all $\varepsilon > 0$ there exists $\delta > 0$ such that $|x-a| < \delta \implies |f(x)-f(a)| < \varepsilon$.
img: continuity.png
```

- `type: mc` → wrap in `.q-mc` → cyan accent
- `type: sa` → wrap in `.q-sa` → orange accent
- `*` marks correct MCQ option
- `img:` optional, 1px `--rule-hard` border, no radius

---

## Checklist

- [ ] All surface hex values: R = G = B (true neutral, no tint)
- [ ] All ink hex values: R = G = B
- [ ] All rule hex values: R = G = B
- [ ] MCQ questions wrapped in `.q-mc`
- [ ] Short answer questions wrapped in `.q-sa`
- [ ] No component references `--mcq-accent` or `--sa-accent` directly — only `--accent`
- [ ] Chrome pip is `--silver`, not `--accent`
- [ ] Upload zone corner ticks present
- [ ] Upload caret `>_` in `--silver`
- [ ] `code` tags in upload hint: `--silver` text, 1px rule-hard border
- [ ] Progress fill: `var(--accent, var(--silver))`
- [ ] `.q-type-tag` visible in meta row, right-aligned
- [ ] SA input has `border-left: 2px solid var(--accent)`
- [ ] Feedback `ok` border matches accent colour, not always cyan
- [ ] Primary button uses `var(--accent, var(--silver))`
- [ ] No `border-radius` anywhere
- [ ] No `box-shadow` anywhere
- [ ] No gradient anywhere
- [ ] Ghost number: IBM Plex Mono, `--ink-ghost`
- [ ] State colours `--green` / `--red` desaturated
