<script lang="ts">
  import { resolve } from "$app/paths";
  import Lettermark from "$lib/components/Lettermark.svelte";
</script>

<header class="container">
  <a class="home-link" href={resolve("/")} aria-label="Go to Home">
    <Lettermark />
  </a>
  <nav class="nav-bar">
    <a href="https://github.com/aeris-lang/aeris/releases" target="_blank" rel="external noopener noreferrer">Releases</a>
    <a href="https://github.com/aeris-lang" target="_blank" rel="external noopener noreferrer">GitHub</a>
  </nav>
</header>

<style lang="scss">
  .container {
    display: flex;
    position: sticky;
    top: 0;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(4px);
    box-sizing: content-box;
    border-bottom-width: 1px;
    background-color: rgb(from var(--color-bg) r g b / 0.6);
    padding: 1rem 2rem;
    height: 1.4rem;
  }

  .home-link {
    display: block;
    flex-shrink: 0;
    height: 100%;
    color: var(--color-primary);
  }

  .nav-bar {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      transition: 300ms ease-out;
      color: var(--color-text-muted);
      font-size: 0.9rem;
      user-select: none;

      &:hover {
        color: var(--color-text);
      }
    }
  }
</style>
