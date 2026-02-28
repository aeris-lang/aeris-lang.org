import { dev } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const prerender = !dev;
export const ssr = true;
export const csr = true;

export const load: LayoutLoad = ({ url }) => ({
  siteName: "AERIS Programming Language",
  canonical: new URL(url.pathname, url.origin).href,
});
