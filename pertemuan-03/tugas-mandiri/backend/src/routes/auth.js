
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users } = require('../data/mock');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// POST /api/v1/auth/login
router.post('/login', (req, res) => {
  const { nim, password } = req.body || {};

  if (!nim || !password) {
    return res.status(400).json({
      status: false,
      message: 'NIM dan password wajib diisi',
    });
  }

  const user = users.find((item) => item.nim === nim);

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({
      status: false,
      message: 'NIM atau password salah',
    });
  }

  const token = jwt.sign(
    {
      nim: user.nim,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      subject: String(user.id),
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    }
  );

  return res.status(200).json({
    status: true,
    message: 'Login berhasil',
    data: {
      token,
      user: {
        id: user.id,
        nim: user.nim,
        nama: user.nama,
        role: user.role,
      },
    },
  });
});

// GET /api/v1/auth/me
router.get('/me', requireAuth, (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Profil berhasil diambil',
    data: {
      id: req.user.sub,
      nim: req.user.nim,
      role: req.user.role,
    },
  });
});

module.exports = router;
