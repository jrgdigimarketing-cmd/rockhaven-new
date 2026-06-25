<script>
  // Off-canvas mobile navigation panel with a closing overlay.
  import Button from './Button.svelte';
  import Navigation from './Navigation.svelte';

  export let id = '';
  export let open = false;
  export let links = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };
</script>

{#if open}
  <div {id} class="fixed inset-0 z-40 lg:hidden">
    <button
      type="button"
      class="absolute inset-0 bg-[rgba(42,36,28,0.58)]"
      aria-label="Close menu overlay"
      on:click={() => (open = false)}
    ></button>

    <div class="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-[var(--color-surface)] p-6 shadow-2xl">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-primary-strong)]">Menu</p>
        <button type="button" class="rounded-full p-2 text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)]" on:click={() => (open = false)}>
          <span class="sr-only">Close menu</span>
          ✕
        </button>
      </div>

      <Navigation
        className="mt-8"
        orientation="vertical"
        {links}
        linkClassName="w-full"
      />

      <div class="mt-8 border-t border-slate-200 pt-6">
        <Button href={primaryCta.href} className="w-full">
          {primaryCta.label}
        </Button>
      </div>
    </div>
  </div>
{/if}
