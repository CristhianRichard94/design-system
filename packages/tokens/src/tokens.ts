/**
 * Typed JS mirror of tokens.css — for use in Framer Motion configs, chart
 * libraries, or anywhere CSS custom properties aren't accessible directly.
 * Keep this in sync with tokens.css by hand (no build step, source is truth).
 */

export const neutral = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b",
  950: "#09090b"
} as const;

export const accent = {
  50: "#eff4ff",
  100: "#dbe6fe",
  200: "#bfd4fe",
  300: "#93b7fd",
  400: "#6090fa",
  500: "#3b66f5",
  600: "#2547e8",
  700: "#1e3ac7",
  800: "#1e3aa1",
  900: "#1e3a8a",
  950: "#16215a"
} as const;

export const semanticDark = {
  bg: neutral[950],
  fg: neutral[50],
  muted: neutral[900],
  mutedForeground: neutral[400],
  border: neutral[800],
  ring: accent[500],
  accent: accent[700],
  accentForeground: neutral[50],
  destructive: "#ef4444",
  destructiveForeground: neutral[50],
  card: neutral[900],
  cardForeground: neutral[50]
} as const;

export const semanticLight = {
  bg: neutral[50],
  fg: neutral[950],
  muted: neutral[100],
  mutedForeground: neutral[600],
  border: neutral[200],
  ring: accent[600],
  accent: accent[700],
  accentForeground: neutral[50],
  destructive: "#dc2626",
  destructiveForeground: neutral[50],
  card: "#ffffff",
  cardForeground: neutral[950]
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.625rem",
  lg: "1rem"
} as const;

export const motion = {
  duration: {
    fast: 0.12,
    base: 0.22,
    slow: 0.4
  },
  // Framer Motion ease arrays equivalent to the CSS cubic-bezier tokens.
  ease: {
    out: [0.16, 1, 0.3, 1],
    in: [0.7, 0, 0.84, 0],
    inOut: [0.65, 0, 0.35, 1]
  }
} as const;

export const tokens = {
  neutral,
  accent,
  semanticDark,
  semanticLight,
  radius,
  motion
} as const;

export type Tokens = typeof tokens;

export default tokens;
