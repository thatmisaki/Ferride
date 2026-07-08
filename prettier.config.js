/** @type {import('prettier').Config} */
export default {
  tailwindStylesheet: "./packages/tailwindcss/tailwind.css",
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  semi: true,
  tabWidth: 2,
  singleQuote: false,
};
