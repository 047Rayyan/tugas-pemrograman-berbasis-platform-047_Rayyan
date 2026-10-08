# Tugas Mandiri 5 — Membandingkan SQL Mentah dan ORM

## Tujuan

Membandingkan cara melakukan operasi database menggunakan SQL mentah dan ORM Prisma serta memahami keamanan query, khususnya terhadap risiko SQL injection.

## Operasi yang Dipilih

Operasi yang digunakan adalah **mengambil satu data berdasarkan ID** pada tabel `jadwal`.

Contoh struktur sederhana tabel:

| Field | Tipe | Keterangan |
|---|---|---|
| `id` | Integer | Primary key |
| `mataKuliah` | Varchar | Nama mata kuliah |
| `status` | Varchar | Status jadwal |

Contoh data:

| id | mataKuliah | status |
|---:|---|---|
| 1 | Pemrograman Berbasis Platform | selesai |
| 2 | Pemrograman Web | aktif |

## A. SQL Mentah

Operasi mengambil data berdasarkan ID menggunakan SQL:

```sql
SELECT *
FROM jadwal
WHERE id = ?;
```

Parameter `?` digunakan sebagai placeholder untuk nilai ID sehingga nilai input tidak langsung digabungkan ke string SQL.

Contoh menggunakan `mysql2` pada Node.js:

```javascript
const [rows] = await connection.execute(
  'SELECT * FROM jadwal WHERE id = ?',
  [1]
);

console.log(rows);
```

Pada contoh tersebut, nilai `1` dikirim sebagai parameter query.

## B. ORM dengan Prisma

Operasi yang sama menggunakan Prisma:

```javascript
const jadwal = await prisma.jadwal.findUnique({
  where: {
    id: 1
  }
});

console.log(jadwal);
```

`findUnique` digunakan untuk mengambil satu record berdasarkan field yang bersifat unik, dalam contoh ini `id`.

## C. Perbandingan

| Aspek | SQL Mentah | Prisma ORM |
|---|---|---|
| Cara menulis | Menulis sintaks SQL secara langsung | Menggunakan method dan model Prisma |
| Abstraksi | Lebih rendah | Lebih tinggi |
| Kontrol query | Sangat langsung | Diatur melalui API ORM |
| Keterbacaan | Perlu memahami SQL | Lebih dekat dengan sintaks program |
| Fleksibilitas | Sangat fleksibel untuk query SQL | Nyaman untuk operasi database umum |
| Keamanan input | Bergantung pada penggunaan parameter query | ORM membantu membentuk query dengan cara yang lebih aman |

## Jawaban Pertanyaan

### 1. Apa perbedaan SQL mentah dan ORM?

SQL mentah menjalankan perintah SQL secara langsung terhadap database. Programmer menentukan sintaks query yang akan dikirim, sedangkan ORM menyediakan abstraksi berupa model dan method pada kode program sehingga programmer tidak harus menulis seluruh sintaks SQL secara manual. Modul menjelaskan bahwa ORM menghubungkan objek pada kode dengan tabel database dan menerjemahkan operasi objek menjadi perintah database. 

### 2. Apa kelebihan SQL mentah?

Kelebihan SQL mentah adalah kontrol terhadap query yang lebih langsung dan fleksibel. Programmer dapat menulis query sesuai kebutuhan database dan memanfaatkan kemampuan SQL secara penuh. Pendekatan ini cocok ketika dibutuhkan query yang sangat spesifik atau kompleks.

### 3. Apa kelebihan ORM?

ORM memberikan abstraksi yang lebih tinggi sehingga operasi database dapat ditulis menggunakan model dan method yang lebih dekat dengan struktur program. Prisma juga menyediakan schema sebagai kontrak antara kode dan database sehingga struktur data lebih mudah dikelola dan direview. 

### 4. Apa risiko SQL injection?

SQL injection adalah risiko ketika input dari pengguna dapat memengaruhi struktur query SQL sehingga penyerang dapat memasukkan bagian SQL yang tidak seharusnya dijalankan. Dampaknya dapat berupa pembacaan, perubahan, atau penghapusan data yang tidak diizinkan.

Contoh yang tidak aman:

```javascript
const id = req.query.id;

const sql = `SELECT * FROM jadwal WHERE id = ${id}`;
```

Pada contoh tersebut, input pengguna langsung digabungkan ke dalam string SQL.

### 5. Mengapa penggunaan parameter query dapat mengurangi risiko SQL injection?

Parameter query memisahkan nilai input dari struktur perintah SQL. Pada contoh:

```sql
SELECT *
FROM jadwal
WHERE id = ?;
```

nilai input diberikan sebagai parameter secara terpisah, bukan ditempelkan langsung ke query. Dengan demikian, database dapat memperlakukan nilai tersebut sebagai data, bukan sebagai bagian dari sintaks SQL.

### 6. Bagaimana ORM membantu programmer dalam mengakses database?

ORM menyediakan model dan method untuk melakukan operasi database tanpa harus menulis seluruh SQL secara manual. Dengan Prisma, misalnya, `prisma.jadwal.findUnique()` dapat digunakan untuk mengambil satu data berdasarkan ID. ORM membuat kode lebih konsisten, lebih mudah dibaca, dan membantu mengurangi kesalahan dalam penyusunan query.

## Kesimpulan

SQL mentah memberikan kontrol langsung dan fleksibilitas tinggi terhadap query database, sedangkan ORM seperti Prisma memberikan abstraksi yang lebih mudah digunakan dari sisi kode program. Keduanya dapat digunakan untuk operasi yang sama, tetapi memiliki pendekatan yang berbeda. Penggunaan parameter query pada SQL mentah serta pendekatan query ORM membantu mengurangi risiko kesalahan dan SQL injection ketika input pengguna diproses dengan benar.

## Lampiran

Tidak ada screenshot yang diwajibkan untuk tugas ini. 
