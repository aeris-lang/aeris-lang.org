<script lang="ts">
  import Lettermark from "$/lib/components/Lettermark.svelte";
  import Wordmark from "$/lib/components/Wordmark.svelte";
</script>

<header class="header">
  <div class="content">
    <a class="homepage-anchor" href="/">
      <Wordmark />
    </a>
    <nav class="nav">
      <a href="https://github.com/aeris-lang">GitHub</a>
    </nav>
  </div>
</header>
<main class="main">
  <div class="content">
    <section class="intro">
      <aside class="lettermark">
        <Lettermark />
      </aside>
      <main>
        <div class="description">
          <h1>AERIS</h1>
          <h2>
            <span>Next Generation Programming</span>
            <span>Language Platform</span>
          </h2>
        </div>
        <nav>
          <a href="/standard">AERIS Standard</a>
          <a href="https://github.com/aeris-lang">GitHub</a>
        </nav>
      </main>
    </section>
  </div>
</main>
<footer class="footer"></footer>

<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    background-color: rgb(from var(--color-bg) r g b / 0.6);
    backdrop-filter: blur(4px);
    border-bottom: 1px solid var(--color-line);
  }

  .header > .content {
    max-width: 1200px;
    box-sizing: content-box;
    height: 1.4rem;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .homepage-anchor {
    flex-shrink: 0;
    height: 100%;
    display: block;
    color: var(--color-accent);
  }

  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav > a {
    height: 100%;
    display: block;
    transition: 300ms ease-out;

    &:not(:hover) {
      color: var(--color-subtext);
    }
  }

  .main {
    flex: 1;
  }

  .main > .content {
    max-width: 1200px;
    padding: 1rem;
    margin: 0 auto;
  }

  .intro {
    height: 60vh;
    padding: 6rem 0;
    display: flex;
    color: var(--color-accent);
  }

  .lettermark {
    width: 300px;
  }

  .description {
    padding: 2rem 0;

    & > h1 {
      font-size: 8rem;
      line-height: 8rem;
      font-weight: bold;
    }

    & > h2 {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: bold;

      & > span {
        display: block;
      }
    }
  }

  .footer {
  }
</style>
