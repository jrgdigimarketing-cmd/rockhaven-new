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
        image: '/images/accommodation/RH_Erica_1_Content_1.webp',
        label: 'Erica Cottage',
        note: 'Private cottage and shaded garden'
      },
      {
        image: '/images/accommodation/RH_Erica_2_Content_1.webp',
        label: 'Garden view',
        note: 'Patio outlook and mountain light'
      },
      {
        image: '/images/accommodation/RH_Erica_3_Content_1.webp',
        label: 'Mountain view',
        note: 'Quiet views across the farm'
      },
      {
        image: '/images/accommodation/RH_Erica_arial_1_Content_1.webp',
        label: 'Garden detail',
        note: 'Simple interiors and calm finishes'
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
        image: '/images/accommodation/RH_Lavender_content_11.webp',
        label: 'Lavender Cottage',
        note: 'Main cottage exterior'
      },
      {
        image: '/images/accommodation/RH_Lavender_content_12.webp',
        label: 'Living area',
        note: 'Warm interiors and fireplace'
      },
      {
        image: '/images/accommodation/RH_Lavender_content_13.webp',
        label: 'Bedroom',
        note: 'Soft light and restful tones'
      },
      {
        image: '/images/accommodation/RH_Lavender_content_14.webp',
        label: 'Bathroom',
        note: 'Practical comfort and privacy'
      },
      {
        image: '/images/accommodation/RH_Lavender_content_15.webp',
        label: 'Braai area',
        note: 'Outdoor dining and evening cooking'
      },
      {
        image: '/images/accommodation/RH_Lavender_content_16.webp',
        label: 'Garden view',
        note: 'Shaded garden and relaxed setting'
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
        note: 'Spacious farmhouse exterior'
      },
      {
        image: '/images/accommodation/RH_farmhouse_arial_1_Content_1.webp',
        label: 'Living space',
        note: 'Comfortable common areas'
      },
      {
        image: '/images/accommodation/RH_farmhouse_1_Content_1.webp',
        label: 'Braai area',
        note: 'Outdoor gathering and cooking'
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
