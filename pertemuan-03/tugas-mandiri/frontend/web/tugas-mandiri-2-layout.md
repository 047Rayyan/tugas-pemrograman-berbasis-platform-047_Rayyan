# TM2 — Menyusun Tata Letak dengan Class Utility

## 1. Tujuan

Tugas Mandiri 2 bertujuan memahami penggunaan utility class Tailwind CSS untuk menyusun halaman web yang responsif. Halaman dibuat menggunakan Tailwind CDN tanpa CSS buatan sendiri, dengan komponen navbar, hero, tiga kartu konten, dan footer.

## 2. Struktur Halaman

Halaman yang dibuat merupakan halaman profil mahasiswa dengan bagian-bagian berikut:

1. **Navbar:** berisi identitas situs dan tautan Beranda, Profil, serta Kontak.
2. **Hero:** berisi judul sambutan, deskripsi singkat, dan tombol untuk menuju bagian profil.
3. **Kartu Biodata:** menampilkan informasi mahasiswa, program studi, dan minat.
4. **Kartu Jadwal Kuliah:** menampilkan beberapa contoh mata kuliah.
5. **Kartu Kegiatan:** menampilkan aktivitas dan minat di bidang teknologi.
6. **Footer:** menampilkan identitas pembuat halaman dan tautan kontak.

Seluruh halaman menggunakan Tailwind CSS melalui CDN. Dengan demikian, tampilan diatur melalui utility class pada atribut `class` tanpa menambahkan aturan CSS khusus.

## 3. Class Utility Utama dan Fungsinya

### 3.1 Navbar

Class utama yang digunakan antara lain:

- `flex`: menyusun identitas situs dan tautan navigasi dalam satu baris.
- `items-center`: menyelaraskan elemen secara vertikal.
- `justify-between`: memberi jarak antara identitas situs dan navigasi.
- `max-w-6xl`: membatasi lebar maksimum konten.
- `mx-auto`: menempatkan konten di tengah secara horizontal.
- `px-4` dan `py-4`: mengatur padding horizontal dan vertikal.
- `shadow-sm`: memberikan bayangan tipis pada navbar.
- `hover:text-blue-600`: mengubah warna teks tautan ketika kursor diarahkan ke atasnya.

### 3.2 Hero

Class utama pada bagian hero adalah:

- `bg-gradient-to-r`: memberikan latar belakang gradien dari kiri ke kanan.
- `from-blue-700` dan `to-indigo-700`: menentukan warna awal dan akhir gradien.
- `text-white`: mengatur warna teks menjadi putih.
- `py-16` dan `md:py-24`: mengatur padding vertikal yang berbeda berdasarkan ukuran layar.
- `max-w-2xl`: membatasi lebar paragraf agar nyaman dibaca.
- `text-3xl`, `sm:text-4xl`, dan `md:text-5xl`: menyesuaikan ukuran judul pada beberapa breakpoint.
- `hover:bg-blue-50`: mengubah latar belakang tombol saat kursor diarahkan ke atasnya.

### 3.3 Kumpulan Kartu

Bagian kumpulan kartu menggunakan class:

`grid grid-cols-1 gap-6 md:grid-cols-3`

Fungsi setiap class adalah:

- `grid`: mengaktifkan tata letak CSS Grid.
- `grid-cols-1`: menyusun kartu dalam satu kolom pada layar kecil.
- `gap-6`: memberikan jarak antarkartu.
- `md:grid-cols-3`: mengubah susunan menjadi tiga kolom mulai breakpoint `md`.

Setiap kartu juga menggunakan class berikut:

- `rounded-2xl`: memberikan sudut membulat.
- `border border-slate-200`: memberikan garis tepi berwarna abu-abu muda.
- `bg-white`: memberikan latar belakang putih.
- `p-6`: mengatur padding di dalam kartu.
- `shadow-sm`: memberikan bayangan tipis.
- `transition`: membuat perubahan tampilan berlangsung lebih halus.
- `hover:-translate-y-1`: menggeser kartu sedikit ke atas saat kursor diarahkan ke atasnya.
- `hover:shadow-lg`: memperbesar bayangan ketika kartu berada dalam kondisi hover.

### 3.4 Footer

Footer menggunakan class seperti `bg-slate-900` dan `text-slate-300` untuk membedakan tampilannya dari konten utama.

Class `flex-col` menyusun konten footer secara vertikal pada layar kecil. Sementara itu, `md:flex-row`, `md:items-center`, dan `md:justify-between` mengubah susunan menjadi horizontal serta menyelaraskan konten pada layar yang lebih lebar.

## 4. Pengujian Responsivitas

Pengujian dilakukan dengan membuka halaman pada browser dalam tampilan desktop dan viewport selebar 360 piksel.

| Aspek pengujian | Hasil pengamatan |
|---|---|
| Navbar | Identitas situs dan tautan navigasi ditampilkan. |
| Bagian hero | Judul, deskripsi, dan tombol menyesuaikan lebar layar. |
| Kartu pada layar kecil | Kartu disusun dalam satu kolom menggunakan `grid-cols-1`. |
| Kartu pada layar lebih lebar | Kartu ditampilkan dalam tiga kolom menggunakan `md:grid-cols-3`. |
| Efek hover | Class hover diterapkan pada tautan, tombol, dan kartu. |
| Footer | Identitas pembuat dan tautan kontak ditampilkan pada bagian bawah halaman. |

Hasil pengujian menunjukkan bahwa tata letak dapat menyesuaikan ukuran layar. Pada desktop, ketiga kartu tampil berjajar, sedangkan pada viewport 360 piksel konten disusun secara vertikal sehingga dapat dibaca pada layar yang lebih sempit.

## 5. Bagian yang Mudah Disusun dengan Utility Class

Bagian yang relatif mudah disusun menggunakan utility class adalah kumpulan kartu. Dengan menggabungkan `grid`, `grid-cols-1`, `gap-6`, dan `md:grid-cols-3`, susunan kartu responsif dapat dibuat tanpa menulis aturan CSS atau media query secara manual.

Utility seperti `bg-white`, `rounded-2xl`, `p-6`, dan `shadow-sm` juga mempermudah pengaturan tampilan kartu. Jika warna, jarak, atau bayangan perlu diubah, utility yang sesuai dapat diganti langsung pada elemen HTML.

## 6. Bagian yang Susunan Class-nya Sulit Dibaca

Bagian yang relatif sulit dibaca adalah elemen kartu yang menggunakan banyak utility sekaligus, misalnya:

`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`

Susunan tersebut memuat pengaturan sudut, garis tepi, warna latar belakang, padding, bayangan, transisi, dan efek hover dalam satu atribut `class`. Meskipun tidak memerlukan CSS khusus, banyaknya utility dapat membuat markup terlihat padat.

Untuk mengatasinya, class dapat dikelompokkan secara konseptual berdasarkan fungsi, seperti tata letak, warna, jarak, tipografi, dan interaksi. Jika pola yang sama digunakan berulang kali pada proyek yang lebih besar, susunan tersebut juga dapat dibungkus dalam komponen yang dapat digunakan kembali.

## 7. Kesimpulan

Penggunaan Tailwind CSS mempermudah penyusunan halaman responsif melalui kombinasi utility class. Class `flex` dan `grid` membantu mengatur tata letak, `gap-*` mengatur jarak, prefiks `md:` menyesuaikan tampilan pada layar yang lebih lebar, sedangkan prefiks `hover:` memberikan perubahan tampilan saat elemen diarahkan kursor.

Pendekatan utility-first cocok untuk membangun tampilan yang membutuhkan fleksibilitas karena pengembang dapat mengatur properti visual langsung pada elemen HTML. Namun, susunan class yang panjang dapat mengurangi keterbacaan kode. Oleh karena itu, pemilihan utility perlu dilakukan secara terstruktur dan komponen sebaiknya digunakan kembali apabila pola tampilan yang sama muncul berulang kali.

## 8. Bukti Pengujian
1. [...](screenshots/layout-desktop.png)
2. [...](screenshots/layout-360px.png)