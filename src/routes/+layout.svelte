<script lang="ts">
  import "./layout.css";

  import { asset } from "$app/paths";
  import { page } from "$app/state";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";

  const { children, data } = $props();
  const { canonicalHref } = $derived(data);
  const { title, description } = page.data;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark light" />
  <link rel="icon" type="image/svg+xml" href={asset("/favicon/light.svg")} />
  <link rel="icon" type="image/svg+xml" href={asset("/favicon/dark.svg")} media="(prefers-color-scheme: light)" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalHref} />
</svelte:head>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex grow flex-col">
    {@render children()}
  </main>
  <Footer />
</div>
