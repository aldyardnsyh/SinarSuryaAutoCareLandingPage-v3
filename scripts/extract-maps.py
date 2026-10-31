# One-off: ekstrak data bisnis (telepon, alamat, jam, rating, foto, ulasan)
# dari HTML halaman Google Maps (APP_INITIALIZATION_STATE).
import json
import re
import sys

html = open(sys.argv[1], encoding="utf-8", errors="ignore").read()
m = re.search(r"window\.APP_INITIALIZATION_STATE=(.*?);window\.APP_FLAGS", html, re.S)
if not m:
    sys.exit("APP_INITIALIZATION_STATE tidak ditemukan")
data = m.group(1)

for pat in [r"\+62[\d\- ]{8,14}", r"022[\- ]\d{7,8}", r"Jl\.[^\"\\]{5,120}"]:
    print(pat, "->", sorted(set(re.findall(pat, data)))[:10])

photos = sorted(set(re.findall(r"lh3\.googleusercontent\.com/p/[A-Za-z0-9_\-]+", data)))
print("foto ulasan unik:", len(photos))
for p in photos[:40]:
    print("  ", p)

# Cari blok metadata bengkel (rating, jumlah ulasan, jam)
for kw in ["Sinar Surya", "Auto Care", "Bojongsoang"]:
    idxs = [mm.start() for mm in re.finditer(re.escape(kw), data)][:3]
    for i in idxs:
        print(f"--- ctx {kw} @{i} ---")
        print(data[max(0, i - 120): i + 400].replace("\\", "")[:520])
