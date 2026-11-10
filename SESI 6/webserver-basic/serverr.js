<<<<<<< HEAD
const http = require('http');
const port = 8000;

http.createServer((req,res)=>{
    res.writeHead(200);
    if(req.url =='/'){
        res.write('<html><body><h2>Anda berada pada halaman index</h2></body></html>');
    }
    else if(req.url =='/siswa'){
        res.write('<html><body><h2>Anda berada pada halaman siswa</h2></body></html>');
    }
    else if(req.url =='/dosen'){
        res.write('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }
    else if(req.url =='/admin'){
        res.write('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }
     else {
        res.write('<html><body><h2>Page Not Found (404)</h2></body></html>');
    }
    res.end();

}).listen(port,()=>{
    console.log('Server is listening on port ${port} ');
=======
const http = require('http');
const port = 8000;

http.createServer((req,res)=>{
    res.writeHead(200);
    if(req.url =='/'){
        res.write('<html><body><h2>Anda berada pada halaman index</h2></body></html>');
    }
    else if(req.url =='/siswa'){
        res.write('<html><body><h2>Anda berada pada halaman siswa</h2></body></html>');
    }
    else if(req.url =='/dosen'){
        res.write('<html><body><h2>Anda berada pada halaman dosen</h2></body></html>');
    }
    else if(req.url =='/admin'){
        res.write('<html><body><h2>Anda berada pada halaman admin</h2></body></html>');
    }
     else {
        res.write('<html><body><h2>Page Not Found (404)</h2></body></html>');
    }
    res.end();

}).listen(port,()=>{
    console.log('Server is listening on port ${port} ');
>>>>>>> 7942fd7b1e62ed20036143d2b80aca626cc98be6
})