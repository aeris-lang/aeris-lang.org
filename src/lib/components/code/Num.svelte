<script lang="ts">
  import Token from "./Token.svelte";

  interface Props {
    n: number;
  }
  const { n }: Props = $props();
</script>

<Token color="#b5cea8">{n}</Token>
