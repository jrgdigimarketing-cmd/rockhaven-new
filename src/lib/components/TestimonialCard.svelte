<script>
  import Card from './Card.svelte';

  // Lightweight testimonial card with placeholder avatar support.
  export let name;
  export let role;
  export let quote;
  export let image;
</script>

<Card className="rounded-md">
  <div class="flex items-start gap-4">
    <img
      src={image}
      alt={`${name} placeholder headshot`}
      class="h-14 w-14 rounded-full object-cover ring-1 ring-[var(--color-border)]"
    />

    <div>
      <h3 class="text-lg font-medium text-[var(--color-foreground)]">{name}</h3>
      <p class="text-sm text-[var(--color-muted)]">{role}</p>
    </div>
  </div>

  <p class="mt-5 text-base leading-7 text-[var(--color-muted)]">“{quote}”</p>
</Card>
