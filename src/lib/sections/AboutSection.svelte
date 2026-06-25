<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';

  export let company;
</script>

<section id="about">
  <SectionWrapper
    eyebrow="About"
    title="Built for maintainability, not just a single launch"
    description="The template keeps the structure simple enough for beginners while still reflecting a professional project organization."
    align="left"
  >
    <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div class="surface-panel overflow-hidden p-3">
        <img
          src="/images/team/team-placeholder.svg"
          alt="Placeholder team portrait for future photography"
          class="h-full min-h-[360px] w-full rounded-[1.5rem] object-cover"
        />
      </div>

      <div class="stack-gap">
        <p class="body-large">
          Use this space to explain the brand, the team, the service philosophy, or the working process. The goal is to
          keep content editable from simple JavaScript data files and reusable sections.
        </p>

        <div class="grid gap-4 sm:grid-cols-2">
          {#each company.stats as stat}
            <div class="surface-panel p-5">
              <p class="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p class="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          {/each}
        </div>

        <div class="surface-panel p-6">
          <h3 class="text-xl font-semibold text-slate-900">Why this matters</h3>
          <p class="mt-3 text-sm leading-7 text-slate-600">
            Future projects can replace the placeholder story, imagery, and messaging without touching the framework
            around them.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</section>
