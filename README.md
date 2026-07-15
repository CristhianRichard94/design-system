# design-system

Shared source of truth for shadcn/Radix-based components used across
`automakers-landing`, `caseritas-arg`, `roomigos`, and future projects.

Dark-first, bold/modern (Aceternity-style) aesthetic, electric blue/cyan accent.

## Structure

- `packages/tokens` (`@ds/tokens`) — CSS custom properties + typed JS token object.
- `packages/ui` (`@ds/ui`) — Radix UI primitives styled with Tailwind + cva,
  animated with Framer Motion. Built with tsup (ESM + CJS + `.d.ts`).
- `apps/showcase` — Next.js App Router app that renders every component's
  variants/states, for visual QA and reference.
- `tailwind.config.ts` (root) — shared preset mapping design tokens onto
  Tailwind theme keys (`bg-accent`, `text-fg`, etc). Consumed via `presets: []`
  by both `packages/ui` (types only, no build-time Tailwind) and
  `apps/showcase`.

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

## Typecheck / build everything

```bash
pnpm typecheck
pnpm build
```

## Consume from another project (local, via `file:` protocol)

Until this is published to a registry, point consumer projects at the local
package directories in their `package.json`:

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
found in this repo's root `tailwind.config.ts` (or add it as a `presets` entry
if their build can resolve this repo's path).

Run `pnpm --filter @ds/ui build` after any change to `packages/ui` so the
`dist/` output consumed via `file:` stays up to date (or run `pnpm dev` for a
watch build during active development).
