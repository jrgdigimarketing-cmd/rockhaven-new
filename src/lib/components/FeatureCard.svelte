<script>
  import Badge from './Badge.svelte';
  import Card from './Card.svelte';

  // Small feature card for benefits, capabilities, or template highlights.
  export let title;
  export let description;
  export let icon = '/images/placeholders/placeholder-square.svg';
</script>

<Card>
  <div class="flex items-start gap-4">
    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-primary-strong)]">
      <img src={icon} alt="" class="h-6 w-6 object-contain" />
    </div>

    <div class="space-y-3">
      <Badge tone="outline">Feature</Badge>
      <h3 class="section-title text-[1.35rem] leading-tight">{title}</h3>
      <p class="text-sm leading-7 text-[var(--color-muted)]">{description}</p>
    </div>
  </div>
</Card>
