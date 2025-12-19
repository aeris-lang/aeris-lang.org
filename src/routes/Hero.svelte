<script lang="ts">
  import { resolve } from "$app/paths";
</script>

<section class="container">
  <div class="content">
    <div class="desc">
      <h1>
        <span>Next Generation</span>
        <span>Programming Language</span>
      </h1>
      <h2>Fast, Strict, Flexible</h2>
    </div>
    <nav>
      <a href={resolve("/")}>Learn More</a>
      <a href={resolve("/")}>Drafts</a>
    </nav>
  </div>
</section>

<style lang="scss">
  .container {
    container-type: inline-size;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4em;
    padding: 12em 0;
    font-size: clamp(0.6rem, 1cqw, 1.6rem);
  }

  .desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }

  h1 {
    display: grid;
    grid-auto-rows: 1em;
    grid-auto-flow: row;
    place-items: center;
    font-weight: 700;
    font-size: 4em;
    line-height: 1.2;

    span {
      background: linear-gradient(to top, var(--color-text-muted) 0%, var(--color-primary) 50%);
      background-clip: text;
      color: transparent;
    }
  }

  h2 {
    color: var(--color-text-muted);
    font-weight: 600;
    font-size: 2.5em;
    line-height: 1;
  }

  nav {
    display: flex;
    gap: 1em;
    font-size: 1rem;

    a {
      display: block;
      transition: 100ms ease-out;
      transition-property: background-color;
      border-radius: 0.4em;
      padding: 0.8em 1.6em;
      font-size: 1em;
      line-height: 1;
      user-select: none;
    }

    a:first-child {
      background-color: var(--color-primary);
      color: var(--color-bg);

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
