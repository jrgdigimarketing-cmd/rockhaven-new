<script>
  import { company } from '$lib/data/company.js';
  import { buildSeo } from '$lib/utils/seo.js';
  import HeroSection from '$lib/sections/HeroSection.svelte';
  import AccommodationFeaturesComponent from '$lib/components/AccommodationFeaturesComponent.svelte';
  import AccommodationPreviewPrice from '$lib/sections/AccommodationPreviewPrice.svelte';
  import AboutSection from '$lib/sections/AboutSection.svelte';
  import GallerySection from '$lib/sections/GallerySection.svelte';
  import ProcessSection from '$lib/sections/ProcessSection.svelte';

  const seo = buildSeo({
    title: 'Accommodation',
    description: company.description
  });

  const accommodationFeatures = [
    {
      title: 'Cottage one',
      features: [
        {
          title: 'Placeholder feature one',
          description: 'Placeholder copy for a repeatable cottage detail.',
          icon: 'leaf'
        },
        {
          title: 'Placeholder feature two',
          description: 'Placeholder copy for another calm, practical detail.',
          icon: 'home'
        },
        {
          title: 'Placeholder feature three',
          description: 'Placeholder copy for one more cottage-specific note.',
          icon: 'sun'
        }
      ]
    },
    {
      title: 'Cottage two',
      features: [
        {
          title: 'Placeholder feature one',
          description: 'Placeholder copy for a repeatable cottage detail.',
          icon: 'home'
        },
        {
          title: 'Placeholder feature two',
          description: 'Placeholder copy for another calm, practical detail.',
          icon: 'leaf'
        },
        {
          title: 'Placeholder feature three',
          description: 'Placeholder copy for one more cottage-specific note.',
          icon: 'sun'
        }
      ]
    },
    {
      title: 'Cottage three',
      features: [
        {
          title: 'Placeholder feature one',
          description: 'Placeholder copy for a repeatable cottage detail.',
          icon: 'sun'
        },
        {
          title: 'Placeholder feature two',
          description: 'Placeholder copy for another calm, practical detail.',
          icon: 'leaf'
        },
        {
          title: 'Placeholder feature three',
          description: 'Placeholder copy for one more cottage-specific note.',
          icon: 'home'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>
<HeroSection
  title="Placeholder accommodation hero title."
  description="Placeholder text for the accommodation hero section, kept intentionally simple and aligned with the homepage layout."
  primaryLabel="Book"
  primaryHref="/contact"
  secondaryLabel="Explore"
  secondaryHref="#accommodation"
/>
<AccommodationPreviewPrice />
{#each accommodationFeatures as section}
  <AccommodationFeaturesComponent {...section} />
{/each}
<GallerySection />
<ProcessSection />
<AboutSection {company} />
