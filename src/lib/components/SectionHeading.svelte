<script>
  import Eyebrow from './Eyebrow.svelte';

  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let align = 'center';
  export let titleAs = 'h2';
  export let descriptionAs = 'p';
  export let className = '';

  $: alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';
</script>

<div class={`flex flex-col gap-4 ${alignClasses} ${className}`}>
  {#if eyebrow}
    <Eyebrow>{eyebrow}</Eyebrow>
  {/if}

  {#if title}
    <svelte:element this={titleAs} class={`section-title ${align === 'center' ? 'mx-auto' : ''}`}>
      {title}
    </svelte:element>
  {/if}

  {#if description}
    <svelte:element
      this={descriptionAs}
      class={`body-large text-measure ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {description}
    </svelte:element>
  {/if}

  <slot />
</div>
