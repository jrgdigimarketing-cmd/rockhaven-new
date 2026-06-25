<script>
  export let as = 'div';
  export let gap = 'md';
  export let align = 'start';
  export let className = '';

  const gaps = {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const aligns = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };
</script>

<svelte:element
  this={as}
  class={`flex flex-col ${gaps[gap] ?? gaps.md} ${aligns[align] ?? aligns.start} ${className}`}
>
  <slot />
</svelte:element>
