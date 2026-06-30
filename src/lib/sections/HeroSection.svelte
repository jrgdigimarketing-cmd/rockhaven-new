<script>
	const heroImage = '/images/hero/winterhoek_hero.webp';

	export let title = 'Mountain refuge in the Winterhoek.';
	export let description =
		'Rockhaven is a working farm where the mountains meet solitude. Slow cottages sit out on the land, waiting for those who seek something real.';
	export let primaryLabel = 'Book';
	export let primaryHref = '/contact';
	export let secondaryLabel = 'Explore';
	export let secondaryHref = '/accommodation';
</script>

<section
	aria-labelledby="hero-heading"
	class="relative isolate min-h-[80vh] overflow-hidden"
>
	<img
		src={heroImage}
		alt="Mountain landscape of the Winterhoek Mountains near Rockhaven Farm"
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<div
		class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10"
		aria-hidden="true"
	></div>

	<div
		class="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-between px-5 pb-12 pt-24 sm:px-6 md:pb-16 lg:px-8 lg:pb-20"
	>
		<h1
			id="hero-heading"
			class="max-w-xl font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
		>
			{title}
		</h1>

		<div class="grid gap-8 lg:grid-cols-12 lg:gap-12">
			<div class="hidden lg:block lg:col-span-7"></div>

			<div class="lg:col-span-5 lg:pb-2">
				<p class="max-w-sm text-sm leading-relaxed text-white/90 sm:text-base">
					{description}
				</p>

				<div class="mt-6 flex flex-wrap items-center gap-3">
					<a
						href={primaryHref}
						class="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 py-2 text-sm font-medium text-stone-900 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					>
						{primaryLabel}
					</a>

					<a
						href={secondaryHref}
						class="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					>
						{secondaryLabel}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
