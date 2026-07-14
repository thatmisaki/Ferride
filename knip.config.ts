import type { KnipConfig } from "knip";

export default {
  ignoreBinaries: ["wasm-pack"],
  ignoreDependencies: ["tailwindcss"],
} satisfies KnipConfig;
