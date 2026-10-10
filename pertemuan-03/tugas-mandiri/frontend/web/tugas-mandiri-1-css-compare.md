# TM1 — Perbandingan Component Style dan Utility Style

## 1. Tujuan

Tugas ini bertujuan membandingkan pendekatan component-based styling dan utility-first styling dalam membangun kartu profil mahasiswa. Perbandingan dilakukan berdasarkan struktur HTML, jumlah CSS yang ditulis, penggunaan utility class, responsivitas, waktu pengerjaan, dan kemudahan mengubah tema.

## 2. Implementasi

### 2.1 Component Style

Implementasi pertama dibuat pada file `tugas-mandiri-1-component.html`. Tampilan kartu diatur menggunakan CSS buatan sendiri yang ditulis dalam elemen `<style>`.

Beberapa class yang digunakan adalah `.profile-card`, `.avatar`, `.profile-info`, `.profile-name`, dan `.profile-link`.

**Kelebihan:**
- Struktur HTML relatif mudah dibaca karena nama class menjelaskan fungsi elemen.
- Aturan tampilan terpusat sehingga perubahan gaya dapat dilakukan melalui CSS.
- Class yang sama dapat digunakan kembali pada beberapa elemen dengan tampilan serupa.

**Kekurangan:**
- Pengembang harus menulis dan memelihara aturan CSS sendiri.
- Penyesuaian ukuran layar memerlukan media query dan aturan tambahan.
- Perubahan desain perlu memperhatikan hubungan antara class HTML dan aturan CSS.

### 2.2 Utility Style

Implementasi kedua dibuat pada file `tugas-mandiri-1-utility.html` menggunakan Tailwind CSS melalui CDN.

Tampilan dibentuk dengan utility class seperti `flex`, `gap-4`, `rounded-2xl`, `bg-slate-100`, `shadow-md`, dan `sm:p-6`.

**Kelebihan:**
- Tampilan dapat diatur langsung melalui class pada elemen HTML.
- Utility responsif seperti `sm:` mempermudah penyesuaian desain berdasarkan ukuran layar.
- Perubahan warna, jarak, dan ukuran dapat dilakukan tanpa menulis aturan CSS khusus.

**Kekurangan:**
- Atribut `class` dapat menjadi panjang karena memuat banyak utility.
- Pengembang harus memahami fungsi utility dan prefiks responsif Tailwind.
- Versi CDN membutuhkan koneksi internet agar stylesheet Tailwind dapat dimuat.

## 3. Perbandingan Implementasi

| Aspek | Component Style | Utility Style |
|---|---|---|
| File implementasi | `tugas-mandiri-1-component.html` | `tugas-mandiri-1-utility.html` |
| Pendekatan styling | CSS buatan sendiri | Tailwind CSS |
| Jumlah baris CSS | 104 baris di dalam `<style>`, termasuk baris kosong | Tidak menulis CSS khusus |
| Jumlah utility class | Tidak menggunakan utility Tailwind | 51 penggunaan class, atau 49 class berbeda |
| Responsivitas | Menggunakan media query CSS | Menggunakan prefiks responsif seperti `sm:` |
| Pengaturan warna | Mengubah deklarasi warna pada CSS | Mengubah utility warna pada HTML |
| Ketergantungan internet | Tidak memerlukan framework eksternal | Memerlukan CDN Tailwind pada implementasi ini |

**Catatan penghitungan:** jumlah 104 baris CSS dihitung dari blok `<style>` pada versi component-style yang dibuat, termasuk baris kosong. Jumlah utility class dihitung berdasarkan setiap kemunculan class dalam atribut `class`, termasuk class yang berulang dan prefiks seperti `sm:` serta `hover:`.

## 4. Pengujian Responsivitas

Kedua halaman dirancang agar dapat dibaca pada layar kecil dengan lebar 360 piksel maupun pada layar laptop.

| Aspek pengujian | Component Style | Utility Style |
|---|---|---|
| Kartu profil ditampilkan | Berhasil pada pengujian awal | Berhasil pada pengujian awal |
| Teks dan tombol terlihat | Berhasil pada pengujian awal | Berhasil pada pengujian awal |
| Pengaturan tampilan layar kecil | Media query `max-width: 480px` | Utility responsif `sm:` |
| Screenshot versi final | Perlu diambil setelah revisi foto dan NIM | Perlu diambil setelah revisi foto dan NIM |

Pengujian awal pada viewport 360 piksel menunjukkan kedua pendekatan dapat menghasilkan kartu profil yang terbaca. Setelah penambahan foto dan NIM, kedua halaman perlu diuji kembali untuk memastikan tidak terdapat scroll horizontal dan seluruh konten tetap terlihat.

## 5. Perbandingan Waktu Pengerjaan dan Kemudahan Perubahan Tema

### 5.1 Waktu Pengerjaan

Durasi pengerjaan tidak dicatat menggunakan stopwatch, sehingga perbandingan ini tidak mencantumkan angka waktu yang tidak terukur.

Berdasarkan proses implementasi, component-style membutuhkan penulisan aturan CSS untuk mengatur tampilan komponen. Sebaliknya, utility-style memungkinkan tampilan dibangun langsung melalui class Tailwind. Namun, kemudahan dan kecepatan pengerjaan tetap dipengaruhi oleh pemahaman pengembang terhadap CSS dan utility class.

### 5.2 Kemudahan Perubahan Tema

Pada component-style, perubahan warna kartu dapat dilakukan melalui deklarasi CSS pada class `.profile-card`. Jika beberapa kartu menggunakan class yang sama, perubahan aturan tersebut dapat diterapkan pada seluruh kartu yang menggunakan class tersebut.

Pada utility-style, perubahan warna dilakukan dengan mengganti utility warna pada elemen HTML, misalnya mengganti `bg-white` dengan utility warna lain yang tersedia pada Tailwind.

Menurut saya, component-style lebih mudah dikelola ketika banyak elemen menggunakan aturan komponen yang sama. Sementara itu, utility-style lebih fleksibel ketika ingin mengubah tampilan suatu elemen secara langsung tanpa membuat aturan CSS khusus.

## 6. Pilihan Pendekatan untuk Proyek Akhir

Untuk halaman administrasi seperti dashboard, tabel data, dan formulir pengelolaan, saya memilih pendekatan component-based karena struktur komponen yang dapat digunakan kembali membantu menjaga konsistensi tampilan.

Untuk halaman publik yang membutuhkan identitas visual khusus, saya memilih utility-first menggunakan Tailwind CSS karena warna, jarak, tipografi, dan tata letak dapat disesuaikan secara fleksibel.

Kedua pendekatan juga dapat digabungkan apabila proyek membutuhkan komponen yang konsisten sekaligus fleksibilitas desain.

## 7. Kesimpulan

Component-style dan utility-style sama-sama dapat digunakan untuk menghasilkan kartu profil mahasiswa yang responsif. Perbedaan utamanya terletak pada cara mengelola tampilan.

Component-style memisahkan aturan tampilan dari struktur HTML dan menggunakan class yang mewakili komponen. Utility-style menggabungkan utility class langsung pada elemen HTML sehingga perubahan desain dapat dilakukan dengan cepat tanpa menulis banyak CSS khusus.

Pemilihan pendekatan sebaiknya disesuaikan dengan kebutuhan halaman, konsistensi desain, dan kemudahan pemeliharaan kode. Untuk proyek akhir, component-based lebih sesuai bagi halaman administrasi yang berulang, sedangkan utility-first lebih sesuai bagi halaman publik yang membutuhkan fleksibilitas desain.

## 8. Bukti Pengujian

Lampirkan empat screenshot berikut setelah pengujian final:

1. `component-style-desktop.png` — kartu component-style pada layar laptop.
2. `component-style.png` — kartu component-style pada viewport 360 piksel.
3. `utility-style-desktop.png` — kartu utility-style pada layar laptop.
4. `utility-style.png` — kartu utility-style pada viewport 360 piksel.

Screenshot harus menunjukkan hasil aktual dari browser setelah foto profil dan NIM diperbarui.
