<script>
  export let companyName = 'Website Starter Template';
  export let href = '/';
  export let showText = true;
  export let framed = true;
  export let imageClass = 'h-6 w-6';
</script>

<a
  href={href}
  aria-label={!showText ? companyName : undefined}
  class={`inline-flex shrink-0 items-center text-[var(--color-foreground)] ${showText ? 'gap-3 font-medium' : ''}`}
>
  {#if framed}
    <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)] text-[#f7f2e8] shadow-lg shadow-[color:rgba(53,41,28,0.12)]">
      <img src="/logos/Rockhaven Guest Farm (Rectangle Sticker (Landscape)).png" alt="" class={imageClass} />
    </span>
  {:else}
    <img
      src="/logos/Rockhaven Guest Farm (Rectangle Sticker (Landscape)).png"
      alt=""
      class={`block object-contain ${imageClass}`}
    />
  {/if}

  {#if showText}
    <span class="flex flex-col leading-tight">
      <span class="text-base">{companyName}</span>
    </span>
  {/if}
</a>
