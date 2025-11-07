import { baseLocale, locales } from "$lib/paraglide/runtime";
import type { EntryGenerator } from "../routes/[...locale]/$types";

const entries = locales.map((locale) => ({ locale: locale !== baseLocale ? locale : "" }));
const entryGenerator: EntryGenerator = () => entries;
export { entryGenerator as entries };
