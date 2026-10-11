# TM3 — Matriks Hak Akses dan Autentikasi

## 1. Tujuan

Dokumen ini menjelaskan rancangan autentikasi dan otorisasi pada aplikasi berbasis REST API. Autentikasi digunakan untuk memverifikasi identitas pengguna, sedangkan otorisasi digunakan untuk menentukan hak akses pengguna terhadap fitur tertentu.

## 2. Daftar Role Pengguna

Sistem memiliki tiga role pengguna:

| Role | Deskripsi |
|---|---|
| Admin | Mengelola pengguna dan seluruh data sistem. |
| Petugas | Mengelola data operasional dan memproses permintaan pengguna. |
| Pengguna | Melihat informasi serta mengelola data milik sendiri. |

## 3. Matriks Hak Akses

| No. | Fitur | Endpoint | Admin | Petugas | Pengguna |
|---|---|---|---|---|---|
| 1 | Melihat profil sendiri | `GET /auth/me` | Ya | Ya | Ya |
| 2 | Melihat daftar pengguna | `GET /users` | Ya | Tidak | Tidak |
| 3 | Menambah pengguna | `POST /users` | Ya | Tidak | Tidak |
| 4 | Melihat data operasional | `GET /data` | Ya | Ya | Ya |
| 5 | Membuat permintaan | `POST /requests` | Ya | Ya | Ya |
| 6 | Memproses permintaan | `PATCH /requests/:id/status` | Ya | Ya | Tidak |
| 7 | Menghapus pengguna | `DELETE /users/:id` | Ya | Tidak | Tidak |
| 8 | Melihat seluruh permintaan | `GET /requests` | Ya | Ya | Tidak |

Keterangan: **Ya** berarti role tersebut memiliki izin, sedangkan **Tidak** berarti akses ditolak. Hak akses pada tabel merupakan rancangan untuk sistem ini.

## 4. Perbedaan HTTP 401 dan 403

### HTTP 401 Unauthorized

Status 401 digunakan ketika pengguna belum terautentikasi atau kredensial autentikasinya tidak valid. Contohnya, pengguna mengakses endpoint yang membutuhkan login tanpa mengirim token yang valid.

### HTTP 403 Forbidden

Status 403 digunakan ketika pengguna sudah terautentikasi, tetapi tidak memiliki izin untuk melakukan tindakan yang diminta. Contohnya, pengguna dengan role Pengguna mencoba mengakses endpoint `DELETE /users/:id`.

### Ringkasan Perbedaan

| Aspek | HTTP 401 | HTTP 403 |
|---|---|---|
| Kondisi | Belum terautentikasi atau token tidak valid | Sudah terautentikasi tetapi tidak memiliki izin |
| Penyebab | Kredensial tidak ada atau tidak valid | Role atau hak akses tidak mencukupi |
| Penanganan | Meminta autentikasi yang valid | Menolak akses ke fitur tersebut |

## 5. Mengapa Middleware `requireRole` Diperlukan?

Middleware `requireRole` diperlukan untuk memeriksa apakah role pengguna memiliki izin mengakses endpoint tertentu. Pemeriksaan ini dilakukan setelah autentikasi berhasil.

Sebagai contoh, endpoint `DELETE /users/:id` hanya boleh diakses oleh Admin. Jika pengguna dengan role Petugas atau Pengguna mencoba mengaksesnya, middleware `requireRole` akan menolak permintaan dengan status HTTP 403.

Tanpa pemeriksaan otorisasi, pengguna yang sudah login berpotensi mengakses fitur yang bukan haknya. Oleh karena itu, autentikasi dan otorisasi harus diterapkan secara terpisah.

Urutan pemeriksaan pada REST API:

1. Pengguna mengirim permintaan ke endpoint.
2. Middleware autentikasi memvalidasi token.
3. Jika token tidak valid, server mengembalikan HTTP 401.
4. Jika token valid, middleware `requireRole` memeriksa izin pengguna.
5. Jika role tidak memiliki izin, server mengembalikan HTTP 403.
6. Jika izin sesuai, permintaan diteruskan ke handler endpoint.

## 6. Kesimpulan

Matriks hak akses membantu menentukan fitur yang boleh digunakan oleh setiap role. HTTP 401 digunakan untuk masalah autentikasi, sedangkan HTTP 403 digunakan untuk penolakan otorisasi. Middleware `requireRole` membantu membatasi akses berdasarkan role sehingga fitur sistem hanya dapat digunakan oleh pengguna yang berwenang.