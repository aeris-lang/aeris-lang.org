<script lang="ts">
  import Lettermark from "$lib/components/Lettermark.svelte";
  import SampleCode from "$lib/components/SampleCode.svelte";
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
  <section class="intro">
    <div>
      <div class="desc">
        <h1>
          <span>{m.home_intro_h1_1()}</span>
          <span>{m.home_intro_h1_2()}</span>
        </h1>
        <h2>{m.home_intro_h2()}</h2>
      </div>
      <nav>
        <a href="/">{m.home_intro_get_started()}</a>
      </nav>
    </div>
    <div>
      <SampleCode />
    </div>
  </section>
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

  .intro {
    padding: 10%;
    display: flex;
    gap: 1rem;

    .desc {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    h1 {
      width: max-content;
      display: grid;
      grid-template-rows: repeat(2, 4rem);
      justify-content: flex-start;
      align-items: center;

      span {
        font-size: 4rem;
        font-weight: 700;
        background: linear-gradient(to top, var(--color-subtext) 0%, var(--color-accent) 50%);
        background-clip: text;
        color: transparent;
      }
    }

    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      font-weight: 600;
      color: var(--color-subtext);
    }

    nav {
      width: max-content;
      display: flex;
      gap: 1rem;

      a {
        font-size: 1rem;
        line-height: 1rem;
        padding: 0.8rem 1.5rem;
        display: block;
        border-radius: 8px;
        transition: 100ms ease-out;
        user-select: none;
      }

      a:first-child {
        color: var(--color-bg);
        background-color: var(--color-accent);

        &:hover {
          background-color: var(--color-text);
        }
      }

      a:not(:first-child) {
        border: 1px solid var(--color-line);

        &:hover {
          background-color: rgb(from var(--color-line) r g b / 0.4);
        }
      }
    }
  }
</style>
