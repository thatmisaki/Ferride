import baseConfig from "@ferride/eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ["vite.config.ts"],
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
