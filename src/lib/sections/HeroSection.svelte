<script>
  import { onMount } from 'svelte';
  import HeroMedia from '$lib/components/HeroMedia.svelte';

	const defaultHeroImage = '/images/hero/RH_Landscape_arial_2_Hero_1.webp';

export let image = defaultHeroImage;
export let mobileImage = '';
export let videoMp4 = '';
export let videoWebm = '';
export let title = 'Self-catering cottages in the Winterhoek Mountains';
	export let description =
		'Escape to a working organic farm in the Winterhoek Mountains, just two hours from Cape Town. Stay in one of three private self-catering cottages, explore scenic hiking trails, and unwind in a landscape of wide-open mountains, fresh air, and complete tranquillity.';
	export let primaryLabel = 'Book Your Stay';
	export let primaryHref = '/contact';
	export let primaryTarget = '';
	export let primaryRel = '';
	export let secondaryLabel = 'Explore';
	export let secondaryHref = '/accommodation';

	let reduceMotion = false;
	let titleVisible = false;
	let copyVisible = false;
	let titleDelayId;
	let copyDelayId;

	onMount(() => {
		reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reduceMotion) {
			titleVisible = true;
			copyVisible = true;

			return;
		}

		titleDelayId = window.setTimeout(() => {
			titleVisible = true;
		}, 80);

		copyDelayId = window.setTimeout(() => {
			copyVisible = true;
		}, 180);

		return () => {
			clearTimeout(titleDelayId);
			clearTimeout(copyDelayId);
		};
	});
</script>

<section
  aria-labelledby="hero-heading"
  class="relative isolate min-h-[84svh] overflow-hidden sm:min-h-[80vh]"
>
	<HeroMedia
		poster={image}
		mobilePoster={mobileImage}
		{videoMp4}
		{videoWebm}
	/>

	<div
		class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10"
		aria-hidden="true"
	></div>

	<div
		class="absolute inset-0 z-10 w-full"
	>
		<div
			class="mx-auto flex h-full max-w-7xl flex-col justify-start gap-8 px-5 pb-10 pt-20 sm:px-6 sm:pb-16 lg:justify-between lg:px-8 lg:pb-20 lg:pt-24"
		>
			<h1
				id="hero-heading"
				class={`max-w-xl font-serif text-4xl leading-[0.96] tracking-tight text-white transition duration-700 ease-out motion-reduce:transition-none ${
					titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
				} sm:text-6xl lg:text-7xl`}
			>
				{title}
			</h1>

			<div class="grid gap-6 lg:grid-cols-12 lg:gap-12">
				<div class="hidden lg:block lg:col-span-7"></div>

				<div
					class={`lg:col-span-5 lg:pb-2 transition duration-700 ease-out motion-reduce:transition-none ${
						copyVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
					}`}
				>
					<p class="max-w-sm text-sm leading-relaxed text-white/90 sm:text-base">
						{description}
					</p>

					<div class="mt-6 flex flex-wrap items-center gap-3">
						<a
							href={primaryHref}
							target={primaryTarget || undefined}
							rel={primaryRel || undefined}
							class="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 py-2 text-sm font-medium text-stone-900 transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-stone-100 motion-reduce:transform-none motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
						>
							{primaryLabel}
						</a>

						<a
							href={secondaryHref}
							class="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 motion-reduce:transform-none motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
						>
							{secondaryLabel}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
