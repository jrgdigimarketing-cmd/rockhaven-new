<script>
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import DisclosureList from '../components/DisclosureList.svelte';
  import SectionCardGrid from '../components/SectionCardGrid.svelte';

  export let items = [];

  const mobileSummaryClass =
    'grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-4 p-6 text-left';
</script>

<section id="faq">
  <SectionWrapper
    eyebrow="FAQ"
    title="Questions"
    description="What you need to know before you arrive at Rockhaven."
  >
    <DisclosureList items={items} className="space-y-4 sm:hidden" let:item>
      <Card as="details" padding="none" className="group overflow-hidden rounded-md">
        <summary class={`${mobileSummaryClass} [&::-webkit-details-marker]:hidden`}>
          <h3 class="text-lg font-medium text-[var(--color-foreground)]">{item.question}</h3>

          <span
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)]/40 text-[var(--color-primary-strong)] transition group-open:bg-[var(--color-surface)]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </summary>

        <div class="px-6 pb-6 pt-0">
          <p class="text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
        </div>
      </Card>
    </DisclosureList>

    <SectionCardGrid items={items} columns={3} gap="md" className="hidden w-full sm:grid" let:item>
      <Card as="article" padding="md">
        <h3 class="text-lg font-medium text-[var(--color-foreground)]">{item.question}</h3>
        <p class="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.answer}</p>
      </Card>
    </SectionCardGrid>

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
