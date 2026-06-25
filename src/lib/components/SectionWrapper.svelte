<script>
  // Shared section shell that keeps headings, spacing, and alignment consistent.
  import Container from './Container.svelte';
  import SectionHeading from './SectionHeading.svelte';

  export let as = 'section';
  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let align = 'center';
  export let tone = 'default';
  export let size = 'default';
  export let className = '';
  export let contentClass = '';

  const tones = {
    default: '',
    muted: 'bg-[var(--color-surface-muted)]/35',
    surface: 'bg-[var(--color-surface)]'
  };

  $: alignClasses = align === 'center' ? 'items-center text-center' : 'items-start text-left';
</script>

<svelte:element this={as} class={`${tones[tone] ?? tones.default} ${className}`}>
  <Container size={size} className="section-padding">
    <div class={`flex flex-col gap-8 ${alignClasses} ${contentClass}`}>
    {#if eyebrow}
        <SectionHeading
          {eyebrow}
          {title}
          {description}
          {align}
        />
      {:else if title || description}
        <SectionHeading {title} {description} {align} />
    {/if}
      <slot />
    </div>
  </Container>
</svelte:element>
