<script lang="ts">
  import { m } from "$lib/paraglide/messages";
</script>

<section class="container">
  <div class="content">
    <div class="desc">
      <h1>
        <span>{m.intro_h1_1()}</span>
        <span>{m.intro_h1_2()}</span>
      </h1>
      <h2>{m.intro_h2()}</h2>
    </div>
    <nav>
      <a href="/">{m.intro_get_started()}</a>
      <a href="/">Learn AERIS</a>
    </nav>
  </div>
</section>

<style lang="scss">
  .container {
    container-type: inline-size;
  }

  .content {
    font-size: clamp(0.6rem, 1cqw, 1.6rem);
    padding: 12em 0;
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
      background: linear-gradient(to top, var(--color-text-muted) 0%, var(--color-primary) 50%);
      background-clip: text;
      color: transparent;
    }
  }

  h2 {
    font-size: 2.5em;
    line-height: 1;
    font-weight: 600;
    color: var(--color-text-muted);
  }

  nav {
    font-size: 1rem;
    display: flex;
    gap: 1em;

    a {
      font-size: 1em;
      line-height: 1;
      padding: 0.8em 1.6em;
      display: block;
      border-radius: 0.4em;
      transition: 100ms ease-out;
      transition-property: background-color;
      user-select: none;
    }

    a:first-child {
      color: var(--color-bg);
      background-color: var(--color-primary);

      &:hover {
        background-color: rgb(from var(--color-primary) r g b / 0.9);
      }
    }

    a:not(:first-child) {
      border-width: 1px;

      &:hover {
        background-color: rgb(from var(--color-primary) r g b / 0.1);
      }
    }
  }
</style>
