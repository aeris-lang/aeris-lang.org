<script lang="ts">
  type State = "pending" | "blocking" | "running";
  let pgState = $state<State>("pending");
  let input = $state<string>("");
  let output = $derived.by(() => {});
</script>

<div>
  <code>
    <p>
      <kw>import</kw>
      <id>std<pc>.</pc>io</id>
    </p>
    <p></p>
    <p>
      <kw>fn</kw>
      <id>main</id><pc>()</pc>
      <pc>{"{"}</pc>
    </p>
    <p>
      {"  "}<kw>let</kw>
      <id>name</id>
      =
      <id>io</id><pc>.</pc><fn>read_line</fn><pc>()</pc><pc>;</pc>
    </p>
    <p>
      {"  "}<kw>try</kw>
      <pc>{"{"}</pc>
    </p>
    <p>
      {"    "}<fn>print_hello</fn><pc>(</pc><kw>satisfy</kw>
      <id>name</id><pc>)</pc><pc>;</pc>
    </p>
    <p>
      {"  "}<pc>{"}"}</pc>
      <kw>else</kw>
      <pc>{"{"}</pc>
    </p>
    <p>{"    "}<fn>println</fn><pc>(<st>"Name is too long!"</st>)</pc><pc>;</pc></p>
    <p>{"  "}<pc>{"}"}</pc></p>
    <p><pc>{"}"}</pc></p>
    <p></p>
    <p>
      <kw>fn</kw>
      <fn>print_hello</fn><pc>(<id>name</id><pc>:</pc></pc>
      <ty>String</ty><pc>)</pc>
      <pc>{"{"}</pc>
    </p>
    <p>
      {"  "}<kw>premise</kw>
      <id>name</id><pc>.</pc><fn>len</fn><pc>()</pc>
      <pc>{"<"}</pc>
      <nu>10</nu><pc>;</pc>
    </p>
    <p>
      {"  "}<fn>println</fn><pc>(<st>"Hello <pc>{"{"}<id>name</id>{"}"}</pc> from AERIS!"</st>)</pc
      ><pc>;</pc>
    </p>
    <p><pc>{"}"}</pc></p>
  </code>
  <nav>
    <button
      >{#if pgState === "pending"}Run{:else}Running...{/if}</button
    >
  </nav>
  <svelte:element this={pgState !== "running" ? "kbd" : "samp"}>
    {output}
  </svelte:element>
</div>
<p>This code is a prototype and may change in the future.</p>

<style lang="scss">
  div {
    border: 1px solid var(--color-text);
  }

  code {
    padding: 1rem;
    display: block;
    background-color: #1f1f1f;
  }

  p {
    height: 1.2rem;
    font-size: 1rem;
    line-height: 1;
    white-space: pre;
  }

  kw {
    color: #569cd6;
  }

  id {
    color: #9cdcfe;
  }

  pc {
    color: #cccccc;
  }

  fn {
    color: #dcdcaa;
  }

  st {
    color: #ce9178;
  }

  ty {
    color: #4ec9b0;
  }

  nu {
    color: #b5cea8;
  }

  kbd,
  samp {
    min-height: 30px;
    box-sizing: content-box;
    padding: 1rem;
    display: block;
    background-color: #181818;
  }
</style>
