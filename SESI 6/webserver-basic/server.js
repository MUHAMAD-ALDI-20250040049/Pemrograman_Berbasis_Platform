<<<<<<< HEAD
const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        nama: "Mahasiswa",
        matkul: "Pemrograman Berbasis Platform",
        server: "Node.js"
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

=======
const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        nama: "Mahasiswa",
        matkul: "Pemrograman Berbasis Platform",
        server: "Node.js"
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
});

>>>>>>> 7942fd7b1e62ed20036143d2b80aca626cc98be6
server.listen(8000, () => console.log('Server JSON berjalan di http://localhost:8000'));