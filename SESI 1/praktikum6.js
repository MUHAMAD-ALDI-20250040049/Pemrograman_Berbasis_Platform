const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama mahasiswa: ", function(nama) {
    rl.question("Masukkan nilai tugas: ", function(tugas) {
        rl.question("Masukkan nilai UTS: ", function(uts) {
            rl.question("Masukkan nilai UAS: ", function(uas) {

                tugas = parseFloat(tugas);
                uts = parseFloat(uts);
                uas = parseFloat(uas);

                let nilaiAkhir =
                    (tugas * 0.30) +
                    (uts * 0.30) +
                    (uas * 0.40);

                console.log("\n===== HASIL PERHITUNGAN =====");
                console.log("Nama Mahasiswa:", nama);
                console.log("Nilai Tugas:", tugas);
                console.log("Nilai UTS:", uts);
                console.log("Nilai UAS:", uas);
                console.log("Nilai Akhir:", nilaiAkhir.toFixed(2));

                rl.close();
            });
        });
    });
});