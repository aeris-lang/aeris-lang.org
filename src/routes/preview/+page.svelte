<script lang="ts">
  import { resolve } from "$app/paths";
  import { previews } from "$lib/preview";
</script>

<h1>AERIS Preview</h1>
<p>Welcome to the AERIS Preview!</p>
<p>
  This preview showcases the unique features of AERIS. To get the most out of
  this guide, familiarity with general programming concepts is recommended.
</p>

<nav>
  <ul>
    {#each previews as { name, href }, i (i)}
      <li>
        <a href={resolve(...href)}>
          <div>
            <span>{name}</span>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</nav>
