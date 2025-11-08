import { baseLocale, locales, localizeHref } from "$lib/paraglide/runtime";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ url }) => {
  const href = new URL(url.pathname, url.origin).href;
  const languageAlternates = [
    ...locales.map((locale) => ({
      hreflang: locale,
      href: localizeHref(href, { locale }),
    })),
    { hreflang: "x-default", href: localizeHref(href, { locale: baseLocale }) },
  ];

  return {
    canonicalHref: href,
    languageAlternates,
  };
};
