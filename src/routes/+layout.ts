import { dev } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const prerender = !dev;
export const ssr = true;
export const csr = true;

export const load: LayoutLoad = ({ url }) => {
  const href = new URL(url.pathname, url.origin).href;

  return {
    canonicalHref: href,
  };
};
