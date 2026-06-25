<script>
  // Brand mark and wordmark used in the header and footer.
  export let companyName = 'Website Starter Template';
  export let href = '/';
</script>

<a href={href} class="inline-flex items-center gap-3 font-medium text-[var(--color-foreground)]">
  <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)] text-[#f7f2e8] shadow-lg shadow-[color:rgba(53,41,28,0.12)]">
    <img src="/logos/logo-mark.svg" alt="" class="h-6 w-6" />
  </span>
  <span class="flex flex-col leading-tight">
    <span class="text-base">{companyName}</span>
    <span class="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">Starter</span>
  </span>
</a>
