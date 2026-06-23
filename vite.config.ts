import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const ORIGIN = process.env["ORIGIN"] as
  | `http://${string}`
  | `https://${string}`;

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      adapter: adapter(),
      prerender: { origin: ORIGIN },
      paths: { assets: ORIGIN },
    }),
  ],
});
