<script>
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

<h1>About Rockhaven</h1>

<p>About page placeholder.</p>