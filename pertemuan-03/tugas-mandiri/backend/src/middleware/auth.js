
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      status: false,
      message: 'Token autentikasi diperlukan',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: 'Token tidak valid atau sudah kedaluwarsa',
    });
  }
}

function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        status: false,
        message: 'Akses ditolak: peran tidak diizinkan',
      });
    }

    next();
  };
}

module.exports = {
  requireAuth,
  requireRole,
};
