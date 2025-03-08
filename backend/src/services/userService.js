
const usersFile = path.join(__dirname, "user.json");

// Fungsi untuk membaca data pengguna dari file JSON
export const readUsers = () => {
  try {
    const data = fs.readFileSync("/data/user.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    return []; // Jika file tidak ada atau error, kembalikan array kosong
  }
};

// Fungsi untuk menyimpan data pengguna ke file JSON
export const saveUsers = (users) => {
  fs.writeFileSync("/data/user.json", JSON.stringify(users, null, 2), "utf8");
};