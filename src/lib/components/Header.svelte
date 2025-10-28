<script lang="ts">
  import Wordmark from "./Wordmark.svelte";
</script>

<header class="header">
  <div class="header-content">
    <a class="wordmark-container" href="/">
      <Wordmark />
    </a>
    <nav class="navigation">
      <ul>
        <li><a href="/learn">Learn</a></li>
        <li><a href="/docs">Docs</a></li>
        <li><a href="/downloads">Downloads</a></li>
        <li><a href="https://github.com/aeris-lang">Github</a></li>
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .header {
    box-sizing: content-box;
    height: 80px;
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    border-bottom: var(--color-line) solid 1px;
    background-color: color-mix(in srgb, var(--color-bg) 40%, transparent);
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .wordmark-container {
    height: calc(100% / 3);
    color: var(--color-accent);
  }

  .navigation > ul {
    display: flex;
    height: 100%;

    & > li > a {
      display: grid;
      place-items: center;
      height: 100%;
      padding: 0 20px;

      &:not(:hover) {
        color: var(--color-subtext);
      }
    }
  }
</style>
