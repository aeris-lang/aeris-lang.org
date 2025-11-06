<script lang="ts">
  import { lines, type TokenType } from "$lib/assets/example";
  import { m } from "$lib/paraglide/messages";

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

  type State = "pending" | "running" | "blocking";

  let processState = $state<State>("pending");
  let input = $state<string>("");
  let output = $state<string>("");

  function handleRun() {
    processState = "running";
  }

  function handleStop() {
    processState = "pending";
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap"
  />
</svelte:head>

<section class="container">
  <div class="content">
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
    <div class="side-panel">
      <samp class="output">
        {#if processState === "blocking"}
          <textarea bind:value={input}></textarea>
        {:else}
          {output}
        {/if}
      </samp>
      <nav class="controls">
        {#if processState === "pending"}
          <button onclick={handleRun}>{m.code_example_run()}</button>
        {:else if processState === "running"}
          <button disabled>{m.code_example_running()}</button>
        {:else if processState === "blocking"}
          <button disabled>{m.code_example_waiting_input()}</button>
        {/if}
        <button disabled={processState === "pending"} onclick={handleStop}
          >{m.code_example_stop()}</button
        >
      </nav>
    </div>
  </div>
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

  .content {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem 10rem;

    > * {
      flex: 0 0 25rem;
    }
  }

  .code {
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
    color: var(--color-code-text-muted);
    border-right: 2px solid var(--color-code-border);
  }

  .line-text {
    padding: 0 0.5rem;
    user-select: text;
  }

  .side-panel {
    display: flex;
    flex-direction: column;
    background-color: var(--color-code-terminal-bg);
  }

  .output {
    flex: 1;
    padding: 1rem;
    display: block;
  }

  .controls {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      padding: 0.4rem 0;
      color: var(--color-code-text);

      &:disabled {
        color: var(--color-code-text-muted);
      }

      &:enabled:hover {
        outline: 1px solid var(--color-code-border);
      }
    }
  }
</style>
