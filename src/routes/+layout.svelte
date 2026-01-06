<script lang="ts">
  import "../app.css";

  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { faviconDark, faviconLight, profile as ogImage } from "$lib/assets";
  import { Letterform } from "$lib/components";
  import { SITE_NAME } from "$lib/constants";

  const { children } = $props();
  const { title, subtitle, description, robots, canonical } = $derived(
    page.data,
  );
  const fullTitle = $derived(`${title} — ${subtitle}`);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <meta name="color-scheme" content="dark" />
  <meta name="robots" content={robots} />
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

<div class="grid min-h-screen grid-rows-[auto_1fr]">
  <header class="bg-bg/40 sticky top-0 z-20 border-b backdrop-blur-xs">
    <div class="flex items-center justify-between px-6 py-4">
      <a href={resolve("/")} aria-label="Go to home">
        <Letterform />
      </a>
      <nav>
        <a
          href="https://github.com/aeris-lang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="not-hover:text-muted duration-200 ease-in-out">
            <div class="px-2 py-1">
              <span>GitHub</span>
            </div>
          </div>
        </a>
      </nav>
    </div>
  </header>
  <div>
    {@render children()}
  </div>
</div>
