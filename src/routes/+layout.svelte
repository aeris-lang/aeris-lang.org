<script lang="ts">
  import "tailwindcss/preflight.css";

  import { asset } from "$app/paths";
  import { page } from "$app/state";
  import { MetaTags } from "svelte-meta-tags";

  const { children } = $props();

  const { title, description } = page.data;
</script>

<MetaTags {title} {description} />
<svelte:head>
  <link rel="icon" type="image/svg+xml" href={asset("/lettermark-light.svg")} />
  <link
    rel="icon"
    type="image/svg+xml"
    href={asset("/lettermark-dark.svg")}
    media="(prefers-color-scheme: light)"
  />
  <meta name="color-scheme" content="dark light" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  />
  <script>
    (() => {
      const dataset = document.documentElement.dataset;
      const theme = localStorage.getItem("theme");
      switch (theme) {
        case "dark":
          break;
        case "light":
          dataset.theme = "light";
          break;
        default:
          const preferLight = window.matchMedia("(prefers-color-scheme: light)").matches;
          if (preferLight) {
            dataset.theme = "light";
          }
      }
    })();
  </script>
</svelte:head>

{@render children()}

<style lang="scss">
  @use "$lib/palette.scss" as palette;

  :global {
    :root {
      @include palette.dark-scheme();
    }

    :root[data-theme="light"] {
      @include palette.light-scheme();
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
  }
</style>
