<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  import TestimonialCard from '../components/TestimonialCard.svelte';

  export let testimonials = [];

  let activeTestimonial = 0;

  $: carouselTestimonials = testimonials.length > 1 ? [...testimonials, ...testimonials] : testimonials;
  $: if (activeTestimonial >= testimonials.length) activeTestimonial = 0;

  const previousTestimonial = () => {
    if (!testimonials.length) return;
    activeTestimonial = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
  };

  const nextTestimonial = () => {
    if (!testimonials.length) return;
    activeTestimonial = (activeTestimonial + 1) % testimonials.length;
  };
</script>

<section id="testimonials" class="overflow-x-hidden bg-slate-50/80">
  <SectionWrapper
    eyebrow="Testimonials"
    title="Guest voices"
    description="Recent guest reviews from Tripadvisor."
  >
    <div class="w-full sm:hidden">
      {#if testimonials.length}
        <div class="relative mx-auto w-full max-w-[24rem]">
          <TestimonialCard {...testimonials[activeTestimonial]} />

          {#if testimonials.length > 1}
            <button
              type="button"
              class="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30"
              aria-label="Previous testimonial"
              on:click={previousTestimonial}
            >
              <span aria-hidden="true">‹</span>
            </button>

            <button
              type="button"
              class="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/30"
              aria-label="Next testimonial"
              on:click={nextTestimonial}
            >
              <span aria-hidden="true">›</span>
            </button>
          {/if}
        </div>
      {/if}
    </div>

    <div class="hidden w-full sm:block">
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

  @media (max-width: 639px) {
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
