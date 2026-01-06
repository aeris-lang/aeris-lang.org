<script lang="ts">
  import { resolve } from "$app/paths";
  import { previews } from "$lib/preview";
</script>

<h1>AERIS Preview</h1>
<p>
  Welcome to the AERIS Preview!<br />
  This preview showcases some of AERIS's unique features.<br />
</p>

<h2>Previews</h2>
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
