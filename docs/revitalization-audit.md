# Audit revitalisasi Bestpath Network

Tanggal pemeriksaan: 18 November 2026. Versi dan advisory di bawah berdasarkan registry npm yang tersedia saat pemeriksaan; verifikasi ulang sebelum implementasi.

## Ringkasan keputusan

Aplikasi sudah menggunakan Next.js 15.5.4 dan React/React DOM 19.1.1 pada lockfile, bukan masih Next.js 13/14. Namun versi Next.js tersebut terdampak advisory critical. Referensi deklarasi: [manifest dependensi](../package.json:11), [lockfile](../package-lock.json).

Rekomendasi: lakukan pemulihan keamanan dan baseline fungsi terlebih dahulu, lalu migrasi mayor terpisah. Jalur perubahan minimum adalah Next.js 15.5.29; kandidat target akhir adalah Next.js 16.4.6. Jangan menggabungkan upgrade framework, Tailwind mayor, TypeScript mayor, dan redesign dalam satu perubahan.

**Belum ada upgrade atau perubahan kode aplikasi yang dilakukan.** Laporan ini adalah hasil pemindaian dan rencana pekerjaan, bukan hasil pengujian aplikasi yang sudah dimigrasikan.

## Lingkup dan batas pemeriksaan

- Memeriksa manifest, lockfile, konfigurasi, custom server, 188 berkas sumber aplikasi, serta pola route dan impor.
- Menjalankan audit dependensi berdasarkan lockfile dan membaca metadata versi dari registry npm. Tidak menjalankan perbaikan otomatis.
- Audit melaporkan **16 paket terdampak: 1 critical, 11 high, 4 moderate**. Ini jumlah paket, bukan jumlah CVE atau jumlah jalur eksploitasi yang terbukti.
- Runtime lokal: Node.js 20.20.0, npm 10.8.2. Runtime produksi belum diketahui.
- Dependensi belum terpasang di workspace. Build, pemeriksaan tipe, lint, pengujian browser, serta pengujian produksi belum dijalankan.
- Tidak mengaudit konfigurasi akun Google Cloud, reverse proxy, host produksi, secret produksi, atau log insiden.
- Pemeriksaan impor relatif hanya memeriksa keberadaan target, bukan analisis bundler lengkap atau perbedaan kapitalisasi pada deployment Linux.

## P0 — Perbaikan segera sebelum deployment publik berikutnya

### 1. Patch Next.js dan periksa risiko deployment aktif

Saat ini: Next.js 15.5.4. Kandidat patch minimal: **15.5.29**. Kandidat mayor stabil: **16.4.6**.

Temuan penting dari registry:

- [RCE pada protokol React Flight](https://github.com/advisories/GHSA-9qr9-h5gf-34mp), critical; versi saat ini termasuk rentang terdampak.
- [RCE pada server yang di-host di Windows](https://github.com/advisories/GHSA-p293-qw3h-jr36), critical; relevansinya bergantung pada OS server produksi, bukan sekadar OS workstation.
- [RCE terkait SVG pada Image Optimization API](https://github.com/advisories/GHSA-2464-fhr4-w9xw), critical; kondisi eksploitasi harus diverifikasi terhadap deployment.
- Advisory lain meliputi DoS Server Components, cache poisoning, serta SSRF pada konfigurasi tertentu.

Jangan menganggap tidak adanya Server Action buatan aplikasi cukup untuk mengesampingkan risiko React Server Components. Aplikasi menggunakan App Router.

Jika versi rentan sedang aktif di internet: prioritaskan patch dan redeploy. Tinjau log, aktivitas host, dan secret yang dapat diakses proses. Jika ada indikasi kompromi, lakukan respons insiden, rotasi kredensial terkait, dan rebuild dari lingkungan bersih; patch tidak membatalkan kompromi yang sudah terjadi.

### 2. Perbarui pemrosesan gambar dan periksa dependensi turunan

[Sharp yang dideklarasikan](../package.json:22) terkunci pada 0.34.4. Audit merekomendasikan **0.35.5**, termasuk perbaikan libvips, libheif, dan librsvg. Contoh [advisory librsvg](https://github.com/advisories/GHSA-wq5f-xc86-pv6w).

- Next.js 15.5.29 mendukung Sharp melalui rentang 0.34.3 atau 0.35.5 ke atas pada cabang masing-masing.
- Sharp 0.35.5 membutuhkan Node.js minimal 20.9.0; runtime lokal memenuhi syarat minimum, tetapi runtime produksi perlu dikonfirmasi.
- Uji optimasi gambar, SVG lokal, aset statis, serta instalasi binary native di platform deployment.

**Catatan penting PostCSS:** Next.js 15.5.29 masih mendeklarasikan PostCSS 8.4.31 secara tepat. Memperbarui PostCSS langsung di aplikasi tidak otomatis mengganti salinan internal Next.js. Audit saat ini menemukan dua lokasi PostCSS terdampak. [Advisory pembacaan source map](https://github.com/advisories/GHSA-6g55-p6wh-862q).

PostCSS terbaru yang teramati adalah 8.5.33. Next.js 16.4.6 mendeklarasikan PostCSS 8.5.23, di luar rentang advisory PostCSS yang ditemukan pada audit ini. Tetap audit ulang hasil resolusi akhir. Jika sementara bertahan di Next.js 15, evaluasi perbaikan upstream atau override yang sangat terarah hanya setelah uji kompatibilitas; jangan memaksakan override global tanpa validasi.

### 3. Hapus dependensi tidak terpakai atau patch jika dipertahankan

Pencarian penggunaan sumber dan konfigurasi tidak menemukan penggunaan paket berikut:

- Axios 1.12.2: audit high; kandidat versi terbaru yang teramati **1.21.1**. Utamakan penghapusan jika memang tidak digunakan. [Contoh advisory](https://github.com/advisories/GHSA-3p68-rc4w-qgx5).
- node-fetch: tidak ditemukan penggunaan; gunakan kemampuan fetch bawaan platform bila kelak diperlukan.
- Google Maps React API dan use-places-autocomplete: tidak ditemukan penggunaan; peta saat ini berupa iframe.
- wp-scripts 0.0.1-security: registry menyatakan **security holding package**, bukan tool WordPress yang aktif. Hapus jika tidak diperlukan; keberadaan paket ini sendiri bukan bukti malware aktif.
- DaisyUI: tidak ditemukan penggunaan langsung, plugin, atau kelas komponen khas pada pemindaian. Konfirmasi tampilan sebelum menghapus.

Referensi: [daftar dependensi](../package.json:11), [peta saat ini](../app/components/map/page.tsx:20), [konfigurasi Tailwind](../tailwind.config.ts:48), [stylesheet global](../app/globals.css:1).

Pembaruan lockfile juga perlu menangani temuan transitif: baseline-browser-mapping, brace-expansion, browserslist, follow-redirects, form-data, glob, minimatch, nanoid, picomatch, postcss-selector-parser, source-map-js, dan yaml. Temuan tooling/build tidak otomatis dapat dieksploitasi lewat request publik; pisahkan penilaian eksposur dari severity registry.

### 4. Batasi kunci Google Maps

Kunci Google Maps tertulis langsung pada [alamat iframe peta](../app/components/map/page.tsx:23).

- Verifikasi HTTP referrer restrictions untuk domain produksi/staging dan API restrictions hanya untuk API yang digunakan.
- Periksa kuota, billing alert, dan riwayat penggunaan. Ganti kunci bila tidak dibatasi atau ada penyalahgunaan.
- Pindahkan nilai ke konfigurasi lingkungan agar pengelolaan deployment lebih baik; kunci iframe tetap terlihat oleh browser. Environment variable bukan cara menyembunyikan kunci publik.
- Tambahkan contoh konfigurasi tanpa nilai asli. Perluas aturan ignore agar berkas environment berisi secret tidak ikut ter-commit; [aturan saat ini](../.gitignore:29) hanya mencakup varian lokal.
- Tambahkan judul iframe untuk aksesibilitas. CSS inline yang disisipkan di komponen ini berupa string statis; pemindaian tidak membuktikan adanya XSS dari input pengguna.

## P1 — Pulihkan fungsi dan kesiapan upgrade

### 5. Perbaiki route training sebelum menetapkan baseline lulus

- **Detail H3C:** nama parameter yang dibaca berbeda kapitalisasi dari segmen direktori. [Deklarasi dan pencarian ID](../app/training-class/h3c-class/[kelas_h3c_id]/page.tsx:6). Dampak berdasarkan kode: ID tidak cocok dan halaman menampilkan pesan kelas tidak ditemukan.
- **Daftar Huawei:** halaman daftar mengharapkan ID yang hanya tersedia pada route detail. [Pencarian ID pada halaman daftar](../app/training-class/huawei-class/page.tsx:5). Pulihkan daftar kelas menggunakan pola daftar vendor yang sudah ada, bukan abstraksi baru.
- Halaman daftar H3C dan Mikrotik juga menerima parameter ID yang tidak diperlukan. Referensi: [daftar H3C](../app/training-class/h3c-class/page.tsx:7), [daftar Mikrotik](../app/training-class/mikrotik-class/page.tsx:5).
- Gunakan respons 404 framework untuk ID tidak valid; jangan hanya menampilkan pesan gagal dengan status sukses. Tinjau seluruh detail training, ebook, dan anggota tim.
- Banyak route detail sudah menunggu parameter asinkron; migrasi Next.js 15 tidak perlu ditulis ulang secara menyeluruh. Pertahankan implementasi yang benar.

### 6. Selesaikan impor yang targetnya tidak ditemukan

Pemindaian awal menemukan sembilan referensi relatif tanpa target, tetapi satu ternyata hanya komentar. Setelah verifikasi, ada **8 referensi impor aktif yang targetnya tidak tersedia**:

- [Referensi tombol pada logo cadangan](../app/components/bak/logo/Logo.tsx:5) sudah dikomentari dan **bukan impor aktif atau masalah build**; dikeluarkan dari jumlah temuan.
- Empat referensi pada [koleksi gambar cadangan](../app/components/Bpn_imgs_asli.tsx:54): dua logo sertifikasi Juniper dan dua gambar Moses.
- Empat wrapper gambar: [Juniper JNCIA](../app/components/icon-component/juniper_jncia_ico.tsx:2), [Juniper JNCIS](../app/components/icon-component/juniper_jncis_ico.tsx:2), [Moses lingkaran](../app/components/icon-component/moses_circle_img.tsx:2), [Moses](../app/components/icon-component/moses_img.tsx:2).

Sebagian tampaknya kode lama yang tidak direferensikan. Tentukan keterpakaiannya dahulu; pulihkan aset asli atau hapus kode mati yang disetujui. Jangan mengganti aset dengan placeholder sembarang. Dampak build belum diverifikasi.

### 7. Rapikan route komponen yang tidak disengaja

Ada 40 berkas halaman, termasuk komponen navigasi, footer, peta, carousel, dan komponen cadangan. Penempatan berkas halaman di dalam direktori aplikasi membuatnya ikut menjadi route, bukan sekadar komponen impor.

Contoh: [footer](../app/components/footer/page.tsx), [navigasi](../app/components/navigation/navbar/page.tsx), [navigasi cadangan](../app/components/bak/navbar/page.tsx).

Untuk komponen yang tidak dimaksudkan sebagai halaman, ubah ke nama berkas komponen biasa dan sesuaikan import, atau gunakan direktori privat framework bila sesuai. Inventarisasi URL dan kebutuhan redirect dahulu. Arsip training di direktori sumber adalah masalah kebersihan repository; keberadaannya di sana **tidak otomatis berarti arsip disajikan sebagai unduhan publik**.

[Ebook client yang sudah tersedia](../app/ebook/[ebookId]/EbookPageClient.tsx:12) memiliki tampilan yang sangat mirip dengan [halaman ebook aktif](../app/ebook/[ebookId]/page.tsx:27). Evaluasi penggunaan ulang saat memisahkan validasi ID server dan interaksi browser; jangan membuat komponen paralel ketiga.

### 8. Perbaiki startup dan runtime deployment

[Perintah startup](../package.json:8) memakai sintaks assignment environment POSIX, sehingga tidak kompatibel langsung dengan shell cmd Windows.

[Custom server](../server.js:1) berisi contoh penanganan dua route yang tidak terlihat ada di aplikasi, membaca port environment dengan huruf kecil, dan belum menunjukkan kebutuhan khusus yang mengharuskan custom server.

- Verifikasi kebutuhan hosting terlebih dahulu. Bila tidak diperlukan, gunakan startup produksi standar Next.js tanpa menambah dependensi lintas platform hanya untuk assignment environment.
- Bila custom server wajib, perbaiki pemilihan port, konfigurasi produksi, startup error, serta integrasi reverse proxy sesuai platform sebenarnya.
- Standarkan runtime pada Node.js LTS yang masih didukung, misalnya jalur 24, dan selaraskan [tipe Node](../package.json:27). Node.js 20 lokal memenuhi syarat teknis minimum sebagian paket, tetapi bukan target pemeliharaan jangka panjang pada tanggal audit.
- Nyatakan versi runtime/package manager dan gunakan instalasi reproducible berbasis lockfile pada CI/deployment.

### 9. Pulihkan tooling kualitas

[Perintah lint](../package.json:9) masih memakai integrasi lint lama dan manifest tidak mendeklarasikan ESLint. Pada Next.js 16 perintah lint bawaan dihapus; gunakan ESLint CLI dan konfigurasi yang sesuai framework. Ini dependensi tooling yang bernilai jelas, bukan alasan menambah banyak tool sekaligus.

Belum ditemukan test suite atau konfigurasi CI. Tambahkan pemeriksaan tipe, lint, build, dan smoke test route utama. [TypeScript](../package.json:33) terkunci pada 5.3.3; perbarui dalam jalur 5 terlebih dahulu setelah kompatibilitas diverifikasi, bukan langsung ke versi mayor registry terbaru 7.0.2.

## P2 — Modernisasi terpisah setelah aplikasi stabil

- **React:** selaraskan React dan React DOM. Kandidat patch minimum cabang yang sama: **19.1.10**; kandidat stabil terbaru **19.3.1**. Sesuaikan paket tipe dan uji dependensi UI. Memperbarui React langsung saja tidak menggantikan patch framework/RSC.
- **Styling:** Tailwind saat ini 3.4.17; kandidat pembaruan cabang 3 adalah **3.4.19**. DaisyUI 5 dirancang untuk integrasi Tailwind 4, tetapi saat ini tidak terpasang sebagai plugin. Jangan memigrasikan Tailwind 4 hanya untuk mempertahankan paket yang ternyata tidak digunakan.
- **UI:** kandidat pembaruan minor yang teramati untuk Headless UI adalah 2.2.10; uji dropdown, keyboard, fokus, dan menu mobile setelah update.
- **SEO:** metadata per halaman detail, canonical, sitemap, robots, serta status 404 yang benar. [Metadata saat ini](../app/layout.tsx:9) masih global.
- **Aksesibilitas dan performa:** fokus keyboard, judul iframe, reduced-motion untuk auto-scroll, ukuran gambar, serta dampak carousel global terhadap halaman detail. Prioritaskan berdasarkan pengujian, bukan refactor massal.
- Tambahkan pembaruan dependensi otomatis berkala dan dokumentasikan deployment serta rollback pada [panduan proyek](../README.md).

## Urutan implementasi yang disarankan

1. Buat branch pemulihan, catat deployment aktif, backup konfigurasi, dan siapkan rollback.
2. Konfirmasi runtime/hosting produksi serta pembatasan kunci Google Maps. Jika deployment aktif rentan, lakukan pembatasan akses sementara sesuai tingkat risikonya.
3. Patch Next.js ke 15.5.29 dan Sharp ke 0.35.5, selaraskan patch React/React DOM, hapus dependensi tidak terpakai yang telah diverifikasi, lalu perbarui resolusi transitif.
4. Audit ulang seluruh dependensi dan dependensi produksi. Tangani PostCSS internal secara eksplisit; jangan menandai tahap aman hanya karena versi Next.js sudah berubah.
5. Perbaiki route H3C/Huawei, impor hilang yang relevan, penanganan ID tidak valid, dan startup Windows. Pasang tooling tipe/lint minimal dan buat baseline build yang dapat diulang.
6. Dalam perubahan terpisah, migrasikan ke Next.js 16.4.6: ganti tooling lint, uji bundler default dan impor aset, pertahankan API request asinkron, serta validasi library UI/React. Jangan aktifkan fitur caching eksperimental hanya karena tersedia.
7. Jalankan pengujian penerimaan, deploy ke staging, lalu produksi dengan rollback siap. Migrasi Tailwind mayor dan redesign dilakukan sesudahnya.

Jika tim memilih langsung Next.js 16 untuk mengurangi pekerjaan dua kali, tetap pecah perubahan keamanan, perbaikan fungsi, dan modernisasi visual ke commit terpisah. Kelulusan build dan pengujian tetap menjadi syarat, bukan asumsi.

## Kriteria selesai sebelum rilis

- Tidak ada advisory critical/high yang belum ditangani pada jalur produksi; temuan tersisa didokumentasikan dengan alasan keterpaparan, mitigasi, pemilik, dan tenggat.
- Lockfile terbarui dan instalasi bersih berhasil pada runtime serta OS deployment yang ditetapkan.
- Pemeriksaan tipe, lint, dan build produksi lulus tanpa menonaktifkan pemeriksaan untuk menyembunyikan error.
- Startup produksi bekerja di Windows bila itu target operasional, dan tetap sesuai hosting produksi sebenarnya.
- Halaman utama, menu mobile/dropdown, daftar semua vendor, detail tiap vendor, ebook, tim, peta, tautan WhatsApp, serta unduhan berfungsi.
- Detail H3C dan daftar Huawei tidak lagi salah menampilkan kelas tidak ditemukan; ID yang benar-benar tidak ada menghasilkan 404.
- Optimasi gambar berjalan, tidak ada aset hilang, tidak ada regresi tampilan utama pada desktop/mobile, dan tidak ada error runtime/hydration yang belum ditangani.
- Kunci Google Maps dibatasi, konfigurasi deployment terdokumentasi tanpa secret asli, dan rollback diuji.

**Kesimpulan:** upgrade ke Next.js 15+ memungkinkan karena fondasinya sudah berada pada Next.js 15. Pekerjaan utamanya adalah mengejar patch keamanan, memperbaiki migrasi parsial dan route yang rusak, memastikan dependensi turunan aman, lalu memvalidasi Next.js 16 sebagai target pemeliharaan berikutnya.
