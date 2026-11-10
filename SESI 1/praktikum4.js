
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan umur Anda: ", function(umur) {
    umur = parseInt(umur);

    console.log("Umur Anda:", umur);
    console.log("Tahun depan umur Anda:", umur + 1);

    rl.close();
});
