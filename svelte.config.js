import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import("@sveltejs/kit").Config} */
export default {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    prerender: {
      origin: process.env.ORIGIN,
    },
    paths: {
      assets: process.env.ORIGIN,
    },
  },
  extensions: [".svelte", ".svx"],
};
