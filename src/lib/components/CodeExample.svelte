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

  type State = "pending" | "blocking" | "running";

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
          <button onclick={handleRun}>Run</button>
        {:else if processState === "blocking"}
          <button disabled>Waiting for input...</button>
        {:else if processState === "running"}
          <button disabled>Running...</button>
        {/if}
        <button disabled={processState === "pending"} onclick={handleStop}>Stop</button>
      </nav>
    </div>
  </div>
</section>

<style lang="scss">
  @mixin gradient($direction) {
    content: "";
    height: 2rem;
    display: block;
    background: linear-gradient(
      $direction,
      rgb(from var(--color-bg) r g b / 0.3),
      transparent 100%
    );
  }

  .container {
    background-color: #1f1f1f;
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
    color: var(--color-text);
    user-select: none;
  }

  .line-number {
    width: 3rem;
    padding: 0 1rem;
    display: inline-block;
    text-align: right;
    color: var(--color-subtext);
    border-right: 2px solid var(--color-line);
  }

  .line-text {
    padding: 0 0.5rem;
    user-select: text;
  }

  .side-panel {
    display: flex;
    flex-direction: column;
    background-color: #181818;
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
      color: #ffffff;

      &:disabled {
        color: #ffffff7f;
      }

      &:enabled:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
</style>
