<script lang="ts">
  import { page } from "$app/state";
  import { baseLocale, locales, localizeHref } from "$lib/paraglide/runtime";
  import { MetaTags } from "svelte-meta-tags";

  const { children } = $props();

  const { pathname, origin } = page.url;
  const href = new URL(pathname, origin).href;
  const languageAlternates = [
    ...locales.map((locale) => ({
      hrefLang: locale,
      href: localizeHref(href, { locale }),
    })),
    { hrefLang: "x-default", href: localizeHref(href, { locale: baseLocale }) },
  ];
</script>

<MetaTags robots="index, follow" canonical={href} {languageAlternates} />

{@render children()}
