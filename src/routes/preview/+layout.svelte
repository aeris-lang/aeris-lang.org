<script lang="ts">
  import { resolve } from "$app/paths";
  import { previews } from "$lib/preview";

  const { children } = $props();
</script>

<div
  class="mx-auto grid max-w-max md:grid-cols-[auto_auto] lg:grid-cols-[1fr_auto_1fr]"
>
  <aside class="z-10 self-start md:sticky md:top-20">
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
  <main class="prose prose-invert prose-sm md:prose-base lg:prose-lg min-w-0">
    <div class="prose-headings:font-semibold prose-pre:bg-[#1F1F1F] p-8">
      {@render children()}
    </div>
  </main>
</div>
