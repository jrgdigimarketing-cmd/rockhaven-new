<script>
  import { onMount } from 'svelte';

  export let poster = '';
  export let mobilePoster = '';
  export let videoMp4 = '';
  export let videoWebm = '';
  export let className = '';

  let loadVideo = false;
  let videoReady = false;
  let videoEl;

  const canUseVideo = () => {
    if (typeof window === 'undefined' || !videoMp4) return false;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reducedData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = Boolean(connection?.saveData);
    const slowConnection = Boolean(
      connection && ['slow-2g', '2g'].includes(connection.effectiveType)
    );

    // Keep the experience poster-first for reduced-motion, low-data, and small-screen users.
    return !reducedMotion && !reducedData && !isSmallScreen && !saveData && !slowConnection;
  };

  const updateVideoState = () => {
    const shouldLoadVideo = canUseVideo();

    loadVideo = shouldLoadVideo;

    if (!shouldLoadVideo) {
      videoReady = false;

      if (videoEl) {
        videoEl.pause();
      }
    }
  };

  const handlePlaying = () => {
    // Only fade the video in once playback has actually started.
    videoReady = true;
  };

  onMount(() => {
    updateVideoState();

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const connection =
      navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const handlePreferenceChange = () => updateVideoState();

    if (reducedMotionQuery.addEventListener) {
      reducedMotionQuery.addEventListener('change', handlePreferenceChange);
      mobileQuery.addEventListener('change', handlePreferenceChange);
    } else {
      reducedMotionQuery.addListener(handlePreferenceChange);
      mobileQuery.addListener(handlePreferenceChange);
    }

    if (connection?.addEventListener) {
      connection.addEventListener('change', handlePreferenceChange);
    }

    return () => {
      if (reducedMotionQuery.removeEventListener) {
        reducedMotionQuery.removeEventListener('change', handlePreferenceChange);
        mobileQuery.removeEventListener('change', handlePreferenceChange);
      } else {
        reducedMotionQuery.removeListener(handlePreferenceChange);
        mobileQuery.removeListener(handlePreferenceChange);
      }

      if (connection?.removeEventListener) {
        connection.removeEventListener('change', handlePreferenceChange);
      }
    };
  });
</script>

<div class={`absolute inset-0 overflow-hidden ${className}`}>
  <picture>
    {#if mobilePoster}
      <source media="(max-width: 767px)" srcset={mobilePoster} />
    {/if}

    <img
      src={poster}
      alt=""
      aria-hidden="true"
      loading="eager"
      decoding="async"
      fetchpriority="high"
      class="absolute inset-0 h-full w-full object-cover object-center"
    />
  </picture>

  {#if loadVideo}
    <video
      bind:this={videoEl}
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      poster={poster}
      aria-hidden="true"
      tabindex="-1"
      class={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out motion-reduce:transition-none ${
        videoReady ? 'opacity-100' : 'opacity-0'
      }`}
      on:playing={handlePlaying}
    >
      {#if videoWebm}
        <source src={videoWebm} type="video/webm" />
      {/if}

      <source src={videoMp4} type="video/mp4" />
    </video>
  {/if}
</div>
