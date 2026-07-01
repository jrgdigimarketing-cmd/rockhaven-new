<script>
  import Card from '../components/Card.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  export let title = 'How to get there?';

  const locationPoints = [
    'Approximately 2 hours from Cape Town',
    'Located above Porterville in the Groot Winterhoek Mountains',
    'Accessible via a maintained gravel road',
    'Limited mobile reception',
    'Surrounded by protected mountain landscapes and fynbos'
  ];

  const introImage = '/images/gallery/rockart.webp';
  const mapFrameClass = 'relative aspect-[4/3] min-h-[22rem] w-full overflow-hidden sm:min-h-[28rem] lg:min-h-[34rem]';
</script>

<section id="location-section" class="bg-white py-20 sm:py-24 lg:py-28">
  <SectionWrapper as="div" eyebrow="Location" size="wide">
    <div class="space-y-10 lg:space-y-14">
      <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
        <div class="space-y-5 pt-1">
          <h2 class="section-title max-w-xl">{title}</h2>

          <div class="max-w-xl space-y-4">
            <p class="body-large">
              Rockhaven lies high in the Groot Winterhoek Mountains above Porterville, approximately two hours from
              Cape Town. The final stretch follows a well-maintained gravel road into a peaceful mountain landscape
              where mobile reception is limited and everyday distractions quickly fade away.
            </p>

            <p class="text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
              The journey is part of the experience, rewarding visitors with expansive mountain views, clear rivers,
              remarkable biodiversity and a genuine sense of escape that is still comfortably within reach for a
              weekend away.
            </p>
          </div>
        </div>

        <Card padding="none" className="overflow-hidden">
          <div class="aspect-[4/3] w-full">
            <img
              src={introImage}
              alt="Rockhaven mountain landscape"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </Card>
      </div>

      <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
        <Card padding="none" className="overflow-hidden">
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

        <Card as="div" padding="lg">
          <ul class="space-y-4" aria-label="Location details">
            {#each locationPoints as point}
              <li class="grid grid-cols-[auto_1fr] gap-3">
                <span
                  class="mt-2 h-2 w-2 rounded-full bg-[var(--color-primary-strong)]"
                  aria-hidden="true"
                ></span>

                <p class="text-sm leading-7 text-[var(--color-muted)] sm:text-[0.95rem]">
                  {point}
                </p>
              </li>
            {/each}
          </ul>
        </Card>
      </div>
    </div>
  </SectionWrapper>
</section>
