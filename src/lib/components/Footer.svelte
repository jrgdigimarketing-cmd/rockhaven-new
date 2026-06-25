<script>
  // Shared site footer with navigation, contact details, and ownership info.
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import TextLink from './TextLink.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };
</script>

<footer class="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
  <Container size="wide" className="section-padding">
    <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="stack-gap">
        <Logo companyName={company.name} />
        <p class="max-w-xl text-base leading-7 text-[var(--color-muted)]">{company.tagline}</p>
        <div class="flex flex-wrap gap-3">
          <TextLink href={primaryCta.href}>{primaryCta.label}</TextLink>
          <span class="text-[var(--color-muted)]/30">/</span>
          <TextLink href={`mailto:${company.email}`}>{company.email}</TextLink>
        </div>
      </div>

      <div class="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">Navigate</h2>
          <ul class="mt-4 space-y-3">
            {#each navigation as item}
              <li><a class="text-[var(--color-foreground)] transition hover:text-[var(--color-primary)]" href={item.href}>{item.label}</a></li>
            {/each}
          </ul>
        </div>

        <div>
          <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">Details</h2>
          <ul class="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.hours}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {company.name}. Starter template.</p>
      <p>Built for Codex, GitHub, VS Code, and Cloudflare Pages.</p>
    </div>
  </Container>
</footer>
