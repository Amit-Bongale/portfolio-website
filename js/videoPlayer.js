
function playvideo () {
  const card = document.getElementById('videoCard');
  const video = document.getElementById('video1');
  const overlay = document.getElementById('playOverlay');

  const CONTROLS_HEIGHT = 64; // adjust if needed
  let lastToggleTime = 0;
  const TOGGLE_DEBOUNCE_MS = 200;

  function isInBottomControlsArea(clientX, clientY) {
    const rect = video.getBoundingClientRect();
    if (!rect) return false;
    // inside video rect?
    if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return false;
    // bottom area heuristic
    return clientY >= (rect.bottom - CONTROLS_HEIGHT);
  }

  function clickedOverNativeControls(clientX, clientY) {
    // Best-effort: ask browser what element is at that point.
    // If element is NOT the video element (or the overlay), assume it's a native control (or other UI)
    try {
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) return false;
      // If element is the overlay, treat it as overlay (overlay has its own handler)
      if (el === overlay || overlay.contains(el)) return false;
      // If element is the video itself, still possible native controls are used (shadow DOM),
      // so also fall back to bottom-area heuristic.
      if (el === video || video.contains(el)) {
        return isInBottomControlsArea(clientX, clientY);
      }
      // If the clicked element is inside the page but not the video, treat it as not toggling
      return true;
    } catch (err) {
      // elementFromPoint can fail in some rare contexts — fallback to bottom-area detection
      return isInBottomControlsArea(clientX, clientY);
    }
  }

  async function safeTogglePlay(clientX = 0, clientY = 0) {
    const now = Date.now();
    if (now - lastToggleTime < TOGGLE_DEBOUNCE_MS) return;
    lastToggleTime = now;

    // If click/tap is on native controls -> do nothing
    if (clickedOverNativeControls(clientX, clientY)) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (err) {
      console.warn('Play/pause programmatic action blocked:', err);
      // If play is blocked, show controls so user can use them manually
      video.controls = true;
    }
  }

  // Overlay click always toggles (overlay intentionally on top of poster)
  overlay.addEventListener('pointerup', (e) => {
    e.stopPropagation();
    // overlay coordinates are reliable
    const cx = e.clientX || (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientX) || 0;
    const cy = e.clientY || (e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY) || 0;
    safeTogglePlay(cx, cy);
  });

  // Use pointerup directly on video for mouse/touch/pointer events
  video.addEventListener('pointerup', (e) => {
    // If pointer event originated from controls (some browsers send events there), ignore
    const cx = e.clientX || 0;
    const cy = e.clientY || 0;
    safeTogglePlay(cx, cy);
  });

  // Also handle keyboard space on focused card (you said spacebar works already)
  card.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      safeTogglePlay();
    }
  });

  // Update overlay visibility on play/pause
  video.addEventListener('play', () => card.classList.add('playing'));
  video.addEventListener('pause', () => card.classList.remove('playing'));
  video.addEventListener('ended', () => card.classList.remove('playing'));

  // Ensure overlay receives pointer events when visible
  overlay.style.pointerEvents = 'auto';

  // Extra: in case the browser hides controls when not interacting, keep controls visible on hover (optional)
  // video.addEventListener('mouseenter', () => video.controls = true);
  // video.addEventListener('mouseleave', () => video.controls = false);
}
playvideo();
