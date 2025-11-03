<script lang="ts">
  import { page } from "$app/state";
  import { baseLocale, locales, localizeHref } from "$lib/paraglide/runtime";

  const { children } = $props();

  const currentHref = page.url.href;
  const localeAlternates = [
    ...locales.map((locale) => ({
      hreflang: locale,
      href: localizeHref(currentHref, { locale }),
    })),
    { hreflang: "x-default", href: localizeHref(currentHref, { locale: baseLocale }) },
  ];
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={currentHref} />
  {#each localeAlternates as { hreflang, href }}
    <link rel="alternate" {hreflang} {href} />
  {/each}
</svelte:head>

{@render children()}
