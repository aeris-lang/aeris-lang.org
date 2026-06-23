<script lang="ts">
  import "pretendard/dist/web/variable/pretendardvariable.css";
  import "../app.css";

  import { asset } from "$app/paths";
  import { page } from "$app/state";
  import { favicon_dark, favicon_light } from "$lib/assets";

  const { children } = $props();
  const { site_name, description, robots, canonical } = $derived(page.data);
  const title = $derived(`${page.data.title} — ${page.data.subtitle}`);
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark" />
  <meta name="robots" content={robots} />
  <meta property="og:site_name" content={site_name} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={asset("/icon.webp")} />
  <link rel="canonical" href={canonical} />
  <link rel="icon" href={favicon_light} />
  <link rel="icon" href={favicon_dark} media="(prefers-color-scheme: light)" />
</svelte:head>

{@render children()}
