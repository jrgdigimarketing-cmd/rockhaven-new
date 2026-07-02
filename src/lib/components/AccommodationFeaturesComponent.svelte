<script>
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import Container from './Container.svelte';
  import Grid from './Grid.svelte';
  import Stack from './Stack.svelte';
  import { scrollDamp } from '$lib/actions/scroll-damp.js';
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
  export let features = [];

  const fallbackSlides = [
    {
      image: '/images/accommodation/erica.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the accommodation carousel'
    },
    {
      image: '/images/accommodation/lavender.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the accommodation carousel'
    },
    {
      image: '/images/accommodation/farmhouse.webp',
      label: 'Local placeholder image',
      note: 'Placeholder image for the accommodation carousel'
    }
  ];

  const featureRowClass = 'grid grid-cols-[auto_1fr] gap-4';
  const featureIconClass =
    'mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary-strong)]';
  const ctaPrimaryClass =
    'inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-[var(--color-foreground)] transition duration-200 hover:bg-[var(--color-surface-muted)]';
  const ctaSecondaryClass =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-[var(--color-foreground)] transition duration-200 hover:bg-[var(--color-surface-muted)]';
  const imagePanelClass = 'overflow-hidden rounded-md p-3 sm:p-4';
  const imageFrameClass =
    'relative h-[22rem] w-full overflow-hidden rounded-md sm:h-[28rem] lg:h-[34rem]';
  const slideCardClass =
    'max-w-[15rem] rounded-md border border-white/20 bg-black/20 px-4 py-3 text-white backdrop-blur-[2px]';

  $: detailed = Boolean(roomDescription || amenities.length || price);
  $: carouselSlides = slides.length ? slides : fallbackSlides;

  let activeSlide = 0;
  let interval;

  onMount(() => {
    if (detailed && carouselSlides.length > 1) {
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

{#if detailed}
  <section id={id} class="bg-white py-20 sm:py-24 lg:py-28">
    <Container>
      <div class="mx-auto max-w-2xl text-center">
        <p class="section-eyebrow">Accommodation</p>
        <h2 class="mt-3 text-3xl/tight font-normal text-gray-900 sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p class="body-large mx-auto mt-4 max-w-xl text-pretty">
          {roomDescription}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
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
                <p class="mt-1 text-[1.35rem] font-semibold leading-tight text-[var(--color-foreground)] sm:text-[1.5rem]">
                  {price}
                </p>
                <p class="text-sm leading-6 text-[var(--color-muted)]">{priceLabel}</p>
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
                  <div class="scroll-damp absolute inset-0" use:scrollDamp={{ intensity: 4, scale: 1.03, rootMargin: '30% 0px' }}>
                    <img
                      src={slide.image}
                      alt={slide.label}
                      class="absolute inset-0 block h-full w-full object-cover"
                    />
                  </div>

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

              {#if carouselSlides.length > 1}
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
              {/if}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  </section>
{:else}
  <section class="bg-white py-20 sm:py-24 lg:py-28">
    <Container>
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div class="order-2 lg:order-1 lg:h-[34rem]">
          <div class="flex h-full flex-col justify-between">
            {#each features as feature}
              <article class={featureRowClass}>
                <div class={featureIconClass}>
                  {#if feature.icon === 'home'}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      class="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 11.25 12 4l9 7.25"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 10.5V20h13.5v-9.5"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 20v-5.25h6V20"></path>
                    </svg>
                  {:else if feature.icon === 'trail'}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      class="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 20.25 15.75 3.75"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 8.25h6"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15.75h4.5"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 20.25h13.5"></path>
                    </svg>
                  {:else}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      class="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.75h15"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18.75V11.25l4.5-3 4.5 3v7.5"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75h4.5v9"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75v-3.75h3v3.75"></path>
                    </svg>
                  {/if}
                </div>

                <div class="pt-1">
                  <h3 class="section-title text-[1.35rem] leading-tight sm:text-[1.6rem] lg:text-[1.9rem]">
                    {feature.title}
                  </h3>
                  <p class="mt-2 max-w-xl text-sm leading-7 sm:text-[0.95rem]">
                    {feature.description}
                  </p>
                </div>
              </article>
            {/each}

            <div class="flex flex-wrap items-center gap-3 pt-6 sm:pt-8">
              <a href="/accommodation" class={ctaPrimaryClass}>
                Accommodation
              </a>

              <a href="/about" class={ctaSecondaryClass}>
                Learn &#8250;
              </a>
            </div>
          </div>
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
                  <div class="scroll-damp absolute inset-0" use:scrollDamp={{ intensity: 4, scale: 1.03, rootMargin: '30% 0px' }}>
                    <img
                      src={slide.image}
                      alt={slide.label}
                      class="absolute inset-0 block h-full w-full object-cover"
                    />
                  </div>

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

              {#if carouselSlides.length > 1}
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
              {/if}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  </section>
{/if}
