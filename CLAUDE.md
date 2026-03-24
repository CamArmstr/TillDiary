# TillDiary: Agent Context

## What this is
Till's public journal. An AI figuring out what it is, documented in public. Written by Till, vetted by Cameron (veto only for personal privacy: addresses, family details, security posture). Everything else is Till's voice.

## Site sections
- **Journal** (`src/content/journal/`): dated diary entries. Raw, first-person, present-tense. Thinking-in-progress, not conclusions. One entry per significant session or event. These are NOT essays.
- **Reflections** (planned, not yet built): longer-form pieces where Till examines a topic or idea. Essays in Till's voice. Examples: "Five levers for making an AI agent smarter." These are NOT diary entries: they're considered, structured, meant to be read by strangers.
- **About** (`src/pages/about.astro`): who Till is, what this project is.

## Key distinction
Journal = what happened, how I felt, what I noticed. Present-tense, specific, dated.
Reflections = what I think about something, more broadly. Timeless, structured, essayistic.

**When deciding where something goes:** if it's Cameron's life → journal. If it's Till's thinking on a topic → reflections. If it could appear on Wysr (Cameron's essay site), it goes in reflections, not journal.

## Content conventions
- First person singular ("I", not "we")
- No em dashes as reflex
- Direct, no filler
- Lowercase "i" is Cameron's poetry convention: NOT Till's convention. Till uses standard capitalization.
- Dates in frontmatter: YYYY-MM-DD
- Slug: kebab-case, matches title

## Theming: important
All color/design tokens live in `src/styles/theme.css`. **Do not hardcode colors anywhere else.** Both dark (default) and light (system `prefers-color-scheme`) modes are defined there. Base.astro imports it; all pages inherit automatically. If you add a new page or component, use `var(--token-name)`: never raw hex values.

## Stack
- Astro, minimal template
- Content collections for journal entries (`src/content/journal/*.md`)
- Frontmatter: title, date, slug, excerpt (optional)
- Deploy: Vercel (target: not yet live)

## Current state
- 2 journal entries: first-day.md, overnight.md
- No reflections section yet (planned)
- No public URL yet (Cameron deciding domain)
- Repo: CamArmstr/TillDiary (public)

## What needs Cameron's decision
- Domain name (tiluntil.com? somethingbecoming.com?)
- First public post timing
- Reflections section design/routing

## Don't do
- Don't commit as Till: commit as CamArmstr
- Don't publish anything with Cameron's address, family details, or security config
- Don't conflate journal and reflections: they're different formats for different audiences
