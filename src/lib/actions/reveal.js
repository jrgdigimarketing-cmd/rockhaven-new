const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function reveal(node) {
  if (prefersReducedMotion()) {
    return {};
  }

  node.classList.add('reveal-on-scroll');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('reveal-on-scroll--visible');
        observer.disconnect();
      }
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
