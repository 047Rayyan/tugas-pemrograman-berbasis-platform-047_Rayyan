# Tugas Pendahuluan PBP

**Nama:** Rayyan  
**NIM:** 2024520047  
**Kelas:** Rabu 12:00

## 1.

`/posts/1` memiliki field `userId` dan `id` bertipe number/integer, sedangkan `title` dan `body` bertipe string. `userId` menunjukkan pengguna yang terkait dengan postingan, sementara `id` menjadi identitas unik postingan. Sementara itu, `/users/1` berisi informasi pengguna seperti `id`, `name`, `username`, dan `email`, serta memiliki field `address` dan `company` yang bertipe object karena mengandung beberapa field di dalamnya.

## 2.

Endpoint `/users` dan `/posts` dapat direpresentasikan sebagai dua tabel, yaitu tabel `users` dan tabel `posts`. Tabel `users` memiliki `id` sebagai primary key, sedangkan tabel `posts` memiliki `id` sebagai primary key dan `userId` sebagai foreign key yang mengacu pada `users.id`.

Hubungan kedua tabel adalah one-to-many (1:N), karena satu user dapat memiliki banyak post, sedangkan satu post hanya dimiliki atau terkait dengan satu user. Penggunaan foreign key membuat data user tidak perlu disimpan berulang pada tabel posts.

## 3.

URL menentukan resource atau data yang ingin diakses, sedangkan HTTP method menentukan operasi yang dilakukan terhadap resource tersebut. `GET /posts` digunakan untuk mengambil seluruh data postingan, sedangkan `GET /posts/1` digunakan untuk mengambil satu postingan berdasarkan ID postingan. Data yang dikembalikan oleh server kemudian disesuaikan dengan resource yang diminta.

## 4.

Perbedaan antara `/posts/1` dan `/posts?userId=1` terletak pada cara data dipilih. `/posts/1` digunakan untuk mengambil satu postingan berdasarkan `id` postingan, yaitu postingan dengan ID 1. Sedangkan `/posts?userId=1` digunakan untuk memfilter seluruh postingan berdasarkan `userId` yang bernilai 1, sehingga dapat menghasilkan beberapa postingan milik user tersebut.

## 5.

| Method | Fungsi | Status kode sukses | Perubahan Data |
|---|---|---|---|
| GET | Mengambil/membaca data | 200 OK | Tidak mengubah data |
| POST | Membuat data baru | 201 Created | Menambah data |
| PUT | Mengganti seluruh data | 200 OK / 204 No Content | Mengubah seluruh data |
| PATCH | Mengubah sebagian field data | 200 OK / 204 No Content | Mengubah sebagian data |
| DELETE | Menghapus data | 204 No Content | Menghapus data |
