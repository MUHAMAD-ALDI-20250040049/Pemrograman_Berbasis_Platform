const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", function(angka) {
    angka = parseInt(angka);

    if (angka % 2 == 0) {
        console.log("angka genap");
    } else {
        console.log("angka ganjil");
    }
    rl.close();
});