<script lang="ts">
  import Footer from "$/lib/components/Footer.svelte";
  import Header from "$/lib/components/Header.svelte";
  import Lettermark from "$/lib/components/Lettermark.svelte";
</script>

<Header />
<section class="intro">
  <div class="lettermark">
    <Lettermark />
  </div>
  <div class="intro-content">
    <div class="intro-header">
      <h1>AERIS</h1>
      <h2>Next Generation Programming Language</h2>
    </div>
    <nav class="intro-nav">
      <a class="getstarted-btn" href="/learn">Get Started</a>
      <a class="download-btn" href="/downloads">Download</a>
    </nav>
  </div>
</section>
<Footer />

<style lang="scss">
  .intro {
    display: flex;
    align-items: center;
    padding: 200px;
    gap: 40px;
    background: radial-gradient(ellipse closest-side, #101010, transparent);
  }

  .lettermark {
    width: 260px;
    color: var(--color-accent);
  }

  .intro-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    font-size: 24px;
    color: var(--color-text);
  }

  .intro-header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 64px;
      font-weight: 900;
      line-height: 1em;
      color: var(--color-accent);
    }

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1em;
      color: var(--color-subtext);
    }
  }

  .intro-nav {
    display: flex;
    gap: 30px;
    height: 50px;

    & > a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 30px;
      font-size: 18px;
      border-radius: 5px;
    }
  }

  .getstarted-btn {
    background-color: var(--color-accent);
    color: var(--color-bg);

    &:hover {
      filter: brightness(0.8);
    }
  }

  .download-btn {
    outline: var(--color-line) solid 1px;

    &:hover {
      filter: brightness(1.2);
    }
  }
</style>
