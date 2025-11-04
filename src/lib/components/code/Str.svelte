<script lang="ts">
  import Token from "./Token.svelte";

  interface Props {
    l: string;
  }
  const { l }: Props = $props();
</script>

<Token color="#ce9178">{l}</Token>
