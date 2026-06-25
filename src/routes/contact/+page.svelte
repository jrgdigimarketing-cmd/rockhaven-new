<script>
  import { company } from '$lib/data/company.js';
  import { buildSeo } from '$lib/utils/seo.js';

  const seo = buildSeo({
    title: 'Contact',
    description: company.description
  });
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
</svelte:head>

<h1>Contact</h1>

<p>Contact page placeholder.</p>