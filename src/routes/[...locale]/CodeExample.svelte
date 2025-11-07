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
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
  />
</svelte:head>

<section class="container">
  <code class="code">
    {#each lines as line, i}
      <span class="line-number">{i + 1}</span>
      <span class="line-text">
        {#each line as token}
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
    content: "";
    height: 2rem;
    display: block;
    background: linear-gradient($direction, var(--color-code-terminal-bg), transparent);
  }

  .container {
    background-color: var(--color-code-bg);

    &::before {
      @include gradient(to bottom);
    }

    &::after {
      @include gradient(to top);
    }
  }

  .code {
    width: max-content;
    padding-right: 5rem;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: auto 1fr;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    line-height: 1.5;
    user-select: none;
  }

  .line-number {
    width: 3rem;
    padding: 0 1rem;
    display: inline-block;
    text-align: right;
    color: var(--color-text-muted);
    border-right-width: 2px;
  }

  .line-text {
    padding: 0 0.5rem;
    user-select: text;
  }
</style>
