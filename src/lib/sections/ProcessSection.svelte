<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';

  const steps = [
    { title: 'Discover', description: 'Review the brief, define goals, and identify the pages the client actually needs.' },
    { title: 'Design', description: 'Select the section mix, content hierarchy, and visual direction using reusable components.' },
    { title: 'Build', description: 'Assemble the site in SvelteKit, keeping data and presentation separate where possible.' },
    { title: 'Launch', description: 'Deploy to Cloudflare Pages, then hand over a tidy GitHub history and editable structure.' }
  ];
</script>

<section id="process" class="bg-white">
  <SectionWrapper
    eyebrow="Process"
    title="A simple workflow for repeated site builds"
    description="This structure works well when multiple client websites need to be delivered with speed and consistency."
  >
    <ol class="grid gap-4 lg:grid-cols-4">
      {#each steps as step, index}
        <li class="surface-panel p-6">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">0{index + 1}</p>
          <h3 class="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
        </li>
      {/each}
    </ol>
  </SectionWrapper>
</section>
