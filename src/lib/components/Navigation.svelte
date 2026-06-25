<script>
  // Desktop navigation list for anchor links and section jumps.
  export let links = [];
  export let className = '';
  export let orientation = 'horizontal';
  export let linkClassName = '';
  export let onNavigate = () => {};

  const navClasses = {
    horizontal: 'flex flex-wrap items-center gap-6',
    vertical: 'flex flex-col gap-2'
  };

  const itemClasses = {
    horizontal: 'text-sm font-medium text-[var(--color-foreground)] transition hover:text-[var(--color-primary)]',
    vertical:
      'block rounded-2xl px-4 py-3 text-lg font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-surface-muted)]'
  };
</script>

<nav aria-label="Primary" class={className}>
  <ul class={navClasses[orientation] ?? navClasses.horizontal}>
    {#each links as link}
      <li>
        <a
          href={link.href}
          class={`${itemClasses[orientation] ?? itemClasses.horizontal} ${linkClassName}`}
          on:click={onNavigate}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
