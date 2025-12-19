<script lang="ts">
  import { lines, type TokenType } from "$lib/assets/example";

  const colorMap: Record<TokenType, string> = {
    comment: "#6A9955",
    keyword: "#569CD6",
    identifier: "	#9CDCFE",
    function: "#DCDCAA",
    type: "#4EC9B0",
    operator: "#D4D4D4",
    string: "#CE9178",
    number: "#B5CEA8",
  };
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" />
</svelte:head>

<section class="container bg-code-bg">
  <code class="gird-cols-[auto_1fr] mx-auto my-4 grid w-max pr-20 font-mono leading-normal select-none">
    {#each lines as line, i (i)}
      <span class="inline-block w-12 border-r-2 px-4 text-right text-muted">{i + 1}</span>
      <span class="px-2 select-text">
        {#each line as token, i (i)}
          {#if token === " "}
            <span>&nbsp;</span>
          {:else if token === "\t"}
            <span>&nbsp;&nbsp;</span>
          {:else}
            <span style:color={colorMap[token.type]}>{token.text}</span>
          {/if}
        {/each}
        <br />
      </span>
    {/each}
  </code>
</section>

<style lang="scss">
  @mixin gradient($direction) {
    display: block;
    background: linear-gradient($direction, var(--color-code-terminal-bg), transparent);
    height: 2rem;
    content: "";
  }

  .container {
    &::before {
      @include gradient(to bottom);
    }

    &::after {
      @include gradient(to top);
    }
  }
</style>
