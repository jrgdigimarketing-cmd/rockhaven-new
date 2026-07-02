const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function scrollDamp(node, options = {}) {
	const intensity = options.intensity ?? 8;
	const scale = options.scale ?? 1.02;
	const easing = options.easing ?? 0.08;
	const rootMargin = options.rootMargin ?? '20% 0px';
	const threshold = options.threshold ?? 0.01;

	let currentY = 0;
	let targetY = 0;
	let frameId = 0;
	let observer;
	let active = false;

	const setRestingState = () => {
		node.style.setProperty('--scroll-damp-y', '0px');
		node.style.setProperty('--scroll-damp-scale', String(scale));
	};

	const measureTarget = () => {
		const rect = node.getBoundingClientRect();
		const viewportCenter = window.innerHeight / 2 || 1;
		const elementCenter = rect.top + rect.height / 2;
		const normalizedDistance = (elementCenter - viewportCenter) / viewportCenter;

		targetY = clamp(-normalizedDistance * intensity, -intensity, intensity);
	};

	const step = () => {
		currentY += (targetY - currentY) * easing;
		node.style.setProperty('--scroll-damp-y', `${currentY.toFixed(2)}px`);

		if (Math.abs(targetY - currentY) < 0.05) {
			currentY = targetY;
			node.style.setProperty('--scroll-damp-y', `${currentY.toFixed(2)}px`);
			frameId = 0;
			return;
		}

		frameId = window.requestAnimationFrame(step);
	};

	const requestUpdate = () => {
		if (!active) return;

		measureTarget();

		if (!frameId) {
			frameId = window.requestAnimationFrame(step);
		}
	};

	const onScroll = () => {
		requestUpdate();
	};

	const onResize = () => {
		requestUpdate();
	};

	if (prefersReducedMotion()) {
		setRestingState();

		return {
			destroy() {}
		};
	}

	setRestingState();

	observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				if (!active) {
					active = true;
					window.addEventListener('scroll', onScroll, { passive: true });
					window.addEventListener('resize', onResize);
				}

				requestUpdate();
				return;
			}

			active = false;
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);

			if (frameId) {
				window.cancelAnimationFrame(frameId);
				frameId = 0;
			}
		},
		{
			threshold,
			rootMargin
		}
	);

	observer.observe(node);

	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			if (frameId) {
				window.cancelAnimationFrame(frameId);
			}
			observer?.disconnect();
		}
	};
}
