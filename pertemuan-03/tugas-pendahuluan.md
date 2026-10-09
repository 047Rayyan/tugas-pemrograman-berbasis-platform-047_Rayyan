# Tugas Pendahuluan Pertemuan 3
## CSS Framework dan Authentication vs Authorization

**Nama:** Rayyan  
**NIM:** 2024520047  
**Program Studi:** Informatika

## 1. Perbandingan Bootstrap dan Tailwind CSS

Bootstrap menggunakan pendekatan component-based dengan class seperti `.card`, `.card-body`, `.card-title`, `.card-text`, dan `.btn-primary`. Sementara itu, Tailwind CSS menggunakan pendekatan utility-first dengan class seperti `flex`, `p-6`, `rounded-xl`, `bg-white`, dan `shadow-lg`. Menurut saya, Bootstrap lebih mudah digunakan oleh pemula karena menyediakan komponen siap pakai sehingga pembuatan tampilan dasar menjadi lebih sederhana.

## 2. Rancangan Kartu Biodata

### Sketsa kartu

```text
+---------------------------+
|          [Foto]           |
|                           |
|          Rayyan           |
|         NIM: 047           |
|                           |
|       [Lihat Profil]      |
+---------------------------+
```

### A. Versi component-based menggunakan Bootstrap

```html
<div class="card">
  <img src="foto.jpg" class="card-img-top" alt="Foto Rayyan">
  <div class="card-body">
    <h5 class="card-title">Rayyan</h5>
    <p class="card-text">NIM: 047</p>
    <a href="#" class="btn btn-primary">Lihat Profil</a>
  </div>
</div>
```

Aturan CSS manual yang diperlukan adalah **0 aturan**, dengan asumsi Bootstrap sudah dimuat dan komponen menggunakan tampilan bawaan framework.

### B. Versi utility-first menggunakan Tailwind CSS

```html
<div class="max-w-sm rounded-xl bg-white p-6 shadow-lg">
  <img src="foto.jpg" class="size-24 rounded-full mx-auto" alt="Foto Rayyan">
  <h2 class="mt-4 text-xl font-bold text-center">Rayyan</h2>
  <p class="text-center text-gray-500">NIM: 047</p>
  <button class="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white">
    Lihat Profil
  </button>
</div>
```

Contoh tersebut menggunakan 21 kemunculan utility class pada atribut `class`. Versi Tailwind memudahkan perubahan warna karena utility class untuk warna latar dan teks dapat langsung diganti tanpa membuat aturan CSS tambahan.

## 3. Pengamatan Token JWT

Token yang diberikan terdiri dari tiga bagian, yaitu header, payload, dan signature. Data yang terlihat pada payload adalah `sub` bernilai `1234567890`, `name` bernilai `John Doe`, dan `iat` bernilai `1516239022`. Password tidak boleh disimpan dalam payload JWT karena payload dapat dibaca setelah didekode, sehingga data rahasia harus tetap dilindungi.

## 4. Analogi Gerbang Kampus

Pemeriksaan identitas di gerbang UNIRA merupakan contoh authentication karena petugas memastikan identitas orang yang memasuki kampus. Pemeriksaan izin di depan ruang server laboratorium merupakan contoh authorization karena petugas menentukan apakah orang tersebut berhak memasuki ruangan. Contohnya, mahasiswa berhasil menunjukkan identitas yang valid, tetapi tidak diizinkan masuk ruang server karena tidak memiliki hak akses.

## 5. Peran dalam Aplikasi Nyata

Saya memilih aplikasi e-library dengan tiga peran, yaitu anggota, pustakawan, dan pimpinan. Anggota dapat mencari dan meminjam buku, pustakawan dapat menambah katalog buku, sedangkan pimpinan dapat melihat rekap pengadaan.

| Kondisi | Respons HTTP | Alasan |
|---|---|---|
| Pengguna belum login atau token tidak valid | `401 Unauthorized` | Identitas pengguna belum berhasil diverifikasi. |
| Pengguna sudah login tetapi tidak memiliki izin | `403 Forbidden` | Identitas pengguna sudah diketahui, tetapi hak aksesnya tidak mencukupi. |

Authentication digunakan untuk memverifikasi identitas pengguna, sedangkan authorization digunakan untuk memeriksa hak akses pengguna terhadap fitur tertentu.