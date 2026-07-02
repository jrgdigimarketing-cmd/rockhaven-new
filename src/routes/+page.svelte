<script>
  import HeroSection from '$lib/sections/HeroSection.svelte';
  import AccommodationPreviewPrice from '$lib/sections/AccommodationPreviewPrice.svelte';
  import FarmExperiencePreview from '$lib/sections/FarmExperiencePreview.svelte';
  import TestimonialsSection from '$lib/sections/TestimonialsSection.svelte';
  import BookingCTASection from '$lib/sections/BookingCTASection.svelte';
  import FAQSection from '$lib/sections/FAQSection.svelte';
  import LocationPreviewSection from '$lib/sections/LocationPreviewSection.svelte';

  import { company } from '$lib/data/company.js';
  import { faq } from '$lib/data/faq.js';
  import { services } from '$lib/data/services.js';
  import { testimonials } from '$lib/data/testimonials.js';
  import { buildSeo } from '$lib/utils/seo.js';

  const seo = buildSeo({
    title: 'Home',
    description: company.description
  });
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>
<HeroSection
  mobileImage="/images/mobile/RH_Landscape_arial_2_Mobile_1.webp"
  primaryHref="https://book.nightsbridge.com/28076"
  primaryLabel="Book Your Stay"
  primaryTarget="_blank"
  primaryRel="noreferrer"
  secondaryHref="/about"
  secondaryLabel="Explore"
/>
<AccommodationPreviewPrice />
<FarmExperiencePreview {services} />
<TestimonialsSection {testimonials} />
<BookingCTASection {company} />
<FAQSection items={faq} />
<LocationPreviewSection {company} />
