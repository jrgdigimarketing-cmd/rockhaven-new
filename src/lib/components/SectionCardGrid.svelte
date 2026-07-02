<script>
  import Grid from './Grid.svelte';

  export let items = [];
  export let columns = 3;
  export let gap = 'md';
  export let as = 'div';
  export let className = '';
</script>

<Grid {as} {columns} {gap} className={className}>
  {#each items as item, index}
    <slot {item} {index} />
  {/each}
</Grid>
