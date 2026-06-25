<script>
  export let as = 'div';
  export let columns = 3;
  export let gap = 'lg';
  export let className = '';

  const gaps = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  const columnsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };
</script>

<svelte:element
  this={as}
  class={`grid ${columnsMap[columns] ?? columnsMap[3]} ${gaps[gap] ?? gaps.lg} ${className}`}
>
  <slot />
</svelte:element>
