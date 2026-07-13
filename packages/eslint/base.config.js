import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // TypeScript lint configurations
      tseslint.configs.stylisticTypeChecked,
      // tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,

      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
