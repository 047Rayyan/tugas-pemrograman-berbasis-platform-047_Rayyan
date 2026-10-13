# Tugas Mandiri 5 — Membandingkan Hashing dan Enkripsi serta Menjaga Kunci Rahasia

## 1. Tujuan

Praktikum ini bertujuan untuk memahami perbedaan hashing dan enkripsi, mengetahui cara kerja salt pada algoritma bcrypt, serta memahami pentingnya menjaga kerahasiaan informasi sensitif seperti `JWT_SECRET`. Praktikum juga mencakup pemeriksaan agar file `.env` dan token JWT tidak ikut tersimpan dalam repositori Git secara tidak sengaja.

## 2. Percobaan Hashing Menggunakan bcrypt

### 2.1 Perintah Pengujian

Pengujian dilakukan menggunakan Node.js dan pustaka `bcryptjs` dengan password yang sama, yaitu `sama`, serta cost factor sebesar `10`.

Perintah yang dijalankan sebanyak dua kali dari root repositori:

```bash
node -e "console.log(require('./pertemuan-03/tugas-mandiri/backend/node_modules/bcryptjs').hashSync('sama', 10))"
```

### 2.2 Hasil Pengujian

**Hash pertama:**

$2a$10$LE77d6zfGbS8LPLYtYt5KuSHxsqyGNARb4hHvu5phUKv7gAmm4IeS

**Hash kedua:**

$2a$10$WA8wygct99Dgd5g4NNgwq.4cySk38rmY0XoyXEDpMj06/xhXRtpiS

### 2.3 Analisis Hasil

Berdasarkan pengujian, kedua hasil hash berbeda meskipun menggunakan password dan cost factor yang sama. Hal ini terjadi karena bcrypt menggunakan salt acak dalam proses hashing. Salt membuat hasil hash dapat berbeda untuk password yang sama sehingga lebih sulit bagi penyerang untuk menggunakan tabel hash yang telah dihitung sebelumnya.

Cost factor `10` menentukan tingkat komputasi yang digunakan dalam proses hashing. Semakin tinggi cost factor, semakin besar waktu komputasi yang dibutuhkan untuk menghasilkan dan memverifikasi hash.

## 3. Pembahasan

### 3.1 Perbedaan Hashing dan Enkripsi

Hashing merupakan proses satu arah yang menghasilkan nilai hash dari data masukan. Nilai hash tidak dirancang untuk dikembalikan menjadi data asli, sedangkan enkripsi mengubah data menjadi bentuk yang tidak dapat dibaca dan dapat dikembalikan melalui proses dekripsi menggunakan kunci yang sesuai.

### 3.2 Alasan Aplikasi Menyimpan Hash Password

Aplikasi menyimpan hash password agar tidak perlu menyimpan password asli pengguna dalam basis data. Jika data tersimpan bocor, hash password memberikan perlindungan yang lebih baik dibandingkan penyimpanan password dalam bentuk teks biasa, meskipun hash tetap perlu menggunakan algoritma yang sesuai dan konfigurasi yang kuat.

### 3.3 Cara Kerja `bcrypt.compare`

Fungsi `bcrypt.compare` memeriksa apakah password yang dimasukkan pengguna sesuai dengan hash yang tersimpan. Fungsi ini menggunakan informasi salt dan parameter hashing yang terdapat dalam hash untuk memverifikasi password, sehingga aplikasi tidak perlu menyimpan password asli pengguna.

### 3.4 Pengertian Rainbow Table dan Fungsi Salt

Rainbow table adalah kumpulan hasil perhitungan hash yang dapat digunakan untuk membantu menebak data asli dari hash yang cocok. Salt mengurangi efektivitas pendekatan ini karena password yang sama dapat menghasilkan hash berbeda ketika salt-nya berbeda, sehingga penyerang tidak dapat langsung menggunakan satu hasil hash untuk semua akun.

### 3.5 Pentingnya Menjaga Kerahasiaan `JWT_SECRET`

`JWT_SECRET` digunakan untuk menandatangani dan memverifikasi token JWT pada aplikasi. Jika kunci ini bocor, pihak yang tidak berwenang berpotensi membuat token dengan tanda tangan yang valid, bergantung pada implementasi dan pemeriksaan aplikasi. Oleh karena itu, kunci harus disimpan dalam file `.env` yang tidak dilacak Git atau menggunakan pengelolaan rahasia yang sesuai, bukan ditulis langsung dalam kode maupun diunggah ke repositori publik.

## 4. Pemeriksaan Keamanan Repositori

### 4.1 Pemeriksaan File `.env`

Perintah yang digunakan pada PowerShell:

```powershell
git ls-files --error-unmatch pertemuan-03/tugas-mandiri/backend/.env 2>$null
if ($LASTEXITCODE -ne 0) {
    "AMAN: .env tidak terlacak"
} else {
    "BAHAYA: .env terlacak"
}
```

**Hasil pemeriksaan:**

```text
AMAN: .env tidak terlacak
```

Berdasarkan hasil pemeriksaan, file `.env` tidak ditemukan sebagai file yang dilacak Git. Dengan demikian, file tersebut tidak ikut dimasukkan ke repositori melalui pelacakan Git saat pemeriksaan dilakukan.

### 4.2 Pemeriksaan Token JWT

Perintah yang digunakan:

```powershell
git grep -nE 'eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+' -- pertemuan-03/tugas-mandiri/backend
if ($LASTEXITCODE -ne 0) {
    "AMAN: tidak ditemukan pola JWT lengkap pada berkas yang diperiksa"
}
```

**Hasil pemeriksaan:**

```text
AMAN: tidak ditemukan pola JWT lengkap pada berkas yang diperiksa
```

Pemeriksaan tersebut tidak menemukan pola token JWT lengkap pada file yang dilacak Git dalam direktori yang diperiksa. Pemeriksaan ini membantu mencegah token JWT ikut tersimpan dalam kode atau laporan, tetapi tidak menjamin bahwa semua bentuk token atau seluruh riwayat Git bebas dari informasi sensitif.

## 5. Kesimpulan

Berdasarkan praktikum yang dilakukan, hashing berbeda dari enkripsi karena hashing merupakan proses satu arah, sedangkan enkripsi memungkinkan pemulihan data melalui dekripsi dengan kunci yang sesuai. Algoritma bcrypt menggunakan salt sehingga password yang sama dapat menghasilkan hash berbeda, sementara cost factor memengaruhi kebutuhan komputasi proses hashing.

Selain itu, penyimpanan hash password, penggunaan `bcrypt.compare`, dan perlindungan terhadap `JWT_SECRET` merupakan bagian penting dalam keamanan aplikasi. Pemeriksaan repositori juga diperlukan untuk memastikan file rahasia dan token autentikasi tidak ikut dilacak atau dipublikasikan secara tidak sengaja.

## 6. Checklist Penyelesaian

- [x] Menjalankan hashing bcrypt dua kali dengan password yang sama.
- [x] Membandingkan kedua hasil hash.
- [x] Menjelaskan perbedaan hashing dan enkripsi.
- [x] Menjelaskan penyimpanan hash password dan fungsi `bcrypt.compare`.
- [x] Menjelaskan rainbow table dan fungsi salt.
- [x] Menjelaskan pentingnya menjaga `JWT_SECRET`.
- [x] Memeriksa apakah file `.env` dilacak Git.
- [x] Memeriksa pola JWT lengkap pada berkas yang dilacak Git.
- [x] Memasukkan dua hash asli dari terminal ke dalam laporan.
- [x] Memastikan output pemeriksaan sesuai dengan hasil terminal yang sebenarnya.
