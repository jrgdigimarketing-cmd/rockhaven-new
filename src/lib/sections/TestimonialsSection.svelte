<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import TestimonialCard from '../components/TestimonialCard.svelte';

  export let testimonials = [];

  $: carouselTestimonials = testimonials.length > 1 ? [...testimonials, ...testimonials] : testimonials;
</script>

<section id="testimonials" class="bg-slate-50/80">
  <SectionWrapper
    eyebrow="Testimonials"
    title="Guest voices"
    description="Recent guest reviews from Tripadvisor."
  >
    <div class="w-full">
      <div class="testimonial-carousel overflow-hidden" aria-label="Guest testimonials carousel">
        <div class="testimonial-track flex w-max gap-6">
          {#each carouselTestimonials as testimonial, index}
            <div class="w-[min(24rem,82vw)] shrink-0" aria-hidden={index >= testimonials.length}>
              <TestimonialCard {...testimonial} />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </SectionWrapper>
</section>

<style>
  .testimonial-track {
    animation: testimonial-scroll 28s linear infinite;
    will-change: transform;
  }

  .testimonial-carousel:hover .testimonial-track,
  .testimonial-carousel:focus-within .testimonial-track {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .testimonial-track {
      animation: none;
      transform: none;
    }
  }

  @keyframes testimonial-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
</style>
