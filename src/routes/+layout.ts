import { dev } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const prerender = !dev;
export const ssr = true;
export const csr = true;

export const load: LayoutLoad = ({ url }) => ({
  description:
    "AERIS is a general-purpose programming language " +
    "featuring compile-time premises and a sophisticated type system, " +
    "designed for high performance and zero-overhead.",
  robots: "index, follow",
  canonical: new URL(url.pathname, url.origin).href,
});
