<script>
  export let href = '';
  export let className = '';
  export let target = undefined;
  export let rel = undefined;
  export let external = false;

  $: resolvedTarget = external ? '_blank' : target;
  $: resolvedRel = external ? 'noreferrer noopener' : rel;
</script>

<a
  href={href}
  target={resolvedTarget}
  rel={resolvedRel}
  class={`text-link ${className}`}
>
  <slot />
</a>
