<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import SplitLayout from '../components/SplitLayout.svelte';
  import Grid from '../components/Grid.svelte';
  import Button from '../components/Button.svelte';
  import TextLink from '../components/TextLink.svelte';

  const imageSources = [
    '/images/gallery/hiking.webp',
    '/images/gallery/fields.webp',
    '/images/gallery/rockart.webp'
  ];

  const highlights = [
    {
      image: imageSources[0],
      title: 'Scenic hiking trails',
      description: 'Walk through unspoilt fynbos and follow mountain paths that open onto wide views.'
    },
    {
      image: imageSources[1],
      title: 'Mountain pools and river',
      description: 'Spend time swimming in cool pools and following the Ratel River through the farm.'
    },
    {
      image: imageSources[2],
      title: 'Birdwatching and wildlife',
      description: 'Watch eagles circle overhead and notice the wildlife that moves quietly through the land.'
    },
    {
      image: imageSources[0],
      title: 'Working farm life',
      description: 'Browse the farm shop for olive oil, honey, and essential oils, then settle in by the fire.'
    }
  ];
</script>

<section id="experience-highlights">
  <SectionWrapper as="div" tone="surface" size="wide">
    <div class="space-y-14 lg:space-y-16">
      <SplitLayout className="items-start" contentClass="space-y-5" mediaClass="max-w-lg lg:pt-1">
        <div slot="content" class="space-y-5">
          <p class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
            Farm experience
          </p>

          <h2 class="max-w-xl section-title">
            Rockhaven is a place to slow down and reconnect with nature.
          </h2>
        </div>

        <div slot="media" class="max-w-xl">
          <p class="text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            Explore walking trails through unspoilt fynbos, discover mountain pools and the Ratel River, watch eagles
            circle overhead, or spend an afternoon reading beneath ancient trees. Whether you are sharing long meals
            around the braai, spotting wildlife, or browsing the farm shop for locally produced olive oil, honey, and
            essential oils, every stay is shaped by the quiet rhythms of a working mountain farm.
          </p>
        </div>
      </SplitLayout>

      <Grid columns={4} gap="lg">
      {#each highlights as highlight}
        <article class="flex h-full flex-col">
          <div class="overflow-hidden rounded-md bg-[var(--color-surface-muted)]/35 p-5 sm:p-6">
            <img
              src={highlight.image}
              alt={highlight.title}
                class="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div class="pt-4">
              <h3 class="text-lg font-normal text-[var(--color-foreground)] sm:text-[1.3rem]">
                {highlight.title}
              </h3>

              <p class="mt-2 text-sm leading-7 text-[var(--color-muted)] sm:text-[0.95rem]">
                {highlight.description}
              </p>
            </div>
          </article>
        {/each}
      </Grid>

      <div class="flex flex-wrap items-center justify-start gap-3 sm:gap-4">
        <Button href="/accommodation" variant="secondary">Accommodation</Button>
        <TextLink
          href="https://book.nightsbridge.com/28076"
          external
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-foreground)]"
        >
          Check availability
          <span aria-hidden="true">›</span>
        </TextLink>
      </div>
    </div>
  </SectionWrapper>
</section>
