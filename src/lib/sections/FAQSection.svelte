<script>
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  export let items = [];

  const gridClass = 'grid gap-4 sm:grid-cols-2 xl:grid-cols-3';
</script>

<section id="faq">
  <SectionWrapper
    eyebrow="FAQ"
    title="Questions"
    description="What you need to know before you arrive at Rockhaven."
  >
    <div class={gridClass}>
      {#each items as item}
        <Card as="article" padding="md">
          <h3 class="text-lg font-medium text-[var(--color-foreground)]">{item.question}</h3>
          <p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
        </Card>
      {/each}
    </div>

    <div class="mt-8">
      <Card padding="md" tone="muted">
        <h3 class="text-xl font-medium text-[var(--color-foreground)]">Still have questions?</h3>
        <p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          Reach out and we’ll answer what you need to know.
        </p>

        <div class="mt-5">
          <Button href="#footer">Contact</Button>
        </div>
      </Card>
    </div>
  </SectionWrapper>
</section>
