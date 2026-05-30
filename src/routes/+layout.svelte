<script lang="ts">
  import "pretendard/dist/web/variable/pretendardvariable.css";
  import "../app.css";

  import { page } from "$app/state";
  import { faviconDark, faviconLight, profile } from "$lib/assets";

  const { children } = $props();
  const { siteName, description, robots, canonical } = $derived(page.data);
  const title = $derived(`${page.data.title} — ${page.data.subtitle}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark" />
  <meta name="robots" content={robots} />
  <meta property="og:site_name" content={siteName} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={profile} />
  <link rel="canonical" href={canonical} />
  <link rel="icon" href={faviconLight} />
  <link rel="icon" href={faviconDark} media="(prefers-color-scheme: light)" />
</svelte:head>

{@render children()}
