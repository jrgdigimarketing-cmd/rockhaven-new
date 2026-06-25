<script>
  import FAQAccordion from '../components/FAQAccordion.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  export let items = [];
</script>

<section id="faq">
  <SectionWrapper
    eyebrow="FAQ"
    title="Answer the common questions before they slow down the brief"
    description="A strong FAQ section helps reduce friction for clients and improves search relevance on service pages."
  >
    <FAQAccordion {items} />
  </SectionWrapper>
</section>
