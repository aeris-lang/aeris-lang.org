<script lang="ts">
  import { resolve } from "$app/paths";

  const { children } = $props();
</script>

<aside>
  <nav>
    <ul>
      <li>
        <section>
          <h1>Get Started</h1>
          <ul>
            <li>
              <a href={resolve("/docs/get-started/overview")}>Overview</a>
            </li>
            <li>
              <a href={resolve("/docs/get-started/installation")}
                >Installation</a
              >
            </li>
          </ul>
        </section>
      </li>
      <li>
        <h1>Reference</h1>
        <ul>
          <li>
            <a href={resolve("/docs/reference/overview")}>Overview</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</aside>
<main>
  {@render children()}
</main>
