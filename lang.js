// Minimal language switcher: remembers preference and switches page path
(function() {
  try {
    var path = window.location.pathname || '';
    var isEn = /\/(en)\//.test(path);
    var file = path.split('/').pop() || 'index.html';
    var saved = localStorage.getItem('preferredLang');

    // If user has a saved preference, ensure path matches it
    if (saved === 'en' && !isEn) {
      window.location.replace((path.endsWith('/') ? 'en/index.html' : ('en/' + file)) + window.location.search + window.location.hash);
      return;
    }
    if (saved === 'he' && isEn) {
      window.location.replace('../' + file + window.location.search + window.location.hash);
      return;
    }

    // Wire up the header toggle if present
    document.addEventListener('DOMContentLoaded', function() {
      var switchEl = document.getElementById('langSwitch');
      if (!switchEl) return;
      var current = isEn ? 'en' : 'he';
      switchEl.textContent = isEn ? 'HE' : 'EN';
      switchEl.setAttribute('aria-label', isEn ? 'Switch to Hebrew' : 'Switch to English');
      switchEl.addEventListener('click', function(e){
        e.preventDefault();
        var next = current === 'he' ? 'en' : 'he';
        localStorage.setItem('preferredLang', next);
        var target;
        if (next === 'en') {
          target = isEn ? file : ('en/' + file);
        } else {
          target = isEn ? ('../' + file) : file;
        }
        window.location.href = target + window.location.search + window.location.hash;
      });
    });
  } catch(_) {}
})();

