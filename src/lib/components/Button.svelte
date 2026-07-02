<script>
  export let href = '';
  export let target = '';
  export let rel = '';
  export let variant = 'primary';
  export let type = 'button';
  export let className = '';
  export let onClick = () => {};

  const styles = {
    primary:
      'border border-[var(--color-primary)] bg-[var(--color-primary)] text-[#f7f2e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-strong)] hover:border-[var(--color-primary-strong)] focus-visible:outline-[var(--color-primary)]',
    secondary:
      'border border-[var(--color-border)] bg-transparent text-[var(--color-foreground)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)] focus-visible:outline-[var(--color-primary)]',
    ghost:
      'border border-transparent bg-transparent text-[var(--color-foreground)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-muted)] focus-visible:outline-[var(--color-primary)]'
  };
</script>

{#if href}
  <a
    href={href}
    target={target || undefined}
    rel={rel || undefined}
    class={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] transition duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    on:click={onClick}
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    class={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] transition duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    on:click={onClick}
  >
    <slot />
  </button>
{/if}
