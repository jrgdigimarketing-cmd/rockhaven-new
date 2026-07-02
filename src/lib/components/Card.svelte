<script>
  // Generic content card for sections that need a consistent surface.
  export let as = 'article';
  export let padding = 'md';
  export let tone = 'default';
  export let className = '';

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const tones = {
    default: 'surface-card',
    muted: 'surface-card bg-[var(--color-surface-muted)]/35',
    transparent: 'border border-[var(--color-border)] bg-transparent shadow-none'
  };
</script>

<svelte:element
  this={as}
  class={`${tones[tone] ?? tones.default} ${paddings[padding] ?? paddings.md} transition-[transform,box-shadow,background-color,border-color,opacity] duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none hover:-translate-y-0.5 hover:shadow-[0_26px_72px_rgba(53,41,28,0.12)] ${className}`}
>
  <slot />
</svelte:element>
