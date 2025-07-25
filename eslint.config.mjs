import { globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import next from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config([
  globalIgnores(["**/pnpm-lock.yaml", "**/node_modules", "**/.next"]),
  jsxA11y.flatConfigs.recommended,
  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      globals: {
        self: true,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ...importPlugin.flatConfigs.recommended,
    rules: { "import/no-named-as-default-member": "off" },
  },
  importPlugin.flatConfigs.typescript,
  js.configs.recommended,
  next.flatConfig.recommended,
  tseslint.configs.recommended,
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
      "import/no-unresolved": "off",
    },
  },
  {
    ...react.configs.flat.recommended,
    rules: {
      "react/prop-types": "off",
    },
  },
  react.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  eslintConfigPrettier,
]);
