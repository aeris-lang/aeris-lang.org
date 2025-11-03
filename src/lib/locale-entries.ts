import { baseLocale, locales } from "$lib/paraglide/runtime";
import type { EntryGenerator } from "../routes/[...locale]/$types";

const _entries = locales.map((locale) => ({ locale: locale !== baseLocale ? locale : "" }));

export const entries: EntryGenerator = () => _entries;
