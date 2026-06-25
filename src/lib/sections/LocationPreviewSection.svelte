<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  export let title = 'Location preview';
</script>

<section id="location-preview">
  <SectionWrapper
    eyebrow="Location"
    title={title}
    description="Replace this card with a real map provider or location embed when a future project needs one."
  >
    <div class="surface-panel overflow-hidden p-3">
      <img
        src="/images/placeholders/map-placeholder.svg"
        alt="Placeholder location graphic"
        class="h-[420px] w-full rounded-[1.5rem] object-cover"
      />
    </div>
  </SectionWrapper>
</section>
