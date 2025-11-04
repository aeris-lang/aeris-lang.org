<script lang="ts">
  import Token from "./Token.svelte";

  interface Props {
    l: string;
  }
  const { l }: Props = $props();
</script>

<Token color="#569cd6">{l}</Token>
