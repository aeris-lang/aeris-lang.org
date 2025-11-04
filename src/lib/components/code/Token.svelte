<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    color: string;
  }
  const { children, color }: Props = $props();
</script>

<span style:--color={color}>{@render children()}</span>

<style lang="scss">
  span {
    color: var(--color);
  }
</style>
