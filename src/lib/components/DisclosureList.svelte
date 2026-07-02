<script>
  export let items = [];
  export let as = 'div';
  export let className = '';
</script>

<svelte:element this={as} class={className}>
  {#each items as item, index}
    <slot {item} {index} />
  {/each}
</svelte:element>
