<script lang="ts">
  import Svg from "$/lib/components/Svg.svelte";
  import icon from "$lib/assets/lettermark.svg?raw";
</script>

<div class="container">
  <header></header>
  <main>
    <Svg svg={icon} />
  </main>
  <footer></footer>
</div>

<style lang="scss">
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  header {
    position: sticky;
    top: 0;
    height: 5rem;
    background-color: color-mix(in hsl, var(--color-bg) 60%, transparent);
    backdrop-filter: blur(3px);
    border-bottom: 1px solid var(--color-line);
  }

  main {
  }

  footer {
  }
</style>
