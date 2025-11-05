<section class="container">
  <h1>Why AERIS?</h1>
  <div class="features">
    <div>
      <h2>Fast</h2>
      <p>Performs all possible operations at compile time, achieving extremely fast speed.</p>
    </div>
    <div>
      <h2>Strict</h2>
      <p>
        A powerful type system and premise system can detect many grammatical and logical errors at
        compile time.
      </p>
    </div>
    <div>
      <h2>Flexible</h2>
      <p>
        Language extensions are possible through a compiler plugin system, enabling flexible
        framework and library design.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .container {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    div {
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
