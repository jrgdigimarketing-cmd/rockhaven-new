<script>
  import Card from './Card.svelte';

  export let name = '';
  export let location = '';
  export let date = '';
  export let rating = 0;
  export let title = '';
  export let quote = '';
  export let highlights = [];
  export let source = 'Tripadvisor';

  $: nameParts = name.split(/\s+/).filter(Boolean);
  $: initials =
    nameParts.length > 1
      ? nameParts
          .slice(0, 2)
          .map((part) => part[0])
          .join('')
          .toUpperCase()
      : name.slice(0, 2).toUpperCase();

  $: displayLocation = location;
  $: ratingText = `${rating}/5 rating`;
</script>

<Card
  as="article"
  padding="lg"
  className="flex h-full flex-col"
>
  <div class="flex items-start justify-between gap-4">
    <div class="flex min-w-0 items-center gap-4">
      <div
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)]/55 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-strong)]"
        aria-hidden="true"
      >
        {initials}
      </div>

      <div class="min-w-0">
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
          {source}
        </p>
        <h3 class="mt-1 font-[var(--font-display)] text-2xl leading-tight tracking-[-0.03em] text-[var(--color-foreground)]">
          {title}
        </h3>
        <p class="mt-1 text-sm text-[var(--color-muted)]">
          {name}
          {#if displayLocation}
            <span aria-hidden="true"> · </span>{displayLocation}
          {/if}
        </p>
      </div>
    </div>

    <div class="shrink-0 text-right">
      <p class="text-sm font-medium text-[var(--color-foreground)]" aria-label={ratingText}>
        {rating}/5
      </p>
      <p class="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">{date}</p>
    </div>
  </div>

  <blockquote class="mt-6 text-base leading-8 text-[var(--color-foreground)] sm:text-[1.05rem]">
    "{quote}"
  </blockquote>

  {#if highlights?.length}
    <div class="mt-6 flex flex-wrap gap-2">
      {#each highlights as highlight}
        <span
          class="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)]/45 px-3 py-1 text-xs font-medium tracking-[0.08em] text-[var(--color-foreground)]"
        >
          {highlight}
        </span>
      {/each}
    </div>
  {/if}
</Card>
