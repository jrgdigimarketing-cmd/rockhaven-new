<script>
  import Card from '../components/Card.svelte';

  const accommodations = [
    {
      title: 'Lavenda Cottage',
      description:
        'Sleeps up to 6 guests. Spacious three-bedroom self-catering cottage ideal for families and small groups.',
      image:
        'images/accommodation/lavender.webp',
      alt: 'Comfortable self-catering cottage at Rockhaven Guest Farm'
    },
    {
      title: 'Erica Cottage',
      description:
        'Sleeps up to 4 guests. Comfortable two-bedroom cottage suited to couples and small families.',
      image:
        'images/accommodation/erica.webp',
      alt: 'Cozy cottage interior at Rockhaven Guest Farm'
    },
    {
      title: 'Farmhouse',
      description:
        'Suitable for larger families, groups and occasional retreats. Spacious accommodation in a secluded mountain setting.',
      image:
        'images/accommodation/farmhouse.webp',
      alt: 'Secluded farmhouse accommodation surrounded by mountains'
    }
  ];

  const cardContentClass = 'flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5';
  const cardLinkClass =
    'mt-5 inline-flex items-center justify-center self-start rounded-md border border-[var(--color-border)] bg-transparent px-4 py-2 text-[0.78rem] font-medium tracking-[0.02em] text-[var(--color-foreground)] transition duration-200 hover:bg-[var(--color-surface-muted)]';
</script>

<div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
  <div class="mx-auto max-w-2xl text-center">

    <h2 class="mt-3 text-3xl/tight font-normal text-gray-900 sm:text-4xl lg:text-[2.75rem]">
      Three ways to stay
    </h2>

    <p class="body-large mx-auto mt-4 max-w-xl text-pretty">
      Each cottage stands separate, fully equipped for cooking and living your own way.
    </p>
  </div>

  <div class="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
    {#each accommodations as accommodation}
      <Card padding="none" className="flex h-full flex-col overflow-hidden rounded-md">
        <div class="aspect-[4/3] w-full overflow-hidden">
          <img
            alt={accommodation.alt}
            src={accommodation.image}
            class="block h-full w-full object-cover"
          >
        </div>

        <div class={cardContentClass}>
          <h3 class="text-lg font-normal text-gray-900 sm:text-[1.6rem]">
            {accommodation.title}
          </h3>

          <p class="mt-2 max-w-sm flex-1 text-sm leading-7 text-gray-700 sm:text-[0.95rem]">
            {accommodation.description}
          </p>

          <a
            href="/accommodation"
            class={cardLinkClass}
          >
            View Details
          </a>
        </div>
      </Card>
    {/each}
  </div>
</div>
