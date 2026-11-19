// Minimal language switcher: remembers preference and switches page path
(function() {
  try {
    var path = window.location.pathname || '';
    var isEn = /\/(en)\//.test(path);
    var file = path.split('/').pop() || 'index.html';
    var translatedFile = isEn ? (file === 'gallery-bm-kotel.html' ? 'bar-mitzvah-kotel.html' : file) : (file === 'bar-mitzvah-kotel.html' ? 'gallery-bm-kotel.html' : file);
    var saved = localStorage.getItem('preferredLang');

    // Default preference is Hebrew unless user explicitly switched
    if (!saved) {
      saved = 'he';
      try { localStorage.setItem('preferredLang', saved); } catch(e) {}
    }

    // Respect direct links to either language; switching is explicit.

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
        try { localStorage.setItem('preferredLang', next); } catch(e) {}
        var target = next === 'en' ? (isEn ? file : ('en/' + translatedFile))
                                   : (isEn ? ('../' + translatedFile) : file);
        window.location.href = target + window.location.search + window.location.hash;
      });
    });
  } catch(_) {}
})();
