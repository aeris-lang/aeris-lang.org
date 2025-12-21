<script lang="ts">
  import type { ResolvedPathname } from "$app/types";
</script>

<section class="@container">
  <div class="flex flex-col items-center gap-[4em] py-[12em] text-[clamp(0.6rem,1cqw,1.6rem)]">
    <div class="flex flex-col items-center gap-[2em]">
      <h1 class="grid grid-flow-row auto-rows-[1em] place-items-center text-[4em] leading-tight font-bold">
        {#snippet span(text: string)}
          <span class="bg-[linear-gradient(to_top,var(--color-muted)_0%,var(--color-primary)_50%)] bg-clip-text text-transparent">{text}</span>
        {/snippet}
        {@render span("Next Generation")}
        {@render span("Programming Language")}
      </h1>
      <h2 class="text-[2.5em] leading-none font-semibold text-muted">Fast, Strict, Flexible</h2>
    </div>
    <nav class="flex gap-[1em] text-base">
      {#snippet a(label: string, href: ResolvedPathname)}
        <!-- eslint-disable svelte/no-navigation-without-resolve -->
        <a
          class="block rounded-[0.4em] px-[1.6em] py-[0.8em] text-[1em] leading-none transition-colors duration-100 ease-out select-none
            not-first:border first:bg-primary first:text-bg
            not-first:hover:bg-[rgb(from_var(--color-primary)_r_g_b/0.1)] first:hover:bg-[rgb(from_var(--color-primary)_r_g_b/0.9)]"
          {href}>{label}</a
        >
        <!-- eslint-enable svelte/no-navigation-without-resolve -->
      {/snippet}
      {@render a("Get Started", "/")}
      {@render a("Drafts", "/")}
    </nav>
  </div>
</section>
