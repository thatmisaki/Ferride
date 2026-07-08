import baseConfig from "@ferride/eslint/eslint.config.js";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ["vite.config.ts", "vite.config.js"],
  },
  // Import global configurations
  ...baseConfig,
  // Individual configurations
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
