const jadwal = [
  {
    id: 1,
    mataKuliah: 'Pemrograman Berbasis Platform',
    status: 'aktif',
  },
  {
    id: 2,
    mataKuliah: 'Basis Data',
    status: 'aktif',
  },
  {
    id: 3,
    mataKuliah: 'Kecerdasan Buatan',
    status: 'nonaktif',
  },
];

const peserta = [
  {
    id: 101,
    jadwalId: 1,
    nim: '20240001',
    nama: 'Andi',
  },
  {
    id: 102,
    jadwalId: 1,
    nim: '20240002',
    nama: 'Budi',
  },
  {
    id: 103,
    jadwalId: 2,
    nim: '20240003',
    nama: 'Citra',
  },
];

const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    nim: '2026001',
    nama: 'Admin Lab',
    role: 'ADMIN',
    passwordHash: bcrypt.hashSync('admin123', 10),
  },
  {
    id: 2,
    nim: '2026002',
    nama: 'Mahasiswa',
    role: 'MAHASISWA',
    passwordHash: bcrypt.hashSync('mhs123', 10),
  },
];

module.exports = {
  jadwal,
  peserta,
  users,
};