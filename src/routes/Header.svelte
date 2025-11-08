<script lang="ts">
  import Lettermark from "$lib/components/Lettermark.svelte";
  import { m } from "$lib/paraglide/messages";
</script>

<header class="container">
  <a class="home-link" href="/" aria-label={m.home_link_aria_label()}>
    <Lettermark />
  </a>
  <nav class="nav-bar">
    <a
      href="https://github.com/aeris-lang/aeris/releases"
      target="_blank"
      rel="external noopener noreferrer">{m.releases()}</a
    >
    <a href="https://github.com/aeris-lang" target="_blank" rel="external noopener noreferrer"
      >{m.github()}</a
    >
  </nav>
</header>

<style lang="scss">
  .container {
    position: sticky;
    top: 0;
    height: 1.4rem;
    box-sizing: content-box;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(from var(--color-bg) r g b / 0.6);
    backdrop-filter: blur(4px);
    border-bottom-width: 1px;
  }

  .home-link {
    flex-shrink: 0;
    height: 100%;
    display: block;
    color: var(--color-primary);
  }

  .nav-bar {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      font-size: 0.9rem;
      transition: 300ms ease-out;
      color: var(--color-text-muted);
      user-select: none;

      &:hover {
        color: var(--color-text);
      }
    }
  }
</style>
