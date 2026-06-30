<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  export let title = 'Location preview';
</script>

<section id="location-preview">
  <SectionWrapper
    eyebrow="How to find us"
    title={title}
    description="There are dirt roads that are well graded and suitable for most vehicles, but we recommend a 4x4 or high-clearance vehicle if it is raining."
  >
    <div class="surface-panel overflow-hidden p-3">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.604157674398!2d19.063821699999995!3d-32.9254919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c32cfbf8c5d2f35%3A0x633f535f423aa97f!2sRockhaven!5e1!3m2!1sen!2sza!4v1782712386327!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      
    </div>
  </SectionWrapper>
</section>
