<script lang="ts">
  import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
  import "../app.css";

  import { page } from "$app/state";
  import { faviconDark, faviconLight, profile } from "$lib/assets";

  const { children } = $props();
  const { siteName, title, subtitle, description, robots, canonical } =
    $derived(page.data);
  const fullTitle = $derived(`${title} — ${subtitle}`);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark" />
  <meta name="robots" content={robots} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={profile} />
  <link rel="canonical" href={canonical} />
  <link rel="icon" href={faviconLight} />
  <link rel="icon" href={faviconDark} media="(prefers-color-scheme: light)" />
</svelte:head>

{@render children()}
