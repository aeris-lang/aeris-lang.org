<script lang="ts">
  const { children, data } = $props();
  const { canonicalHref, languageAlternates } = data;
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalHref} />
  {#each languageAlternates as { hreflang, href }}
    <link rel="alternate" {hreflang} {href} />
  {/each}
</svelte:head>

{@render children()}
