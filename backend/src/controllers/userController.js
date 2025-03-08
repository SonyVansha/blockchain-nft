import { readUsers, saveUsers } from "../services/userService";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "rahasia_nft";
// Login User
export const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: "User tidak ditemukan!" });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ message: "Password salah!" });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
};

// Register User
export const userRegister = async (req, res) => {
  const { username, password } = req.body;
  
  let users = readUsers(); // Baca data dari users.json

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ message: "User sudah ada!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  saveUsers(users); // Simpan data ke users.json

  res.json({ message: "Registrasi berhasil!" });
};

