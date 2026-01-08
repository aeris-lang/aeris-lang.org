<script lang="ts">
  import { resolve } from "$app/paths";
  import { page } from "$app/state";
  import { previews, type Preview } from "$lib/preview";

  const { children } = $props();
  const navs: Preview[] = [
    {
      name: "Overview",
      href: ["/preview"],
    },
    ...previews,
  ];
</script>

<div class="grid place-items-center">
  <div class="grid md:grid-flow-col lg:grid-cols-[1fr_auto_1fr]">
    <aside class="z-10 min-w-max self-start md:sticky md:top-24">
      <nav>
        <ul class="grid grid-flow-row">
          {#each navs as { name, href }, i (i)}
            <li class={[href[0] === page.route.id && "text-accent font-bold"]}>
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
      <div class="prose-headings:font-semibold prose-pre:bg-code p-8">
        {@render children()}
      </div>
    </main>
  </div>
</div>
