import type { Config } from "tailwindcss";
import dsPreset from "../../tailwind.config";

const config: Config = {
  presets: [dsPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ]
};

export default config;
