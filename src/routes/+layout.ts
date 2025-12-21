import { dev } from "$app/environment";

export const prerender = !dev;
export const ssr = true;
export const csr = true;
