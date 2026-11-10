const express = require('express');
const app = express();
const port = 8000;

// Data pengguna (biasanya dari database)
const users = [
  { id: 1, name: 'Andri' },
  { id: 2, name: 'Bobi' },
  { id: 3, name: 'Tukiman' },
];

// Rute untuk menampilkan daftar pengguna
app.get('/users', (req, res) => {
  res.json(users);
});

// Rute untuk menampilkan detail pengguna berdasarkan ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ message: 'Pengguna tidak ditemukan' });
  } else {
    res.json(user);
  }
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});