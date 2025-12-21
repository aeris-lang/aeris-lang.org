<script lang="ts">
  import "./layout.css";

  import { asset } from "$app/paths";
  import { page } from "$app/state";

  const { children } = $props();
  const { title, subtitle, description } = page.data;
  const fullTitle = subtitle ? `${title} — ${subtitle}` : title;
  const canonicalHref = new URL(page.url.pathname, page.url.origin).href;
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark light" />
  <meta name="robots" content="index, follow" />
  <meta property="og:site_name" content="AERIS Programming Language" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={asset("/og-image.png")} />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:url" content={canonicalHref} />
  <meta property="og:type" content="website" />
  <link rel="canonical" href={canonicalHref} />
  <link rel="icon" type="image/svg+xml" href={asset("/favicon/light.svg")} />
  <link rel="icon" type="image/svg+xml" href={asset("/favicon/dark.svg")} media="(prefers-color-scheme: light)" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" />
</svelte:head>

{@render children()}
