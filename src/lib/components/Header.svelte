<script>
  // Sticky site header that switches between desktop nav and a mobile drawer.
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import Navigation from './Navigation.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  let mobileMenuOpen = false;
</script>

<header class="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[rgba(252,250,246,0.86)] backdrop-blur-xl">
  <Container size="wide" className="flex h-20 items-center justify-between gap-4">
    <Logo companyName={company.name} />

    <div class="hidden lg:block">
      <Navigation {navigation} />
    </div>

    <div class="hidden lg:block">
      <Button href={primaryCta.href}>{primaryCta.label}</Button>
    </div>

    <button
      type="button"
      class="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] shadow-sm lg:hidden"
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-menu"
      on:click={() => (mobileMenuOpen = true)}
    >
      Menu
    </button>
  </Container>
</header>

<MobileMenu id="mobile-menu" bind:open={mobileMenuOpen} links={navigation} {primaryCta} />
