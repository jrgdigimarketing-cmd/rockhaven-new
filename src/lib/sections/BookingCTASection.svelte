<script>
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  const imageSrc = '/images/hero/hero 2.webp';
</script>

<section id="booking-cta" class="bg-[var(--color-surface-muted)]/35 py-10 sm:py-12 lg:py-14">
  <Container size="wide">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="section-title">Book your stay now</h2>
      <p class="body-large mx-auto mt-4 max-w-2xl">
        Reserve one of the three cottages and claim your place of mountain quiet.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="#contact">Book</Button>
        <Button href="#contact" variant="secondary">Learn</Button>
      </div>
    </div>
  </Container>

  <div class="mt-10 w-screen relative left-1/2 -translate-x-1/2">
    <img src={imageSrc} alt="Placeholder mountain landscape" class="h-[18rem] w-full object-cover sm:h-[22rem] lg:h-[28rem]" />
  </div>
</section>
