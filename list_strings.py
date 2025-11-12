from pathlib import Path
import re, sys, traceback

try:
    text = Path('gallery-events.html').read_text(encoding='utf-8')
    matches = sorted(set(re.findall(r'>[^><]*\?[^><]*<', text)))
    for m in matches:
        print(m.encode('unicode_escape').decode())
except Exception as exc:
    traceback.print_exc()
    sys.exit(1)
