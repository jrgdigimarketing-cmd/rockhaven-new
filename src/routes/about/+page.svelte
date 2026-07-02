<script>
  import HeroSection from '$lib/sections/HeroSection.svelte';
  import ExperienceHighlightsSection from '$lib/sections/ExperienceHighlightsSection.svelte';
  import LocationSection from '$lib/sections/LocationSection.svelte';
  import AboutSection from '$lib/sections/AboutSection.svelte';
  import BookingCTASection from '$lib/sections/BookingCTASection.svelte';

  import { company } from '$lib/data/company.js';
  import { buildSeo } from '$lib/utils/seo.js';

  const seo = buildSeo({
    title: 'About',
    description: company.description
  });
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>

<HeroSection
  image="/images/hero/RH_lavendar_1_Hero_1.webp"
  mobileImage="/images/mobile/RH_lavendar_1_Mobile_1.webp"
  title="A family-run mountain farm"
  description="Rockhaven is a small, rustic guest farm in the Winterhoek Mountains, about two hours from Cape Town. It is a working organic farm with hiking, birdwatching, wide-open scenery, and a quiet rural rhythm."
  primaryLabel="View Accommodation"
  primaryHref="/accommodation"
  secondaryLabel="Explore the Farm"
  secondaryHref="#about"
/>

<AboutSection />
<ExperienceHighlightsSection />
<LocationSection />
<BookingCTASection {company} />
