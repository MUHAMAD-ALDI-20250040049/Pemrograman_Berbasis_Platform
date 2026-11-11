const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'Andri' },
  { id: 2, name: 'Bobi' },
  { id: 3, name: 'Tukiman' },
];

const teamName = 'Nama Kelompok Anda';
const teamMembers = ['Nama Anggota 1', 'Nama Anggota 2', 'Nama Anggota 3'];

function parseUserId(value) {
  if (!/^\d+$/.test(value)) {
    return null;
  }

  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function validateName(body) {
  if (!body || typeof body.name !== 'string' || body.name.trim() === '') {
    return null;
  }

  return body.name.trim();
}

app.get('/', (req, res) => {
  res.send(`Selamat datang di server kelompok ${teamName}`);
});

app.get('/about', (req, res) => {
  res.send('Halaman About - informasi tentang aplikasi praktikum routing.');
});

app.get('/contact', (req, res) => {
  res.send('Halaman Contact - hubungi kelompok praktikum Anda.');
});

app.get('/produk/:kode', (req, res) => {
  res.send(`Produk dengan kode: ${req.params.kode}`);
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseUserId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: 'ID pengguna harus berupa bilangan bulat positif.' });
  }

  const user = users.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
  }

  return res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const name = validateName(req.body);
  if (name === null) {
    return res.status(400).json({ message: 'Nama wajib diisi sebagai teks yang tidak kosong.' });
  }

  const id = users.reduce((highestId, user) => Math.max(highestId, user.id), 0) + 1;
  const user = { id, name };
  users.push(user);

  return res.status(201).json({
    message: 'Pengguna berhasil ditambahkan.',
    user,
  });
});

app.put('/users/:id', (req, res) => {
  const id = parseUserId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: 'ID pengguna harus berupa bilangan bulat positif.' });
  }

  const name = validateName(req.body);
  if (name === null) {
    return res.status(400).json({ message: 'Nama wajib diisi sebagai teks yang tidak kosong.' });
  }

  const user = users.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
  }

  user.name = name;
  return res.status(200).json({
    message: 'Pengguna berhasil diperbarui.',
    user,
  });
});

app.delete('/users/:id', (req, res) => {
  const id = parseUserId(req.params.id);
  if (id === null) {
    return res.status(400).json({ message: 'ID pengguna harus berupa bilangan bulat positif.' });
  }

  const index = users.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Pengguna tidak ditemukan.' });
  }

  const [user] = users.splice(index, 1);
  return res.status(200).json({
    message: 'Pengguna berhasil dihapus.',
    user,
  });
});

app.get('/team/:nama', (req, res) => {
  res.send(`Hai, saya ${req.params.nama} dari kelompok ${teamName}`);
});

app.get('/info', (req, res) => {
  res.json({
    namaKelompok: teamName,
    anggota: teamMembers,
  });
});

app.get('/data', (req, res) => {
  res.redirect('/info');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
