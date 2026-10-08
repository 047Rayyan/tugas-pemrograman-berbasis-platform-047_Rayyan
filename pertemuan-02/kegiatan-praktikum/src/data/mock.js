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

module.exports = {
  jadwal,
  peserta,
};