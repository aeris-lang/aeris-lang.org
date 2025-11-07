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
  <meta name="color-scheme" content="dark light" />
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
  @use "$lib/palette.scss" as palette;

  :global {
    :root {
      @include palette.color-scheme();
    }

    html {
      background-color: var(--color-bg);
      color: var(--color-text);
      font-family: "Inter", sans-serif;
    }

    ::selection {
      background-color: var(--color-text);
      color: var(--color-bg);
    }

    * {
      border-color: var(--color-border);
      outline-color: var(--color-border);
    }

    button:enabled {
      cursor: pointer;
    }
  }
</style>
