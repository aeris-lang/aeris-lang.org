<script lang="ts">
  import { resolve } from "$app/paths";
  import { previews } from "$lib/preview";

  const { children } = $props();
</script>

<div class="mx-auto grid h-max max-w-300 grid-cols-[200px_1fr] gap-4">
  <aside class="sticky top-20 z-10 self-start">
    <nav>
      <ul class="grid grid-flow-row">
        <li>
          <a href={resolve("/preview")}>
            <div class="px-8 py-2">
              <span>Overview</span>
            </div>
          </a>
        </li>
        {#each previews as { name, href }, i (i)}
          <li>
            <a href={resolve(...href)}>
              <div class="px-8 py-2">
                <span>{name}</span>
              </div>
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>
  <main class="prose prose-invert prose-headings:font-semibold p-8">
    {@render children()}
  </main>
</div>
