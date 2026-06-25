<script>
  export let as = 'div';
  export let reverse = false;
  export let className = '';
  export let contentClass = '';
  export let mediaClass = '';

  $: layoutOrder = reverse ? 'lg:[&>.split-content]:order-2 lg:[&>.split-media]:order-1' : '';
</script>

<svelte:element
  this={as}
  class={`grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 ${layoutOrder} ${className}`}
>
  <div class={`split-content ${contentClass}`}>
    <slot name="content" />
  </div>

  <div class={`split-media ${mediaClass}`}>
    <slot name="media" />
  </div>
</svelte:element>
