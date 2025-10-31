<script lang="ts">
  import Lettermark from "$lib/components/Lettermark.svelte";
</script>

<header class="header">
  <a class="home-link" href="/">
    <Lettermark />
  </a>
  <nav class="nav-bar">
    <a href="https://github.com/aeris-lang">GitHub</a>
  </nav>
</header>
<main>
  <section class="intro">
    <div>
      <h1>
        <span>Next Generation</span>
        <span>Programming Language</span>
        <span>Platform</span>
      </h1>
      <p>AERIS is a infrastructure helps you to build artificial language.</p>
      <p>Build your own language or use AERIS Standard, a powerful language provided by AERIS.</p>
    </div>
    <div>
      <nav class="nav">
        <a href="/standard">AERIS Standard</a>
        <a href="https://github.com/aeris-lang">GitHub</a>
      </nav>
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

      &:not(:hover) {
        color: var(--color-subtext);
      }
    }
  }

  .intro {
    padding: 10%;
    text-align: center;

    h1 {
      font-size: 4rem;
      line-height: 4.25rem;
      font-weight: 900;
      color: var(--color-accent);

      span {
        display: block;
      }
    }
  }
</style>
