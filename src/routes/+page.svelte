<script>
  import { resolve } from "$app/paths";
  import { Lettermark } from "$lib/components";
</script>

<div class="grid min-h-screen grid-rows-[auto_1fr]">
  <header class="sticky top-0 flex items-center justify-between border-b border-border bg-bg/50 px-6 py-4 backdrop-blur-xs">
    <a href={resolve("/")} aria-label="Go to home">
      <div class="size-6 text-primary">
        <Lettermark />
      </div>
    </a>
    <nav>
      <a href="https://github.com/aeris-lang">
        <div class="px-2 py-1 transition-colors duration-200 ease-in-out not-hover:text-text-muted">
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
