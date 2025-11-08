<section class="container">
  <h1>Why AERIS?</h1>
  <div class="features">
    <article>
      <h2>Fast</h2>
      <p>Performs all possible operations at compile time, achieving extremely fast speed.</p>
    </article>
    <article>
      <h2>Strict</h2>
      <p>
        A powerful type system and premise system can detect many grammatical and logical errors at
        compile time.
      </p>
    </article>
    <article>
      <h2>Flexible</h2>
      <p>
        Language extensions are possible through a compiler plugin system, enabling flexible
        framework and library design.
      </p>
    </article>
  </div>
</section>

<style lang="scss">
  .container {
    padding: 3rem 0;
  }

  h1 {
    margin: 2rem;
    text-align: center;
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
  }

  .features {
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    article {
      flex: 0 0 auto;
      width: 20rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      h2 {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 500;
      }
    }
  }
</style>
