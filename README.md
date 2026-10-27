# Muhammad Bagus Nurhuda — Tech Portfolio

Portofolio personal interaktif berbasis **React + Vite** yang disusun mengikuti PRD *Personal Portfolio & Interactive Tech Showcase*.

## Hasil yang tersedia

- Landing page dengan headline, CTA, dan ilustrasi sistem.
- Toggle **Dark / Light Mode**.
- Terminal CLI simulator dengan status jaringan/server yang berganti otomatis (simulasi frontend, bukan pemeriksaan server sungguhan).
- About, timeline perjalanan, showcase empat proyek dengan modal studi kasus.
- Matriks kemampuan teknis berdasarkan kategori PRD.
- Labs & Academy untuk sertifikasi/pengajaran.
- Kontak melalui email, tautan sosial, serta tombol salin email.
- Layout responsif untuk desktop, tablet, dan ponsel.
- Meta description dan Open Graph dasar untuk SEO/share preview.

> **Catatan konten:** nama proyek, ringkasan, teknologi, dan kategori sertifikasi mengikuti PRD. Alamat email dan link sosial pada template masih placeholder/contoh. Ganti dengan informasi resmi sebelum website dipublikasikan. Jangan mengklaim sertifikasi aktif atau statistik pelatihan tanpa verifikasi dokumen/data.

## Teknologi

- React 18
- Vite 6
- Lucide React
- CSS responsif (tanpa backend wajib)

## Menjalankan secara lokal

Prasyarat: Node.js 20+ dan npm.

```bash
# 1. Ekstrak project, lalu masuk ke foldernya
cd bagus-portfolio

# 2. Instal dependency
npm install

# 3. Jalankan development server
npm run dev
```

Buka alamat lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

Uji hasil production:

```bash
npm run build
npm run preview
```

File siap deploy dibuat di folder `dist/`.

## Kustomisasi sebelum deploy

1. **Email:** cari `hello@bagusnurhuda.dev` di `src/main.jsx`, lalu ganti dengan email aktif.
2. **GitHub / LinkedIn:** ganti URL placeholder pada bagian Contact dengan profil pribadi.
3. **CV:** tambahkan PDF CV ke `public/cv-muhammad-bagus-nurhuda.pdf`, lalu tambahkan CTA unduh yang menunjuk ke `/cv-muhammad-bagus-nurhuda.pdf`. Tombol CV sengaja belum ditampilkan karena file CV belum disertakan.
4. **Proyek:** perbarui array `projects` di `src/main.jsx`; tambahkan link demo/repository dan screenshot proyek nyata jika sudah tersedia.
5. **Sertifikasi:** pastikan status dan masa berlaku MikroTik Trainer, MTCRE, dan MTCNA benar sebelum dipublikasikan.
6. **Kontak form:** template menggunakan `mailto:` dan tombol salin email, belum memakai backend/form submission. Untuk form online, hubungkan layanan seperti Netlify Forms atau API dengan spam protection.
7. **Terminal:** merupakan simulasi visual. Jangan tampilkan sebagai monitoring server live kecuali telah dihubungkan ke API yang benar-benar mengumpulkan data.

## Deploy ke Netlify

### Opsi A — lewat GitHub (disarankan)

1. Buat repository baru di GitHub, misalnya `bagus-portfolio`.
2. Upload/push seluruh isi project ke repository.
3. Login ke [Netlify](https://app.netlify.com/).
4. Pilih **Add new site → Import an existing project**.
5. Hubungkan GitHub, lalu pilih repository `bagus-portfolio`.
6. Atur build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Klik **Deploy site**. Netlify akan memberi URL seperti `nama-situs.netlify.app`.
8. Setiap push ke branch yang terhubung akan memicu deploy baru secara otomatis.

### Opsi B — deploy manual

1. Jalankan `npm install` lalu `npm run build` di komputer.
2. Login ke Netlify.
3. Buka **Deploy manually** / halaman deploy situs.
4. Seret folder `dist/` ke area upload Netlify.
5. Setelah deploy berhasil, buka URL yang diberikan.

### Custom domain & HTTPS

Di pengaturan situs Netlify, buka **Domain management** untuk menambahkan domain. Ikuti instruksi DNS dari Netlify dan tunggu propagasi. Aktifkan/cek sertifikat HTTPS yang dikelola Netlify. Jangan menambahkan record DNS berdasarkan tebakan; ikuti nilai yang ditampilkan dashboard.

## Deploy ke GitHub Pages

Project ini sudah menyertakan workflow GitHub Actions di `.github/workflows/deploy.yml`.

1. Buat repository GitHub dan push semua file project.
2. Di repository, buka **Settings → Pages**.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Pastikan branch default repository bernama `main`. Jika memakai nama lain, sesuaikan trigger `branches` pada file workflow.
5. Push perubahan ke `main` (atau jalankan workflow secara manual lewat tab **Actions**).
6. Setelah workflow selesai, URL GitHub Pages akan terlihat di **Settings → Pages**.

Workflow membangun project dengan Vite lalu mengunggah folder `dist/`. Untuk repository project Pages, workflow mengatur `base` secara otomatis menggunakan nama repository. Jika memakai custom domain, konfigurasi domain di GitHub Pages dan DNS sesuai instruksi GitHub.

## File konfigurasi deployment

- `netlify.toml` — build command dan folder publish Netlify.
- `.github/workflows/deploy.yml` — build & deploy otomatis ke GitHub Pages.
- `vite.config.js` — konfigurasi Vite.

## Checklist rilis

- [ ] Ganti email, GitHub, dan LinkedIn dengan tautan resmi.
- [ ] Tambahkan CV PDF jika ingin menyediakan unduhan CV.
- [ ] Periksa isi dan status sertifikasi.
- [ ] Tambahkan tautan repository/demo yang boleh dipublikasikan.
- [ ] Jalankan `npm run build` dan cek website di mobile.
- [ ] Uji tombol kontak dan salin email.
- [ ] Jika memakai formulir online, aktifkan validasi, rate limit/spam protection, dan jangan menyimpan secret API di frontend.
- [ ] Tambahkan custom domain dan pastikan HTTPS aktif jika diperlukan.

## Struktur project

```text
bagus-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
└── README.md
```

## Lisensi

Template personal portfolio. Sesuaikan isi, identitas, dan aset sebelum penggunaan publik.
