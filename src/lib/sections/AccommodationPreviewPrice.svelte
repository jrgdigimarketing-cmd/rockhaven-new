<script>
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Grid from '../components/Grid.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import { scrollDamp } from '$lib/actions/scroll-damp.js';

  const accommodations = [
    {
      title: 'Lavender Cottage',
      highlights: [
        'Sleeps up to 6 guests',
        'Three-bedroom self-catering cottage',
        'Two bathrooms plus an outside shower',
        'Inside fireplace and outside braai area'
      ],
      image:
        'images/accommodation/lavender.webp',
      alt: 'Comfortable self-catering cottage at Rockhaven Guest Farm',
      price: 'From R1,980.00',
      priceLabel: 'Per night',
      bookHref: 'https://book.nightsbridge.com/28076',
      bookTarget: '_blank',
      bookRel: 'noreferrer',
      moreHref: '/accommodation#lavender-features' // TODO: update if this feature section anchor changes.
    },
    {
      title: 'Erica Cottage',
      highlights: [
        'Sleeps up to 4 guests',
        'Private two-bedroom cottage',
        'Big patio in a shaded garden',
        'Views across the mountains and fields'
      ],
      image:
        'images/accommodation/erica.webp',
      alt: 'Cozy cottage interior at Rockhaven Guest Farm',
      price: 'From R1,420.00',
      priceLabel: 'Per night',
      bookHref: 'https://book.nightsbridge.com/28076',
      bookTarget: '_blank',
      bookRel: 'noreferrer',
      moreHref: '/accommodation#erica-features' // TODO: update if this feature section anchor changes.
    },
    {
      title: 'Farmhouse',
      highlights: [
        'Suitable for larger families and groups',
        'Seven-bedroom farmhouse stay',
        'Magnificent gardens and rock pool',
        'Extensive mountain views'
      ],
      image:
        'images/accommodation/farmhouse.webp',
      alt: 'Secluded farmhouse accommodation surrounded by mountains',
      price: 'From R5,000.00',
      priceLabel: 'Per night',
      bookHref: 'https://book.nightsbridge.com/28076',
      bookTarget: '_blank',
      bookRel: 'noreferrer',
      moreHref: '/accommodation#farmhouse-features' // TODO: update if this feature section anchor changes.
    }
  ];

  const cardContentClass = 'flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5';
</script>

<SectionWrapper
  eyebrow="Accommodation"
  title="Three ways to stay"
  description="Each cottage stands separate, fully equipped for cooking and living your own way."
  align="center"
>
  <Grid columns={3} gap="md" className="w-full">
    {#each accommodations as accommodation}
      <Card padding="none" className="flex h-full flex-col overflow-hidden rounded-md">
        <div
          class="scroll-damp aspect-[4/3] w-full overflow-hidden"
          use:scrollDamp={{ intensity: 4, scale: 1.03, rootMargin: '25% 0px' }}
        >
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

          <ul class="mt-3 flex-1 space-y-2 text-sm leading-6 text-gray-700 sm:text-[0.95rem]">
            {#each accommodation.highlights as highlight}
              <li class="flex items-start gap-2">
                <span
                  class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]"
                  aria-hidden="true"
                ></span>
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>

          <div class="mt-5">
            <p class="text-[1.15rem] font-semibold leading-6 tracking-tight text-[var(--color-foreground)] sm:text-[1.25rem]">
              {accommodation.price}
            </p>
            <p class="mt-0.5 text-sm leading-6 text-[var(--color-muted)]">
              {accommodation.priceLabel}
            </p>
          </div>

          <div class="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button
              href={accommodation.bookHref}
              target={accommodation.bookTarget}
              rel={accommodation.bookRel}
              className="w-full sm:w-auto"
            >
              Book
            </Button>

            <Button href={accommodation.moreHref} variant="secondary" className="w-full sm:w-auto">
              More
            </Button>
          </div>
        </div>
      </Card>
    {/each}
  </Grid>
</SectionWrapper>
