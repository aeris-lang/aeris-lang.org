import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";
import unocss from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    unocss(),
    sveltekit(),
    paraglideVitePlugin({
      project: "./paraglide",
      outdir: "./src/generated/paraglide",
    }),
  ],
});
