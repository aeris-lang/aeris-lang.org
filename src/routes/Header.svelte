<script lang="ts">
  import { resolve } from "$app/paths";
  import Lettermark from "$lib/components/Lettermark.svelte";
</script>

<header class="sticky top-0 border-b bg-[rgb(from_var(--color-bg)_r_g_b/0.6)] px-8 py-4 backdrop-blur-xs">
  <div class="flex h-6 items-center justify-between">
    <a class="block h-full shrink-0 text-primary" href={resolve("/")} aria-label="Go to Home">
      <Lettermark />
    </a>
    <nav class="flex items-center gap-4">
      {#snippet a(label: string, href: string)}
        <a class="text-sm transition-colors duration-300 ease-out select-none not-hover:text-muted" {href} target="_blank" rel="external noopener noreferrer"
          >{label}</a
        >
      {/snippet}
      {@render a("Releases", "https://github.com/aeris-lang/aeris/releases")}
      {@render a("GitHub", "https://github.com/aeris-lang")}
    </nav>
  </div>
</header>
