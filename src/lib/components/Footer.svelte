<script>
  // Shared site footer with logo, summary, navigation, contact details, and CTA.
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import Grid from './Grid.svelte';
  import Logo from './Logo.svelte';
  import Stack from './Stack.svelte';
  import TextLink from './TextLink.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  const socialMap = [
    ['instagram', 'Instagram'],
    ['facebook', 'Facebook'],
    ['google', 'Google']
  ];

  $: socialLinks = socialMap
    .map(([key, label]) => (company?.social?.[key] ? { label, href: company.social[key] } : null))
    .filter(Boolean);

  $: phoneHref = company?.phone && !company.phone.includes('X') ? `tel:${company.phone.replace(/[^+\d]/g, '')}` : '';
</script>

<footer class="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
  <Container size="wide" className="py-16 sm:py-20 lg:py-24">
    <Grid columns={2} gap="lg" className="items-start lg:grid-cols-[1.15fr_0.85fr]">
      <Stack gap="lg" className="max-w-2xl">
        <Logo companyName={company.name} />

        <Stack gap="sm" className="max-w-xl">
          <p class="body-large text-[var(--color-muted)]">{company.tagline}</p>
          <p class="text-sm leading-7 text-[var(--color-muted)]">{company.description}</p>
        </Stack>

        <div class="flex flex-wrap gap-3">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
        </div>
      </Stack>

      <Grid columns={2} gap="lg" className="sm:grid-cols-2">
        <section class="space-y-4">
          <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
            Navigate
          </h2>
          <ul class="space-y-3">
            {#each navigation as item}
              <li>
                <TextLink href={item.href}>{item.label}</TextLink>
              </li>
            {/each}
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
            Contact
          </h2>

          <Stack as="ul" gap="sm" className="text-sm text-[var(--color-muted)]">
            {#if company.address}
              <li>{company.address}</li>
            {/if}

            {#if company.email}
              <li>
                <TextLink href={`mailto:${company.email}`}>{company.email}</TextLink>
              </li>
            {/if}

            {#if phoneHref}
              <li>
                <TextLink href={phoneHref}>{company.phone}</TextLink>
              </li>
            {/if}

            {#if company.hours}
              <li>{company.hours}</li>
            {/if}
          </Stack>
        </section>

        {#if socialLinks.length}
          <section class="space-y-4 sm:col-span-2">
            <h2 class="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[var(--color-primary-strong)]">
              Social
            </h2>

            <div class="flex flex-wrap gap-4">
              {#each socialLinks as social}
                <TextLink href={social.href} external>{social.label}</TextLink>
              {/each}
            </div>
          </section>
        {/if}
      </Grid>
    </Grid>

    <div class="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {company.name}</p>
      <p>{company.address}</p>
    </div>
  </Container>
</footer>
