<script>
  import Button from '../components/Button.svelte';
  import Grid from '../components/Grid.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  const items = [
    {
      src: '/images/gallery/fields.webp',
      alt: 'Open fields near the farm',
      label: 'Open fields'
    },
    {
      src: '/images/gallery/hiking.webp',
      alt: 'Walking trail in the surrounding landscape',
      label: 'Walking trails'
    },
    {
      src: '/images/gallery/flower.webp',
      alt: 'Local flower detail in the garden',
      label: 'Garden moments'
    },
    {
      src: '/images/gallery/rockart.webp',
      alt: 'Rock art detail from the surrounding area',
      label: 'Nearby discoveries'
    }
  ];
</script>

<SectionWrapper
  eyebrow="Gallery"
  title="See more of what your stay can hold"
  description="Take a closer look at the farm atmosphere, the surrounding scenery, and the easygoing activities guests can enjoy between quiet moments."
  align="center"
  tone="muted"
>
  <div class="w-full">
    <Grid columns={2} gap="md" className="md:grid-cols-4">
      {#each items as item}
        <figure class="overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]">
          <div class="aspect-[4/3]">
            <img src={item.src} alt={item.alt} class="h-full w-full object-cover" />
          </div>
          <figcaption class="px-4 py-3 text-sm font-medium text-[var(--color-foreground)]">
            {item.label}
          </figcaption>
        </figure>
      {/each}
    </Grid>

    <div class="mt-10 flex justify-center">
      <Button href="/about">Learn more</Button>
    </div>
  </div>
</SectionWrapper>
