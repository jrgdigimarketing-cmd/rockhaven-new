<script>
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import SectionWrapper from './SectionWrapper.svelte';
  import Stack from './Stack.svelte';

  export let title = '';
  export let features = [];
  export let bookHref = '/contact';
  export let bookLabel = 'Book';

  const iconClass =
    'flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-primary-strong)]';
</script>

<SectionWrapper title={title} align="center" size="narrow">
  <div class="w-full">
    <Stack as="ul" gap="md" className="w-full">
      {#each features as feature}
        <Card as="li" padding="md" className="flex items-start gap-4 text-left">
          <div class={iconClass} aria-hidden="true">
            {#if feature.icon === 'leaf'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 13.5c4.5-9 13.5-9 13.5-9s0 9-9 13.5c-3 1.5-4.5 1.5-4.5 1.5s0-1.5 0-6Z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 12 4.5 18"></path>
              </svg>
            {:else if feature.icon === 'home'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 11.25 12 4l9 7.25"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 10.5V20h13.5v-9.5"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 20v-5.25h6V20"></path>
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v2.25"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v2.25"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 12H3"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12h-2.25"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.4 6.4 1.6 1.6"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="m16 16 1.6 1.6"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.4 17.6 1.6-1.6"></path>
                <path stroke-linecap="round" stroke-linejoin="round" d="m16 8 1.6-1.6"></path>
              </svg>
            {/if}
          </div>

          <div class="min-w-0">
            <h3 class="text-[1rem] font-normal leading-6 text-[var(--color-foreground)] sm:text-[1.05rem]">
              {feature.title}
            </h3>
            <p class="mt-1 text-sm leading-7 text-[var(--color-muted)]">
              {feature.description}
            </p>
          </div>
        </Card>
      {/each}
    </Stack>

    <div class="mt-8 flex justify-center">
      <Button href={bookHref}>{bookLabel}</Button>
    </div>
  </div>
</SectionWrapper>
