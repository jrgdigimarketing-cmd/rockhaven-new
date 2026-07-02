<script>
  import Button from '../components/Button.svelte';
  import Grid from '../components/Grid.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  const items = [
    {
      src: '/images/gallery/fields.webp',
      alt: 'Open fields near the farm',
      label: 'Open fields',
      className: 'lg:col-start-1 lg:row-span-2'
    },
    {
      src: '/images/gallery/hiking.webp',
      alt: 'Walking trail in the surrounding landscape',
      label: 'Walking trails',
      className: 'lg:col-start-2 lg:row-start-1'
    },
    {
      src: '/images/gallery/flower.webp',
      alt: 'Local flower detail in the garden',
      label: 'Garden moments',
      className: 'lg:col-start-2 lg:row-start-2'
    },
    {
      src: '/images/gallery/rockart.webp',
      alt: 'Rock art detail from the surrounding area',
      label: 'Nearby discoveries',
      className: 'lg:col-start-3 lg:row-span-2'
    }
  ];
</script>

<SectionWrapper
  eyebrow="Gallery"
  title="See more of what your stay can hold"
  description="Take a closer look at the farm atmosphere, the surrounding scenery, and the easygoing activities guests can enjoy between quiet moments."
  align="center"
  tone="surface"
>
  <div class="w-full">
    <Grid columns={1} gap="md" className="md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[11rem]">
      {#each items as item}
        <figure
          class={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)] lg:h-full lg:aspect-auto ${item.className}`}
        >
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-80 transition duration-300 group-hover:opacity-100"></div>
          <img
            src={item.src}
            alt={item.alt}
            class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <figcaption class="absolute inset-x-0 bottom-0 p-4">
            <span class="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              {item.label}
            </span>
          </figcaption>
        </figure>
      {/each}
    </Grid>

    <div class="mt-10 flex justify-center">
      <Button href="/about">Learn more</Button>
    </div>
  </div>
</SectionWrapper>
