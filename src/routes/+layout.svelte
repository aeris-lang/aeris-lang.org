<script lang="ts">
  import { asset } from "$app/paths";

  import "@unocss/reset/tailwind.css";
  import "virtual:uno.css";
  import "../app.scss";

  const lightIconURL = asset("/lettermark-light.svg");
  const darkIconURL = asset("/lettermark-dark.svg");
  const iconLinkProps = {
    rel: "icon",
    type: "image/svg+xml",
  };
</script>

<svelte:head>
  <title>AERIS</title>
  <meta name="description" content="AERIS Programming Language Platform" />
  <link {...iconLinkProps} href={lightIconURL} />
  <link {...iconLinkProps} href={lightIconURL} media="(prefers-color-scheme: dark)" />
  <link {...iconLinkProps} href={darkIconURL} media="(prefers-color-scheme: light)" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  />
</svelte:head>

<slot />
