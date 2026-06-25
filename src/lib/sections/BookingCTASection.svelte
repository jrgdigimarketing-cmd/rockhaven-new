<script>
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  export let company;
</script>

<section id="booking-cta" class="py-8">
  <Container>
    <div class="surface-panel overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-900 px-6 py-12 text-white sm:px-10 lg:px-14">
      <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div class="stack-gap">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-100">Booking CTA</p>
          <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to turn interest into a booking conversation?
          </h2>
          <p class="max-w-2xl text-base leading-7 text-emerald-50">
            Keep the structure, replace the placeholder content, and make it easy for guests to take the next step.
          </p>
        </div>

        <Button href="#contact" variant="secondary">Contact {company.name}</Button>
      </div>
    </div>
  </Container>
</section>
