<script>
  import { company } from '$lib/data/company.js';
  import { buildSeo } from '$lib/utils/seo.js';
  import HeroSection from '$lib/sections/HeroSection.svelte';
  import AccommodationFeaturesSection from '$lib/sections/AccommodationFeaturesSection.svelte';
  import AccommodationSharedFeatures from '$lib/sections/AccommodationSharedFeatures.svelte';
  import GallerySection from '$lib/sections/GallerySection.svelte';
  import BookingCTASection from '$lib/sections/BookingCTASection.svelte';

  const seo = buildSeo({
    title: 'Accommodation',
    description: company.description
  });

  const ericaFeatures = {
    id: 'erica-features',
    title: 'Erica Cottage',
    roomDescription:
      'Lovely private cottage with big patio in shaded garden, with beautiful views of mountains and fields.',
    amenities: [
      'Fireplace',
      'Non-smoking',
      'Sitting area',
      'Bathroom amenities',
      'Shower only',
      'Coffee / tea facilities',
      'Kitchenette',
      'Microwave',
      'Refrigerator',
      'Patio'
    ],
    maxGuests: '4',
    price: 'From R1,420.00',
    priceLabel: 'Per night',
    bookHref: 'https://book.nightsbridge.com/28076',
    bookLabel: 'Book',
    slides: [
      {
        image: '/images/accommodation/erica.webp',
        label: 'Erica Cottage',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/lavender.webp',
        label: 'Garden view',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/farmhouse.webp',
        label: 'Mountain view',
        note: 'Local placeholder image'
      }
    ]
  };

  const lavenderFeatures = {
    id: 'lavender-features',
    title: 'Lavender Cottage',
    roomDescription:
      'The cottage has two bathrooms (one en-suite with a shower) the other with a bath and shower, and there is also an outside shower. There is an inside fireplace and outside braai area (with a braai grid provided).',
    amenities: [
      'Fireplace',
      'Non-smoking',
      'Sitting area',
      'Bathroom amenities',
      'Shower only',
      'Coffee / tea facilities',
      'Kitchenette',
      'Microwave',
      'Refrigerator',
      'Patio'
    ],
    maxGuests: '6',
    price: 'From R1,980.00',
    priceLabel: 'Per night',
    bookHref: 'https://book.nightsbridge.com/28076',
    bookLabel: 'Book',
    slides: [
      {
        image: '/images/accommodation/lavender.webp',
        label: 'Lavender Cottage',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/erica.webp',
        label: 'Garden view',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/farmhouse.webp',
        label: 'Mountain view',
        note: 'Local placeholder image'
      }
    ]
  };

  const farmhouseFeatures = {
    id: 'farmhouse-features',
    title: 'Farmhouse',
    roomDescription:
      'Large farmhouse in magnificent gardens with rock pool and extensive mountain views across lawns and olive trees. Seven bedrooms with fully equipped kitchen, two bathrooms, plus one en-suite toilet, and an outside shower.',
    amenities: [
      'Desk',
      'Fireplace',
      'Non-smoking',
      'Bathroom amenities',
      'Bathtub / shower combined',
      'Coffee / tea facilities',
      'Full kitchen',
      'Microwave',
      'Balcony',
      'Plunge pool'
    ],
    maxGuests: '14',
    price: 'From R5,000.00',
    priceLabel: 'Per night',
    bookHref: 'https://book.nightsbridge.com/28076',
    bookLabel: 'Book',
    slides: [
      {
        image: '/images/accommodation/farmhouse.webp',
        label: 'Farm House',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/erica.webp',
        label: 'Garden view',
        note: 'Local placeholder image'
      },
      {
        image: '/images/accommodation/lavender.webp',
        label: 'Mountain view',
        note: 'Local placeholder image'
      }
    ]
  };
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>
<HeroSection
  image="/images/hero/RH_Protea_arial_1_Hero_1.webp"
  mobileImage="/images/mobile/RH_Protea_arial_1_Mobile_1.webp"
  title="Three ways to stay"
  description="Three fully equipped self-catering options, each privately positioned across the farm."
  primaryLabel="Book"
  primaryHref="https://book.nightsbridge.com/28076"
  primaryTarget="_blank"
  primaryRel="noreferrer"
  secondaryLabel="Explore"
  secondaryHref="/about"
/>

<AccommodationFeaturesSection {...ericaFeatures} />
<AccommodationFeaturesSection {...lavenderFeatures} />
<AccommodationFeaturesSection {...farmhouseFeatures} />
<AccommodationSharedFeatures />
<GallerySection />
<BookingCTASection {company} />
