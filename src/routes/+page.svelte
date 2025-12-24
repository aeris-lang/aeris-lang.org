<script>
  import { resolve } from "$app/paths";
  import { Lettermark } from "$lib/components";
</script>

<div class="grid min-h-screen grid-rows-[auto_1fr]">
  <header
    class="border-border bg-bg/50 sticky top-0 flex items-center justify-between border-b px-6 py-4 backdrop-blur-xs"
  >
    <a href={resolve("/")} aria-label="Go to home">
      <div class="text-primary size-6">
        <Lettermark />
      </div>
    </a>
    <nav>
      <a href="https://github.com/aeris-lang">
        <div
          class="not-hover:text-text-muted px-2 py-1 transition-colors duration-200 ease-in-out"
        >
          <span>GitHub</span>
        </div>
      </a>
    </nav>
  </header>
  <main class="grid place-items-center">
    <div class="text-center">
      <p>AERIS in Development</p>
      <p>Coming Soon</p>
    </div>
  </main>
</div>
