
const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');

const router = express.Router();

// GET /api/v1/admin
router.get('/', requireAuth, requireRole('ADMIN'), (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Akses admin berhasil',
    data: {
      user: req.user,
    },
  });
});

module.exports = router;
