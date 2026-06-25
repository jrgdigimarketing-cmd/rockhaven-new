<script>
  // Constrains page content to a consistent centered width.
  export let as = 'div';
  export let size = 'default';
  export let className = '';

  const sizes = {
    default: 'max-w-7xl',
    wide: 'max-w-[88rem]',
    narrow: 'max-w-4xl'
  };
</script>

<svelte:element
  this={as}
  class={`mx-auto w-full ${sizes[size] ?? sizes.default} px-4 sm:px-6 lg:px-8 ${className}`}
>
  <slot />
</svelte:element>
