<script>
  import Card from '../components/Card.svelte';
  import Grid from '../components/Grid.svelte';
  import SectionWrapper from '../components/SectionWrapper.svelte';

  const sharedFeatures = [
    {
      label: 'Linen',
      paths: [
        'M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9.75H4.5V7.5Z',
        'M4.5 17.25h15'
      ]
    },
    {
      label: 'Towels',
      paths: [
        'M7.5 4.5h9a1.5 1.5 0 0 1 1.5 1.5v12.75A1.5 1.5 0 0 1 16.5 20.25h-9A1.5 1.5 0 0 1 6 18.75V6a1.5 1.5 0 0 1 1.5-1.5Z',
        'M9 8.25h6',
        'M9 12h6',
        'M9 15.75h3'
      ]
    },
    {
      label: 'Braai + 2 boxes of firewood',
      paths: [
        'M12 3.75a4.5 4.5 0 0 0-4.5 4.5c0 3.75 4.5 5.25 4.5 8.25 0 1.5-1.2 2.25-2.25 2.25a3.18 3.18 0 0 1-2.25-.75c-.75-.6-1.5-1.5-1.5-3 0-1.5.75-3 2.25-4.5',
        'M12 3.75c1.5 1.5 3 3 3 5.25 0 2.25-1.5 3.75-3 5.25',
        'M5.25 18.75h13.5',
        'M5.25 18.75l1.5-3h4.5l-1.5 3',
        'M12.75 18.75l1.5-3h4.5l-1.5 3'
      ]
    },
    {
      label: 'Parking',
      paths: [
        'M9 20.25V3.75h5.25a4.5 4.5 0 0 1 0 9H9',
        'M9 12h5.25a1.5 1.5 0 0 0 0-3H9'
      ]
    },
    {
      label: 'Hiking access',
      paths: [
        'M4.5 18.75 9 11.25l3.75 4.5 2.25-3 4.5 6',
        'M7.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      ]
    },
    {
      label: 'Wi-Fi',
      paths: [
        'M4.5 9.75a14.84 14.84 0 0 1 15 0',
        'M7.5 13.5a10.5 10.5 0 0 1 9 0',
        'M10.5 17.25a6 6 0 0 1 3 0',
        'M12 20.25h.01'
      ]
    },
    {
      label: 'Bushman paintings',
      paths: [
        'M5.25 17.25V6.75a1.5 1.5 0 0 1 1.5-1.5h7.5l4.5 4.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5Z',
        'M15.75 5.25v4.5h4.5',
        'M8.25 12.75l2.25-2.25 2.25 2.25 1.5-1.5'
      ]
    },
    {
      label: 'Swimming in the dam',
      paths: [
        'M3.75 13.5c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5',
        'M3.75 17.25c1.5 0 1.5-1.5 3-1.5s1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5'
      ]
    }
  ];
</script>

<SectionWrapper
  eyebrow="Shared features"
  title="Included across every stay"
  description="A simple set of practical comforts and access points shared by the accommodation options."
  align="center"
  tone="muted"
>
  <Grid as="ul" columns={4} gap="md" className="w-full">
    {#each sharedFeatures as feature}
      <li class="h-full">
        <Card as="div" padding="sm" className="flex h-full items-center gap-3">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-primary-strong)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
              aria-hidden="true"
            >
              {#each feature.paths as path}
                <path d={path}></path>
              {/each}
            </svg>
          </span>

          <span class="text-sm font-medium leading-6 text-[var(--color-foreground)]">
            {feature.label}
          </span>
        </Card>
      </li>
    {/each}
  </Grid>
</SectionWrapper>
