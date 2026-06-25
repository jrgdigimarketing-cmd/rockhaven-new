<script>
  const experiences = [
    {
      title: 'Mountain views that hold you still',
      description:
        'The Winterhoek Mountains rise sharp and clear, visible from every cottage, changing light with each hour.',
      icon: 'home'
    },
    {
      title: 'Hiking trails through wild country',
      description:
        'Miles of paths wind through fynbos and forest, each one revealing something of the land on its own terms.',
      icon: 'trail'
    },
    {
      title: 'Life on a working farm',
      description:
        'Stay among the animals and crops, learn how the land sustains itself, and understand the rhythm of real work.',
      icon: 'farm'
    }
  ];

  const carouselSlides = [
    {
      label: 'Mountain view',
      note: 'Open terrain and shifting light',
      accent: 'from-[#7a5b35] via-[#c8ad7d] to-[#6b6a3d]'
    },
    {
      label: 'Trail edge',
      note: 'Paths, shadow, and scrubland',
      accent: 'from-[#4f4635] via-[#9d7a4d] to-[#7b8a54]'
    },
    {
      label: 'Farm landscape',
      note: 'A quiet working mountain farm',
      accent: 'from-[#5b4a31] via-[#b48a4d] to-[#7b6745]'
    }
  ];

  let activeSlide = 0;

  const previousSlide = () => {
    activeSlide = (activeSlide - 1 + carouselSlides.length) % carouselSlides.length;
  };

  const nextSlide = () => {
    activeSlide = (activeSlide + 1) % carouselSlides.length;
  };
</script>

<section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
  <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
    <div class="order-2 lg:order-1">
      <div class="space-y-8">
        {#each experiences as experience}
          <article class="grid grid-cols-[auto_1fr] gap-4">
            <div class="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary-strong)]">
              {#if experience.icon === 'home'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 11.25 12 4l9 7.25"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 10.5V20h13.5v-9.5"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 20v-5.25h6V20"></path>
                </svg>
              {:else if experience.icon === 'trail'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 20.25 15.75 3.75"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 8.25h6"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15.75h4.5"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 20.25h13.5"></path>
                </svg>
              {:else}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 18.75h15"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18.75V11.25l4.5-3 4.5 3v7.5"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75h4.5v9"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75v-3.75h3v3.75"></path>
                </svg>
              {/if}
            </div>

            <div class="pt-1">
              <h3 class="section-title text-[1.35rem] leading-tight sm:text-[1.6rem] lg:text-[1.9rem]">
                {experience.title}
              </h3>
              <p class="mt-2 max-w-xl text-sm leading-7 sm:text-[0.95rem]">
                {experience.description}
              </p>
            </div>
          </article>
        {/each}

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/accomodation"
            class="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-[var(--color-foreground)] transition duration-200 hover:bg-[var(--color-surface-muted)]"
          >
            Accommodation
          </a>
          <a
            href="/about"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-[var(--color-foreground)] transition duration-200 hover:bg-[var(--color-surface-muted)]"
          >
            Learn &#8250;
          </a>
        </div>
      </div>
    </div>

    <div class="order-1 lg:order-2">
      <div class="surface-panel overflow-hidden p-3 sm:p-4">
        <div class="relative aspect-[4/3] w-full overflow-hidden rounded-[1.15rem]">
          {#each carouselSlides as slide, index}
            <div
              class={`absolute inset-0 transition-all duration-700 ease-out ${
                index === activeSlide ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-6 opacity-0'
              }`}
              aria-hidden={index !== activeSlide}
            >
              <div class={`absolute inset-0 bg-gradient-to-br ${slide.accent}`}></div>
              <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.18))]"></div>
              <div class="absolute inset-0 flex items-end p-5 sm:p-6">
                <div class="max-w-[15rem] rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-white backdrop-blur-[2px]">
                  <p class="text-[0.68rem] uppercase tracking-[0.24em] text-white/75">Placeholder</p>
                  <p class="mt-1 text-lg font-normal leading-tight">{slide.label}</p>
                  <p class="mt-1 text-sm leading-6 text-white/85">{slide.note}</p>
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
      </div>
    </div>
  </div>
</section>
