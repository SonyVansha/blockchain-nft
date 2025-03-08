const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Middleware untuk memverifikasi token
module.exports.verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Akses ditolak!" });

  try {
    const verified = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Token tidak valid!" });
  }
};