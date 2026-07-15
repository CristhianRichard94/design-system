// @ts-check
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

/**
 * Root flat ESLint config for packages/* (packages/ui, packages/tokens).
 * `apps/showcase` keeps its own next/core-web-vitals config (.eslintrc.json)
 * since Next's lint tooling doesn't consume flat config well yet.
 *
 * Reasonably strict, not pedantic — this is a personal design system, not a
 * large team style guide.
 */
export default [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin
    },
    settings: {
      react: { version: "detect" }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      // Empty interfaces extending a supertype are used deliberately across
      // primitives/showpieces as extension points for future props.
      "@typescript-eslint/no-empty-object-type": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  },
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.next/**"]
  }
];
