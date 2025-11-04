<script lang="ts">
  import Fn from "$lib/components/code/Fn.svelte";
  import Id from "$lib/components/code/Id.svelte";
  import In from "$lib/components/code/In.svelte";
  import Kw from "$lib/components/code/Kw.svelte";
  import Num from "$lib/components/code/Num.svelte";
  import Str from "$lib/components/code/Str.svelte";
  import Ty from "$lib/components/code/Ty.svelte";

  type State = "pending" | "blocking" | "running";
  let processState = $state<State>("pending");
  let input = $state<string>("");
  let output = $derived.by(() => {});

  function handleRun() {
    processState = "running";
  }
</script>

<div class="container">
  <code class="code">
    <p>
      <Kw l="import" />
      <Id l="std" />.<Id l="io" />
    </p>
    <p></p>
    <p>
      <Kw l="fn" />
      <Id l="main" />{"() {"}
    </p>
    <p>
      <In /><Kw l="let" />
      <Id l="name" />{" = "}<Id l="io" />.<Fn l="read_line" />{"();"}
    </p>
    <p>
      <In /><Kw l="try" />
      {"{"}
    </p>
    <p>
      <In /><In /><Fn l="print_hello" />(<Kw l="satisfy" />
      <Id l="name" />){";"}
    </p>
    <p>
      <In />{"}"}
      <Kw l="else" />
      {"{"}
    </p>
    <p><In /><In /><Fn l="println" />{"("}<Str l={'"Name is too long!"'} />{");"}</p>
    <p><In />{"}"}</p>
    <p>{"}"}</p>
    <p></p>
    <p>
      <Kw l="fn" />
      <Fn l="print_hello" />{"("}<Id l="name" />:
      <Ty l="String" />{") {"}
    </p>
    <p>
      <In /><Kw l="premise" />
      <Id l="name" />.<Fn l="len" />{"() < "}<Num n={10} />;
    </p>
    <p>
      <In /><Fn l="println" />(<Str l={'"'} />{"{"}<Id l="name" />{"}"}<Str l={' from AERIS!"'} />);
    </p>
    <p>{"}"}</p>
  </code>
  <nav class="controls">
    {#if processState === "pending"}
      <button onclick={handleRun}>Run</button>
    {:else if processState === "blocking"}
      <button disabled>Waiting for input...</button>
    {:else if processState === "running"}
      <button disabled>Running...</button>
    {/if}
  </nav>
  <div class="console">
    <samp class="output">
      <div></div>
      <textarea class="input" rows="1" bind:value={output}></textarea>
    </samp>
  </div>
</div>

<style lang="scss">
  .container {
    border: 1px solid var(--color-line);
  }

  .code {
    padding: 1rem;
    display: block;
    background-color: #1f1f1f;

    p {
      height: 1.2rem;
      font-size: 1rem;
      line-height: 1;
      white-space: pre;
      color: #cccccc;
    }
  }

  .controls {
    display: flex;
  }

  .console {
    padding: 1rem;
    background-color: #181818;
  }

  .output {
    display: block;
    line-height: 1;
  }

  .input {
    display: inline;
    outline: none;
    resize: none;
    line-height: 1;
  }
</style>
