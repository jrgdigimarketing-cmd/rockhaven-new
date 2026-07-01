<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import SplitLayout from '../components/SplitLayout.svelte';
  import Grid from '../components/Grid.svelte';
  import Card from '../components/Card.svelte';

  let activeSlide = 0;

  const carouselSlides = [
    {
      image: '/images/gallery/hiking.webp',
      alt: 'Mountain hiking trail near Rockhaven',
      caption: 'A quiet landscape of trails, open sky, and changing light.'
    },
    {
      image: '/images/gallery/fields.webp',
      alt: 'Open farm fields around Rockhaven',
      caption: 'Wide farm views that shift gently with the seasons.'
    },
    {
      image: '/images/gallery/rockart.webp',
      alt: 'Rock art and mountain landscape at Rockhaven',
      caption: 'A place where history, nature, and daily farm life meet.'
    }
  ];

  const aboutStats = [
    'Family-run since 2005',
    '120-hectare working organic farm',
    '3 private self-catering stays',
    '2 hours from Cape Town',
    'Farm shop with olive oil, honey & essential oils'
  ];

  const previousSlide = () => {
    activeSlide = (activeSlide - 1 + carouselSlides.length) % carouselSlides.length;
  };

  const nextSlide = () => {
    activeSlide = (activeSlide + 1) % carouselSlides.length;
  };
</script>

<section id="about">
  <SectionWrapper eyebrow="About" align="left" size="wide">
    <SplitLayout className="items-stretch" contentClass="space-y-8" mediaClass="h-full">
      <div slot="content" class="space-y-6">
        <div class="max-w-xl space-y-4">
          <h2 class="section-title">Since 2005, Rockhaven has welcomed guests</h2>

          <p class="body-large">
            More than a place to stay, Rockhaven is a working organic farm where olives, honey, and essential oils are
            produced alongside carefully managed conservation areas.
          </p>

          <p class="text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
            Life here follows the seasons. Horses graze nearby, wildlife moves quietly through the mountains, and the
            sounds of the city are replaced by birdsong, flowing water, and open skies.
          </p>
        </div>

        <Grid columns={2} gap="sm" className="max-w-3xl">
          {#each aboutStats as stat}
            <Card as="div" padding="sm">
              <p class="text-sm font-medium leading-6 text-[var(--color-foreground)]">{stat}</p>
            </Card>
          {/each}
        </Grid>
      </div>

      <div slot="media">
        <Card padding="none" className="h-full overflow-hidden rounded-md">
          <div class="grid h-full min-h-[22rem] w-full grid-rows-[minmax(0,1fr)_auto] sm:min-h-[28rem] lg:min-h-[34rem]">
            <div class="relative min-h-0 overflow-hidden">
              {#each carouselSlides as slide, index}
                <div
                  class={`absolute inset-0 transition-all duration-500 ease-out ${
                    index === activeSlide
                      ? 'translate-x-0 opacity-100'
                      : 'pointer-events-none translate-x-4 opacity-0'
                  }`}
                  aria-hidden={index !== activeSlide}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    class="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
              {/each}

              <div
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                aria-hidden="true"
              ></div>

              <button
                type="button"
                class="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Previous image"
                on:click={previousSlide}
              >
                <span aria-hidden="true">‹</span>
              </button>

              <button
                type="button"
                class="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Next image"
                on:click={nextSlide}
              >
                <span aria-hidden="true">›</span>
              </button>

              <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {#each carouselSlides as _, index}
                  <button
                    type="button"
                    class={`h-2.5 w-2.5 rounded-full border border-white/40 transition ${
                      index === activeSlide ? 'bg-white' : 'bg-white/35'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                    on:click={() => (activeSlide = index)}
                  ></button>
                {/each}
              </div>
            </div>

            <div class="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
              <p class="text-sm leading-7 text-[var(--color-muted)] sm:text-[0.95rem]">
                {carouselSlides[activeSlide].caption}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </SplitLayout>
  </SectionWrapper>
</section>
