<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import TestimonialCard from '../components/TestimonialCard.svelte';

  export let testimonials = [];
</script>

<section id="testimonials" class="bg-slate-50/80">
  <SectionWrapper
    eyebrow="Testimonials"
    title="Guest voices"
    description="What visitors say about their time here."
  >
    <div class="grid gap-6 lg:grid-cols-3">
      {#each testimonials as testimonial}
        <TestimonialCard {...testimonial} />
      {/each}
    </div>
  </SectionWrapper>
</section>
