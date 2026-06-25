<script>
  import ContactForm from '../components/ContactForm.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  export let company;
</script>

<section id="contact" class="bg-white">
  <SectionWrapper
    eyebrow="Contact"
    title="Placeholder contact block for future form integration"
    description="This layout keeps the form accessible and leaves room for business details, support info, and a map placeholder."
  >
    <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <ContactForm title={`Tell us about your next site with ${company.name}`} />

      <div class="stack-gap">
        <div class="surface-panel overflow-hidden p-3">
          <img
            src="/images/placeholders/map-placeholder.svg"
            alt="Map placeholder showing where a real location embed can be added"
            class="h-80 w-full rounded-[1.5rem] object-cover"
          />
        </div>

        <div class="surface-panel p-6">
          <h3 class="text-xl font-semibold text-slate-900">Business details</h3>
          <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li><strong class="text-slate-900">Email:</strong> {company.email}</li>
            <li><strong class="text-slate-900">Phone:</strong> {company.phone}</li>
            <li><strong class="text-slate-900">Address:</strong> {company.address}</li>
            <li><strong class="text-slate-900">Hours:</strong> {company.hours}</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
</section>
