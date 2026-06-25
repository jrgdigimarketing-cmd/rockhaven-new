<script>
  export let as = 'span';
  export let tone = 'default';
  export let className = '';

  const tones = {
    default: 'border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-foreground)]',
    olive: 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[#f7f2e8]',
    outline: 'border-[var(--color-border)] bg-transparent text-[var(--color-foreground)]'
  };
</script>

<svelte:element
  this={as}
  class={`inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.22em] ${tones[tone]} ${className}`}
>
  <slot />
</svelte:element>
