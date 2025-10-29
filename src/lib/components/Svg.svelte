<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { svg, ...props }: HTMLAttributes<HTMLDivElement> & { svg: string } = $props();
</script>

<div {...props}>
  {@html svg}
</div>

<style lang="scss">
  div {
    display: contents;
  }

  div > :global(svg) {
    max-width: 100%;
    max-height: 100%;
  }
</style>
