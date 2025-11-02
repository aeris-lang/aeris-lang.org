<script lang="ts">
  import { page } from "$app/state";
  import { localizeHref } from "$lib/paraglide/runtime";
</script>

<svelte:head>
  <link rel="canonical" href={localizeHref(page.url.href)} />
</svelte:head>

<slot />
