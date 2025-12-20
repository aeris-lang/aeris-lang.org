<script lang="ts">
</script>

{#snippet feature({ title, description }: { title: string; description: string })}
  <article class="grid w-80 gap-4">
    <h1 class="text-2xl leading-none font-medium">{title}</h1>
    <p>{description}</p>
  </article>
{/snippet}

<section class="px-12">
  <h1 class="m-8 text-center text-3xl leading-none font-semibold">Why AERIS?</h1>
  <div class="m-8 flex flex-wrap justify-center gap-8">
    {@render feature({
      title: "Fast",
      description: "Performs all possible operations at compile time, achieving extremely fast speed.",
    })}
    {@render feature({
      title: "Strict",
      description: "A powerful type system and premise system can detect many grammatical and logical errors at compile time.",
    })}
    {@render feature({
      title: "Flexible",
      description: "Language extensions are possible through a compiler plugin system, enabling flexible framework and library design.",
    })}
  </div>
</section>
