<script>
  import '../app.css';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { company } from '$lib/data/company.js';
  import { navigation, primaryCta } from '$lib/data/navigation.js';
</script>

<Header {company} {navigation} {primaryCta} />

<main>
  <slot />
</main>

<Footer {company} {navigation} {primaryCta} />