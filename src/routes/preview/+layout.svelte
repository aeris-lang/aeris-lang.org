<script lang="ts">
  import { resolve } from "$app/paths";

  const { children } = $props();

  interface Preview {
    label: string;
    href: Parameters<typeof resolve>;
  }

  const previews: Preview[] = [
    {
      label: "Premise",
      href: ["/preview/premise"],
    },
    {
      label: "Syntax Definition",
      href: ["/preview/syndef"],
    },
  ];
</script>

<div class="mx-auto grid h-max max-w-300 grid-cols-[200px_1fr] gap-4">
  <aside class="sticky top-20 z-10 self-start">
    <h3>Features</h3>
    <nav>
      <ul class="grid grid-flow-row">
        {#each previews as { href, label }, i (i)}
          <li>
            <a href={resolve(...href)}>
              <div class="px-8 py-2">
                <span>{label}</span>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <main>
    {@render children()}
  </main>
</div>
