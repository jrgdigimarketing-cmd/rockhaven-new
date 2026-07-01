<script>
  import Card from '../components/Card.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import SplitLayout from '../components/SplitLayout.svelte';

  export let title = 'Location preview';

  const locationFeatures = [
    {
      title: 'How long will it take?',
      description: 'Rockhaven Farm is about a 2 hour drive from Cape Town.',
      paths: [
        'M12 8.25v4.5l3 1.75',
        'M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z'
      ]
    },
    {
      title: 'Road conditions?',
      description:
        'About 20 kilometers is on gravel, but the roads are regularly gradered and ordinary sedan vehicles cope happily. Winter flooding can occasionally close the road.',
      paths: [
        'M4.5 15.75 9 10.5l3 3 4.5-6.75',
        'M4.5 18.75h15',
        'M7.5 7.5h1.5'
      ]
    },
    {
      title: 'Nearby attractions?',
      description:
        'The farm sits in the Groot Winterhoek Mountains with views across the Cederberg and Skuweberge, inside a protected conservancy landscape.',
      paths: [
        'M12 3.75l2.47 5.01 5.53.8-4 3.9.94 5.51L12 16.48l-4.94 2.59.94-5.51-4-3.9 5.53-.8L12 3.75Z'
      ]
    },
    {
      title: 'Cell reception?',
      description: 'Rockhaven is in a remote area where access and communication are fairly limited.',
      paths: [
        'M4.5 9.75a14.84 14.84 0 0 1 15 0',
        'M7.5 13.5a10.5 10.5 0 0 1 9 0',
        'M10.5 17.25a6 6 0 0 1 3 0',
        'M12 20.25h.01'
      ]
    },
    {
      title: 'Closest town?',
      description: 'The farm is situated above the town of Porterville in the Western Cape.',
      paths: [
        'M5.25 20.25v-9L12 5.25l6.75 6v9',
        'M9.75 20.25v-6h4.5v6',
        'M9 11.25h6'
      ]
    }
  ];

  const mapPanelClass = 'overflow-hidden rounded-md p-3 sm:p-4';
  const mapFrameClass =
    'relative aspect-[4/3] min-h-[22rem] w-full overflow-hidden rounded-md sm:min-h-[28rem] lg:min-h-[34rem]';
</script>

<section id="location-preview" class="bg-white py-20 sm:py-24 lg:py-28" aria-labelledby="location-preview-title">
  <SectionWrapper
    as="div"
    eyebrow="Location"
    title={title}
    description="The farm sits above Porterville in the Groot Winterhoek Mountains, about two hours from Cape Town."
    align="center"
    size="wide"
  >
    <SplitLayout className="items-start" contentClass="space-y-4" mediaClass="lg:pt-2">
      <div slot="content" class="space-y-4">
        <h2 id="location-preview-title" class="sr-only">{title}</h2>

        {#each locationFeatures as feature}
          <Card as="details" padding="none" className="group overflow-hidden rounded-md">
            <summary class="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 p-6 text-left">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary-strong)]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  class="h-5 w-5"
                >
                  {#each feature.paths as path}
                    <path stroke-linecap="round" stroke-linejoin="round" d={path}></path>
                  {/each}
                </svg>
              </div>

              <div class="min-w-0 flex-1">
                <h3 class="section-title text-[1.35rem] leading-tight sm:text-[1.6rem] lg:text-[1.9rem]">
                  {feature.title}
                </h3>
              </div>

              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)]/40 text-[var(--color-primary-strong)] transition group-open:bg-[var(--color-surface)]"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="h-5 w-5 transition-transform duration-200 group-open:rotate-180"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </summary>

            <p class="mt-4 max-w-xl text-sm leading-7 text-[var(--color-muted)] sm:text-[0.95rem]">
              {feature.description}
            </p>
          </Card>
        {/each}
      </div>

      <div slot="media">
        <Card padding="none" className={`overflow-hidden rounded-md ${mapPanelClass}`}>
          <div class={mapFrameClass}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.604157674398!2d19.063821699999995!3d-32.9254919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c32cfbf8c5d2f35%3A0x633f535f423aa97f!2sRockhaven!5e1!3m2!1sen!2sza!4v1782712386327!5m2!1sen!2sza"
              title="Map showing the accommodation location"
              class="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </Card>
      </div>
    </SplitLayout>
  </SectionWrapper>
</section>
