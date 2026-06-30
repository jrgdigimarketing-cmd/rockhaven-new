<script>
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Grid from '../components/Grid.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import Stack from '../components/Stack.svelte';
  import { onDestroy, onMount } from 'svelte';

  export let id = '';
  export let title = '';
  export let roomDescription = '';
  export let amenities = [];
  export let maxGuests = '';
  export let price = '';
  export let priceLabel = 'Per night';
  export let bookHref = '/contact';
  export let bookLabel = 'Book';
  export let slides = [];

  const fallbackSlides = [
    {
      image: '/images/accommodation/erica.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the carousel'
    },
    {
      image: '/images/accommodation/lavender.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the carousel'
    },
    {
      image: '/images/accommodation/farmhouse.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the carousel'
    }
  ];

  const imagePanelClass = 'overflow-hidden rounded-md p-3 sm:p-4';
  const imageFrameClass =
    'relative aspect-[4/3] min-h-[22rem] w-full overflow-hidden rounded-md sm:min-h-[28rem] lg:min-h-[34rem]';
  const slideCardClass =
    'max-w-[15rem] rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white backdrop-blur-[2px]';

  $: carouselSlides = slides.length ? slides : fallbackSlides;

  let activeSlide = 0;
  let interval;

  onMount(() => {
    if (carouselSlides.length > 1) {
      interval = setInterval(() => {
        activeSlide = (activeSlide + 1) % carouselSlides.length;
      }, 5000);
    }
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  const previousSlide = () => {
    activeSlide = (activeSlide - 1 + carouselSlides.length) % carouselSlides.length;
  };

  const nextSlide = () => {
    activeSlide = (activeSlide + 1) % carouselSlides.length;
  };
</script>

<section id={id} class="bg-white">
  <SectionWrapper title={title} align="center">
    <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <div class="order-2 lg:order-1">
        <Stack gap="lg">
          <div>
            <p class="section-eyebrow">Room Description</p>
            <p class="body-large mt-3">
              {roomDescription}
            </p>
          </div>

          <div>
            <p class="section-eyebrow">Amenities</p>
            <Grid as="ul" columns={2} gap="sm" className="mt-4">
              {#each amenities as amenity}
                <li class="flex items-start gap-3 text-sm leading-6 text-[var(--color-foreground)]">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"></span>
                  <span>{amenity}</span>
                </li>
              {/each}
            </Grid>
          </div>

          <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
            {#if maxGuests}
              <div>
                <p class="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Max Guests
                </p>
                <p class="mt-1 text-lg font-semibold leading-6 text-[var(--color-foreground)]">
                  {maxGuests}
                </p>
              </div>
            {/if}

            <div>
              <p class="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                From
              </p>
              <div class="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p class="text-[1.4rem] font-semibold leading-tight text-[var(--color-foreground)] sm:text-[1.55rem]">
                  {price}
                </p>
                <p class="text-sm leading-6 text-[var(--color-muted)]">{priceLabel}</p>
              </div>
            </div>

            <Button href={bookHref} className="w-full sm:w-auto">
              {bookLabel}
            </Button>
          </div>
        </Stack>
      </div>

      <div class="order-1 lg:order-2">
        <Card padding="none" className={imagePanelClass}>
          <div class={imageFrameClass}>
            {#each carouselSlides as slide, index}
              <div
                class={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === activeSlide
                    ? 'translate-x-0 opacity-100'
                    : 'pointer-events-none translate-x-6 opacity-0'
                }`}
                aria-hidden={index !== activeSlide}
              >
                <img
                  src={slide.image}
                  alt={slide.label}
                  class="absolute inset-0 h-full w-full object-cover"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent"></div>

                <div class="absolute inset-0 flex items-end p-5 sm:p-6">
                  <div class={slideCardClass}>
                    <p class="text-[0.68rem] uppercase tracking-[0.24em] text-white/75">
                      {slide.label}
                    </p>
                    <p class="mt-1 text-sm leading-6 text-white/85">
                      {slide.note}
                    </p>
                  </div>
                </div>
              </div>
            {/each}

            <button
              type="button"
              on:click={previousSlide}
              class="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30"
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              on:click={nextSlide}
              class="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30"
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>

            <div class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {#each carouselSlides as _, index}
                <button
                  type="button"
                  class={`h-2.5 w-2.5 rounded-full border border-white/40 transition ${
                    index === activeSlide ? 'bg-white' : 'bg-white/35'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  on:click={() => (activeSlide = index)}
                ></button>
              {/each}
            </div>
          </div>
        </Card>
      </div>
    </div>
  </SectionWrapper>
</section>
