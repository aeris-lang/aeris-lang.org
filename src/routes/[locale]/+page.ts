import { locales } from "$lib/paraglide/runtime";
import type { EntryGenerator, PageLoad } from "./$types";

export const entries: EntryGenerator = () => locales.map((locale) => ({ locale }));

export const load: PageLoad = () => {
  return {
    title: "AERIS — Next Generation Programming Language",
    description: "AERIS is a multiparadigm programming language.",
  };
};
