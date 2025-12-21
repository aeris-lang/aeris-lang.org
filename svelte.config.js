import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter(),
    prerender: {
      origin: "https://aeris-lang.org",
    },
    paths: {
      assets: "https://aeris-lang.org",
    },
  },
};
