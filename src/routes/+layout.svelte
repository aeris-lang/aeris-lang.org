<script lang="ts">
  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";

  import { asset } from "$app/paths";

  const iconLight = asset("/lettermark-light.svg");
  const iconDark = asset("/lettermark-dark.svg");
  const iconLinkProps = {
    rel: "icon",
    type: "image/svg+xml",
  };
</script>

<svelte:head>
  <title>AERIS</title>
  <meta name="description" content="AERIS Programming Language Platform" />
  <link {...iconLinkProps} href={iconLight} />
  <link {...iconLinkProps} href={iconLight} media="(prefers-color-scheme: dark)" />
  <link {...iconLinkProps} href={iconDark} media="(prefers-color-scheme: light)" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  />
</svelte:head>

<slot />

<style lang="scss">
  :global {
    body {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

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
      font-family: "Roboto", sans-serif;
    }
  }
</style>
