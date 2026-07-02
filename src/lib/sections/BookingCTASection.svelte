<script>
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  const imageSrc = '/images/hero/hero 2.webp';
</script>

<section
  id="booking-cta"
  class="overflow-x-clip bg-[var(--color-surface-muted)]/35 py-10 sm:py-12 lg:py-14"
>
  <Container size="wide">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="section-title">Ready to slow down?</h2>
      <p class="body-large mx-auto mt-4 max-w-2xl">
        Choose a cottage, pick your dates, and enjoy a quiet mountain escape just two hours from Cape Town.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          href="https://book.nightsbridge.com/28076"
          target="_blank"
          rel="noreferrer"
        >
          Check Availability
        </Button>
      </div>
    </div>
  </Container>

  <div class="mt-10 -mx-4 overflow-hidden sm:-mx-6 lg:-mx-8">
    <img
      src={imageSrc}
      alt="Placeholder mountain landscape"
      class="block aspect-video w-full object-cover"
    />
  </div>
</section>
