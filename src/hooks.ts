import { deLocalizeUrl } from "$generated/paraglide/runtime";

export const reroute = (request) => deLocalizeUrl(request.url).pathname;
