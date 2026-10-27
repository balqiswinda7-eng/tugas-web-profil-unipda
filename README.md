# Portfolio Balqis Winda Amaliah

Website portfolio one-page yang dibuat dengan **HTML, CSS, dan JavaScript** murni plus **Bootstrap 5.3**. Tampilannya bergaya *glassmorphism* (kartu kaca transparan) dengan latar gambar bertema jaringan futuristik.

## Bagian Website

| Bagian | Isi |
|---|---|
| Home | Sapaan, nama, deskripsi singkat, foto profil |
| About | Tentang saya |
| Skills | JavaScript, Python, PostgreSQL, Git & GitHub |
| Projek | Sistem Inventaris Toko Sembako (Python, CustomTkinter, SQLite) |
| Kontak | Email, telepon, lokasi, dan media sosial |

## Fitur

- Navbar menempel di atas dan link-nya menandai bagian yang sedang dilihat
- Animasi muncul saat di-scroll (Intersection Observer API, tanpa library animasi)
- Responsif untuk layar HP sampai desktop (Bootstrap Grid)

## Struktur Folder

```
portfolio/
├── index.html                                 # Kerangka halaman (HTML)
├── css/
│   └── style.css                              # Semua gaya tampilan (CSS)
├── js/
│   └── script.js                              # Interaksi & animasi (JavaScript)
├── Futuristic_Teal_Network_Constellation.png  # Gambar latar
├── foto-balqis-w.png                          # Foto profil (tambahkan sendiri)
└── README.md
```

Tiga file kode saling terhubung lewat dua baris di `index.html`:

```html
<link rel="stylesheet" href="css/style.css">   <!-- di <head>, setelah Bootstrap -->
<script src="js/script.js"></script>           <!-- di akhir <body>, setelah Bootstrap JS -->
```

> **Penting:** gambar latar dan `foto-balqis-w.png` harus ada di folder yang sama dengan `index.html`, dengan nama **persis sama** (huruf besar-kecil dan tanda `_` berpengaruh). Kalau tidak, latar dan foto tidak tampil.

## Cara Menjalankan

1. Download atau *clone* repository ini.
2. Pastikan `foto-balqis-w.png` sudah ada di folder yang sama dengan `index.html`.
3. Buka `index.html` di browser (klik dua kali, atau pakai ekstensi *Live Server* di VS Code).
4. Butuh koneksi internet, karena Bootstrap, Bootstrap Icons, dan Google Fonts dimuat dari CDN.

## Teknologi

- HTML5, CSS3, JavaScript (Vanilla)
- [Bootstrap 5.3.3](https://getbootstrap.com/) dan [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) via CDN
- Google Fonts: Plus Jakarta Sans, Anton, Great Vibes

## Cara Push ke GitHub

Jalankan di terminal dari dalam folder `portfolio`:

```bash
git init
git add .
git commit -m "Tambah website portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME` dan `NAMA-REPO` dengan milikmu (buat repository kosong dulu di GitHub).

### Menampilkan sebagai website (opsional)

Di repository GitHub: **Settings → Pages → Branch: `main` / folder `/ (root)` → Save**. Setelah beberapa menit, websitenya bisa dibuka lewat link GitHub Pages.

## Pembuat

**Balqis Winda Amaliah**, mahasiswa Sistem Informasi, Universitas PGRI Delta.
