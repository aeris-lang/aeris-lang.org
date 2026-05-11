import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
export default {
  kit: {
    adapter: adapter(),
    prerender: { origin: process.env.ORIGIN },
    paths: { assets: process.env.ORIGIN },
  },
};
