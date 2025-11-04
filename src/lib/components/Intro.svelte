<script lang="ts">
  import { m } from "$lib/paraglide/messages";
</script>

<section class="container">
  <div class="content">
    <div class="desc">
      <h1>
        <span>{m.home_intro_h1_1()}</span>
        <span>{m.home_intro_h1_2()}</span>
      </h1>
      <h2>{m.home_intro_h2()}</h2>
    </div>
    <nav>
      <a href="/">{m.home_intro_get_started()}</a>
      <a href="/">Learn AERIS</a>
    </nav>
  </div>
</section>

<style lang="scss">
  .container {
    container-type: inline-size;
  }

  .content {
    font-size: max(1cqw, 0.6rem);
    padding: 10em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }

  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  h1 {
    font-size: 4em;
    line-height: 1.2;
    font-weight: 700;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: 1em;
    place-items: center;

    span {
      background: linear-gradient(to top, var(--color-subtext) 0%, var(--color-accent) 50%);
      background-clip: text;
      color: transparent;
    }
  }

  h2 {
    font-size: 2.5em;
    line-height: 1;
    font-weight: 600;
    color: var(--color-subtext);
  }

  nav {
    display: flex;
    gap: 1em;

    a {
      font-size: 0.8em;
      line-height: 1;
      padding: 0.8em 1.4em;
      display: block;
      border-radius: 0.4em;
      transition: 100ms ease-out;
      transition-property: background-color;
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
</style>
