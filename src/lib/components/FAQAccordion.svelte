<script>
  // Accessible details/summary accordion for frequently asked questions.
  export let items = [];
</script>

<div class="space-y-4">
  {#each items as item}
    <details class="surface-panel group p-6">
      <summary class="cursor-pointer list-none text-left text-lg font-semibold text-slate-900">
        {item.question}
      </summary>
      <div class="mt-3 text-sm leading-7 text-slate-600">
        {item.answer}
      </div>
    </details>
  {/each}
</div>
