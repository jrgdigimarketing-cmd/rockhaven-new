<script>
  // Generic content card for sections that need a consistent surface.
  export let as = 'article';
  export let padding = 'md';
  export let tone = 'default';
  export let className = '';

  const paddings = {
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
  class={`${tones[tone] ?? tones.default} ${paddings[padding] ?? paddings.md} ${className}`}
>
  <slot />
</svelte:element>
