<script>
  // Off-canvas mobile navigation panel with a closing overlay.
  import Button from './Button.svelte';
  import Navigation from './Navigation.svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let id = '';
  export let open = false;
  export let links = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    open = false;
  };

  const closeMenu = () => {
    open = false;
  };
</script>

{#if open}
  <div {id} class="fixed inset-0 z-40 lg:hidden">
    <button
      type="button"
      class="absolute inset-0 bg-[rgba(42,36,28,0.58)]"
      aria-label="Close menu overlay"
      on:click={() => (open = false)}
      transition:fade={{ duration: 220 }}
    ></button>

    <div
      class="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-[var(--color-surface)] p-6 shadow-2xl"
      transition:fly={{ x: 18, duration: 260, easing: cubicOut }}
    >
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-primary-strong)]">Menu</p>
        <button
          type="button"
          class="rounded-full p-2 text-[var(--color-muted)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)] motion-reduce:transform-none motion-reduce:transition-none"
          on:click={() => (open = false)}
        >
          <span class="sr-only">Close menu</span>
          ✕
        </button>
      </div>

      <Navigation
        className="mt-8"
        orientation="vertical"
        {links}
        linkClassName="w-full"
        onNavigate={closeMenu}
      />

      <div class="mt-8 border-t border-slate-200 pt-6">
        <Button href={primaryCta.href} className="w-full" onClick={closeMenu}>
          {primaryCta.label}
        </Button>
      </div>
    </div>
  </div>

  <div class="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pb-[env(safe-area-inset-bottom)] lg:hidden">
    <button
      type="button"
      class="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] shadow-lg transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)] motion-reduce:transform-none motion-reduce:transition-none"
      aria-label="Back to top"
      on:click={scrollToTop}
    >
      <span aria-hidden="true" class="text-lg leading-none">↑</span>
    </button>
  </div>
{/if}
