<!--
  Layout: centered eyebrow and heading above a three-column guest review grid.
  Source reviews: Tripadvisor Rockhaven Guest Farm listing.
-->
<script>
  import Card from '../components/Card.svelte';

  export let company = {};

  const reviews = [
    {
      name: 'Allan F',
      meta: 'Cape Town, South Africa · Apr 2026',
      initials: 'AF',
      quote:
        'A wonderful mountain break with everything you need, great walks, incredible scenery, and a truly pet-friendly stay.'
    },
    {
      name: 'katjaabbott',
      meta: 'Dec 2025',
      initials: 'KA',
      quote:
        'Quiet, peaceful, and relaxed, with a memorable hike to the beautiful mountain pools.'
    },
    {
      name: 'Brigitte van Tonder',
      meta: 'Aug 2025',
      initials: 'Bv',
      quote:
        'A comfortable family weekend in a well-equipped cottage, with stunning scenery, hikes, and plenty of character.'
    }
  ];
</script>

<section
  id="why-guests-return"
  aria-labelledby="guest-voices-heading"
  class="py-20 sm:py-24 lg:py-28"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <header class="mx-auto max-w-2xl text-center">
      <p class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
        Guest voices
      </p>

      <h2
        id="guest-voices-heading"
        class="mt-3 font-[var(--font-display)] text-3xl leading-[1.05] tracking-[-0.03em] text-[var(--color-foreground)] sm:text-4xl lg:text-[2.75rem]"
      >
        Guest voices
      </h2>

      <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
        What visitors say about their time here.
      </p>
    </header>

    <ul class="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-3 lg:gap-12" role="list">
      {#each reviews as review}
        <li class="mx-auto flex max-w-md flex-col items-center text-center">
          <Card as="article" padding="md" className="w-full rounded-md text-center">
            <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-foreground)] opacity-80">
              Tripadvisor
            </p>

            <blockquote
              class="mt-4 font-[var(--font-display)] text-2xl leading-[1.2] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[1.55rem]"
            >
              “{review.quote}”
            </blockquote>

            <div class="mt-6 flex items-center justify-center gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-surface-muted)] text-sm font-medium text-[var(--color-primary-strong)]"
                aria-hidden="true"
              >
                {review.initials}
              </div>

              <div class="text-left">
                <p class="text-sm font-medium text-[var(--color-foreground)]">{review.name}</p>
                <p class="text-xs text-[var(--color-muted)]">{review.meta}</p>
              </div>
            </div>
          </Card>
        </li>
      {/each}
    </ul>
  </div>
</section>
