const express =require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello Express! server berjalan dengan cepat');
});

app.get('/siswa',(req,res)=>{
    res.send({
        nama: 'Mahasiswa',
        kampus: 'Universitas Contoh',
        matkul: 'PBP'
    });
});
app.listen(8000,()=>{
    console.log('Server Express berjalan di http://localhost:8000');
});