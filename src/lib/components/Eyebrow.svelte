<script>
  export let as = 'p';
  export let className = '';
</script>

<svelte:element this={as} class={`section-eyebrow ${className}`}>
  <slot />
</svelte:element>
