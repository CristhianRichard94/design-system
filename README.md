# @ds — Personal Design System

[![npm-free](https://img.shields.io/badge/install-github%3A-1e3ac7)](https://github.com/CristhianRichard94/design-system)
[![license](https://img.shields.io/badge/license-MIT-1e3ac7)](#license)
[![tsup](https://img.shields.io/badge/bundler-tsup-1e3ac7)](#)
[![radix-ui](https://img.shields.io/badge/primitives-Radix%20UI-1e3ac7)](#)

A dark-first, bold/modern component library and design token system, built to
replace copy-pasted shadcn/Radix components across my projects with one
shared, versioned source of truth.

Built on **Radix UI** primitives, styled with **Tailwind + cva**, animated
with **Framer Motion**, bundled with **tsup** (ESM + CJS + `.d.ts`), managed
as a **pnpm workspace**. Ships both functional primitives (Button, Dialog,
Tabs, Dropdown, Tooltip, Input, Card, Badge) and Aceternity-style showpieces
(spotlight cards, animated gradient hero, marquee, bento grid).

**Live showcase:** every component + variant + state is rendered in
`apps/showcase`, a Next.js app that doubles as a visual style guide.

---

## Why this exists

Multiple React projects (`caseritas-arg`, `roomigos`) each had their own copy
of the same shadcn/Radix components,
independently drifting out of sync. This repo is the fix: one versioned
package, consumed as a real dependency (`file:` locally, `github:` remotely),
instead of regenerating components per-project.

## Features

- **Design tokens** (`@ds/tokens`) — CSS custom properties + a typed JS
  mirror. Dark-first `:root` values, light theme via `[data-theme="light"]`.
  Color, radius, shadow, and motion-duration/easing scales.
- **Primitives** (`@ds/ui`) — Button, Badge, Input, Card, Tooltip, Tabs,
  Dialog, DropdownMenu. Radix UI under the hood for accessibility/behavior,
  `cva` for variants, `cn()` (clsx + tailwind-merge) for className merging.
- **Showpieces** — SpotlightCard (cursor-tracking radial spotlight),
  AnimatedGradientHero, Marquee (pure-CSS, pause-on-hover), BentoGrid.
- **Shared Tailwind preset** — one `tailwind.config.ts` maps every token onto
  Tailwind theme keys (`bg-accent`, `text-fg`, `shadow-glow`, ...), consumed
  by both the `ui` package and the showcase app via `presets: []`.
- **Two consumption paths** — local `file:` linking during active
  development, or a versioned `github:...#tag&path:` install for projects
  that just need a stable release (see below).
- **Real external usage** — already wired into a second, unrelated project
  (Financial-Assistant/finsight) as a genuine git dependency, not just a
  workspace-internal package.

## Structure

```
design-system/
  packages/
    tokens/          # @ds/tokens — CSS vars + typed JS token object
    ui/               # @ds/ui — Radix primitives + showpieces, tsup-bundled
  apps/
    showcase/         # Next.js app, one route per component, visual QA
  tailwind.config.ts  # shared preset consumed by ui + showcase
  pnpm-workspace.yaml
```

## Develop

```bash
pnpm install
pnpm dev          # builds @ds/ui in watch mode + runs the showcase app
```

Or per-package:

```bash
pnpm --filter @ds/ui build
pnpm --filter @ds/ui dev       # tsup --watch
pnpm --filter showcase dev     # next dev
```

## Typecheck / build / test everything

```bash
pnpm typecheck
pnpm build
pnpm --filter @ds/ui test
pnpm lint
```

## Consume from another project (local, via `file:` protocol)

Point consumer projects at the local package directories in their
`package.json`:

```json
{
  "dependencies": {
    "@ds/tokens": "file:../design-system/packages/tokens",
    "@ds/ui": "file:../design-system/packages/ui"
  }
}
```

Then import the CSS tokens once (e.g. in your root layout/global CSS) and the
components anywhere:

```css
/* globals.css */
@import "@ds/tokens/css";
```

```tsx
import { Button } from "@ds/ui";
```

Consumers need `tailwindcss`, `react`, `react-dom` as their own dependencies,
and should extend their Tailwind config with the same `theme.extend` mapping
found in this repo's root `tailwind.config.ts` (or add it as a `presets`
entry if their build can resolve this repo's path).

Run `pnpm --filter @ds/ui build` after any change to `packages/ui` so the
`dist/` output consumed via `file:` stays current (or use `pnpm dev` for a
watch build during active development).

## Consume from another project (remote, via GitHub)

Repo is public: https://github.com/CristhianRichard94/design-system. Both
`packages/ui` and `packages/tokens` have a `prepare` script, so a git install
builds `dist/` automatically — no build output committed to the repo.

**pnpm** (recommended — supports subdirectory installs natively):

```json
{
  "dependencies": {
    "@ds/tokens": "github:CristhianRichard94/design-system#path:packages/tokens",
    "@ds/ui": "github:CristhianRichard94/design-system#path:packages/ui"
  }
}
```

Pin to a tag instead of `main` for stability, e.g. `#v0.1.1&path:packages/ui`.

**npm / yarn / bun**: none of these support installing a subdirectory of a
git repo as a package — a `github:` dependency always installs the repo
root. For npm-based or bun-based consumer projects, use the `file:` protocol
above instead, or switch that project to pnpm.

## Design tokens

Dark-first CSS custom properties in `:root`, overridden under
`[data-theme="light"]`. Accent is a navy blue 50–950 ramp; semantic tokens
(`--bg`, `--fg`, `--muted`, `--border`, `--ring`, `--accent`,
`--accent-foreground`, `--destructive`, `--card`) build on top of it, plus a
radius/shadow/motion-easing scale. `tokens.ts` mirrors every value typed, for
components or consumers that need raw values in JS (gradient stops, spring
configs) instead of CSS.

If you're integrating `@ds` into a project that already has its own
CSS-variable-based theme (e.g. an existing shadcn setup), don't import the
tokens at `:root` — you'll silently overwrite the existing theme. Scope them
instead under an attribute selector (e.g. `[data-ds-scope]`) and wrap only
the components you're migrating.

## Versioning

[Keep a Changelog](https://keepachangelog.com/) format in `CHANGELOG.md`.
Tag releases (`v0.1.1`, ...) so remote consumers can pin to a stable
commit instead of tracking `main`.

## License

MIT
