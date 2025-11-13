// Lightweight image protection: blocks right-click, long-press callouts, and dragging on images
(function() {
  try {
    // Disable context menu on images and inside the lightbox area
    document.addEventListener('contextmenu', function(e) {
      const t = e.target;
      if (!t) return;
      if (t.closest && (t.closest('img, picture, svg, canvas, .lightbox'))) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { capture: true });

    // Prevent dragging of images
    function disableDrag(img) {
      if (!img || img.nodeType !== 1) return;
      img.setAttribute('draggable', 'false');
      img.addEventListener('dragstart', function(e) { e.preventDefault(); }, { passive: false });
    }

    // Apply to existing images
    Array.prototype.forEach.call(document.querySelectorAll('img, picture img'), disableDrag);

    // Observe future images that might be added dynamically
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches && (node.matches('img') || node.matches('picture img'))) disableDrag(node);
          if (node.querySelectorAll) Array.prototype.forEach.call(node.querySelectorAll('img, picture img'), disableDrag);
        }
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Optional: reduce some save/print shortcuts while focused on the page
    // (kept minimal to avoid affecting normal browsing)
    document.addEventListener('keydown', function(e) {
      const key = (e.key || '').toLowerCase();
      if ((e.ctrlKey || e.metaKey) && (key === 's' || key === 'p')) {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  } catch (_) { /* no-op */ }
})();

