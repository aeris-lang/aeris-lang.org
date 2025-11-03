<script lang="ts">
  import "tailwindcss/preflight.css";

  import { asset } from "$app/paths";
  import { page } from "$app/state";

  const { children } = $props();

  const { title, description } = page.data;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="icon" type="image/svg+xml" href={asset("/lettermark-light.svg")} />
  <link
    rel="icon"
    type="image/svg+xml"
    href={asset("/lettermark-dark.svg")}
    media="(prefers-color-scheme: light)"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  />
</svelte:head>

{@render children()}

<style lang="scss">
  :global {
    :root {
      --color-bg: #000000;
      --color-accent: #ffffff;
      --color-text: #e0e0e0;
      --color-subtext: #aaaaaa;
      --color-line: #333333;
    }

    html {
      background-color: var(--color-bg);
      color: var(--color-text);
      font-family: "Inter", sans-serif;
    }
  }
</style>
