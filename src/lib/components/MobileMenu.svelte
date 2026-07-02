<script>
  // Off-canvas mobile navigation panel with a closing overlay.
  import { onDestroy, tick } from 'svelte';
  import Button from './Button.svelte';
  import Navigation from './Navigation.svelte';
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let id = '';
  export let open = false;
  export let links = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  let drawer;
  let closeButton;
  let bodyScrollLock = '';
  let focusTrapActive = false;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    open = false;
  };

  const closeMenu = () => {
    open = false;
  };

  const getFocusableElements = () =>
    drawer
      ? Array.from(
          drawer.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => !element.hasAttribute('disabled'))
      : [];

  const focusFirstElement = async () => {
    await tick();

    closeButton?.focus();
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  $: if (typeof document !== 'undefined') {
    if (open && !focusTrapActive) {
      bodyScrollLock = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      focusTrapActive = true;
      focusFirstElement();
    } else if (!open && focusTrapActive) {
      document.body.style.overflow = bodyScrollLock;
      bodyScrollLock = '';
      focusTrapActive = false;
    }
  }

  onDestroy(() => {
    if (typeof document !== 'undefined' && focusTrapActive) {
      document.body.style.overflow = bodyScrollLock;
    }
  });
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
      bind:this={drawer}
      class="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-[var(--color-surface)] p-6 shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      tabindex="-1"
      on:keydown={handleKeydown}
      transition:fly={{ x: 18, duration: 260, easing: cubicOut }}
    >
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-primary-strong)]">Menu</p>
        <button
          bind:this={closeButton}
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
