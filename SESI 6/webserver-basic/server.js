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

server.listen(8000, () => console.log('Server JSON berjalan di http://localhost:8000'));