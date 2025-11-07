<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import DarkMode from "~icons/material-symbols/dark-mode";
  import LightMode from "~icons/material-symbols/light-mode";
  import Github from "~icons/mdi/github";
  import Lettermark from "./Lettermark.svelte";

  type Theme = "dark" | "light";
  let theme = $state<Theme>("dark");

  function handleLightModeButtonClick() {
    theme = "light";
  }

  function handleDarkModeButtonClick() {
    theme = "dark";
  }
</script>

<header class="header">
  <a class="home-link" href="/" aria-label={m.home_link_aria_label()}>
    <Lettermark />
  </a>
  <nav class="nav-bar">
    <a href="https://github.com/aeris-lang" aria-label={m.github_link_aria_label()}>
      <Github />
    </a>
    {#if theme === "dark"}
      <button onclick={handleLightModeButtonClick} aria-label={m.light_mode_button_aria_label()}>
        <LightMode />
      </button>
    {:else if theme === "light"}
      <button onclick={handleDarkModeButtonClick} aria-label={m.dark_mode_button_aria_label()}>
        <DarkMode />
      </button>
    {/if}
  </nav>
</header>

<style lang="scss">
  .header {
    position: sticky;
    top: 0;
    height: 1.4rem;
    box-sizing: content-box;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(from var(--color-bg) r g b / 0.6);
    backdrop-filter: blur(4px);
    border-bottom-width: 1px;
  }

  .home-link {
    flex-shrink: 0;
    height: 100%;
    display: block;
    color: var(--color-primary);
  }

  .nav-bar {
    display: flex;
    align-items: center;
    gap: 1rem;

    a,
    button {
      display: block;
      transition: 300ms ease-out;
      color: var(--color-text-muted);
      user-select: none;

      &:hover {
        color: var(--color-text);
      }
    }
  }
</style>
