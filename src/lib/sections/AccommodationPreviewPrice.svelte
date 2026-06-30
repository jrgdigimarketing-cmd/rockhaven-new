<script>
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';

  const accommodations = [
    {
      title: 'Lavender Cottage',
      description:
        'Sleeps up to 6 guests. Spacious three-bedroom self-catering cottage ideal for families and small groups.',
      image:
        'images/accommodation/lavender.webp',
      alt: 'Comfortable self-catering cottage at Rockhaven Guest Farm',
      price: 'From R1,980.00',
      priceLabel: 'Per night',
      bookHref: '/contact', // TODO: update if the booking destination changes.
      moreHref: '#lavender-features' // TODO: update if this feature section anchor changes.
    },
    {
      title: 'Erica Cottage',
      description:
        'Sleeps up to 4 guests. Comfortable two-bedroom cottage suited to couples and small families.',
      image:
        'images/accommodation/erica.webp',
      alt: 'Cozy cottage interior at Rockhaven Guest Farm',
      price: 'From R1,420.00',
      priceLabel: 'Per night',
      bookHref: '/contact', // TODO: update if the booking destination changes.
      moreHref: '#erica-features' // TODO: update if this feature section anchor changes.
    },
    {
      title: 'Farmhouse',
      description:
        'Suitable for larger families, groups and occasional retreats. Spacious accommodation in a secluded mountain setting.',
      image:
        'images/accommodation/farmhouse.webp',
      alt: 'Secluded farmhouse accommodation surrounded by mountains',
      price: 'From R5,000.00',
      priceLabel: 'Per night',
      bookHref: '/contact', // TODO: update if the booking destination changes.
      moreHref: '#farmhouse-features' // TODO: update if this feature section anchor changes.
    }
  ];

  const cardContentClass = 'flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5';
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

          <div class="mt-5">
            <p class="text-[1.15rem] font-semibold leading-6 tracking-tight text-[var(--color-foreground)] sm:text-[1.25rem]">
              {accommodation.price}
            </p>
            <p class="mt-0.5 text-sm leading-6 text-[var(--color-muted)]">
              {accommodation.priceLabel}
            </p>
          </div>

          <div class="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={accommodation.bookHref} className="w-full sm:w-auto">
              Book
            </Button>

            <Button href={accommodation.moreHref} variant="secondary" className="w-full sm:w-auto">
              More
            </Button>
          </div>
        </div>
      </Card>
    {/each}
  </div>
</div>
