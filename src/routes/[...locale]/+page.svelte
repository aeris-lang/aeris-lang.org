<script lang="ts">
  import Intro from "$lib/components/Intro.svelte";
  import Lettermark from "$lib/components/Lettermark.svelte";
  import { m } from "$lib/paraglide/messages";
</script>

<header class="header">
  <a class="home-link" href="/" aria-label={m.home_link_aria_label()}>
    <Lettermark />
  </a>
  <nav class="nav-bar">
    <a href="https://github.com/aeris-lang/aeris">{m.github()}</a>
  </nav>
</header>
<main>
  <Intro />
  <section class="about">
    <h1>Why AERIS?</h1>
    <div>
      <div>
        <h2>Fast</h2>
        <p></p>
      </div>
      <div>
        <h2>Strict</h2>
        <p></p>
      </div>
      <div>
        <h2>Flexible</h2>
        <p></p>
      </div>
    </div>
  </section>
</main>
<footer class="footer"></footer>

<style lang="scss">
  .header {
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
    border-bottom: 1px solid var(--color-line);
  }

  .home-link {
    flex-shrink: 0;
    height: 100%;
    display: block;
    color: var(--color-accent);
  }

  .nav-bar {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      height: 100%;
      display: block;
      transition: 300ms ease-out;
      color: var(--color-subtext);
      user-select: none;

      &:hover {
        color: var(--color-accent);
      }
    }
  }
</style>
