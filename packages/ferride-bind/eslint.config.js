import baseConfig from "@ferride/eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  // Import global configurations
  ...baseConfig,
  // Individual configurations
  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
