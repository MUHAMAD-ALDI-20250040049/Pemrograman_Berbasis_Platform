const express = require('express');
const app = express();
const PORT = 3000;

const serverStartTime = new Date().toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta'
});

app.get('/', (req, res) => {
    res.send('Selamat datang di server kelompok ketua Tengku');
});

app.get('/info', (req, res) => {
    res.send(`Server ini mulai dijalankan pada: ${serverStartTime}`);
});

app.get('/anggota', (req, res) => {
    const dataAnggota = {
        kelompok: 'server kelompok ketua Tengku',
        total_anggota: 4,
        anggota: [
            { id: 1, nama: 'Rajbi' },
            { id: 2, nama: 'Tengku' },
            { id: 3, nama: 'Aldi' },
            { id: 4, nama: 'Norma' }
        ]
    };

    res.json(dataAnggota);
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
