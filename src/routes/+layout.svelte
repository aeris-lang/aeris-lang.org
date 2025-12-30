<script lang="ts">
  import "./layout.css";

  import { page } from "$app/state";
  import { faviconDark, faviconLight, profile as ogImage } from "$lib/assets";
  import { SITE_NAME } from "$lib/constants";

  const { children, data } = $props();
  const { canonical } = $derived(data);
  const { title, subtitle, description } = $derived(page.data);
  const fullTitle = $derived(subtitle ? `${title} — ${subtitle}` : title);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark" />
  <meta name="robots" content="index, follow" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonical} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <link rel="canonical" href={canonical} />
  <link rel="icon" href={faviconLight} />
  <link rel="icon" href={faviconDark} media="(prefers-color-scheme: light)" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  />
</svelte:head>

{@render children()}
