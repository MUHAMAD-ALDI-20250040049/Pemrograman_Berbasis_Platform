const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Masukkan total belanja (Rp): ", (inputBelanja) => {
    let totalBelanja = parseFloat(inputBelanja) || 0;
    let persentaseDiskon = 0;

    // Menentukan diskon berdasarkan ketentuan
    if (totalBelanja >= 250000) {
        persentaseDiskon = 0.10; // 10%
    } else if (totalBelanja >= 100000) {
        persentaseDiskon = 0.05; // 5%
    } else if (totalBelanja >= 50000) {
        persentaseDiskon = 0.03; // 3%
    } else {
        persentaseDiskon = 0;    // Tidak ada diskon
        console.log("Maaf, total belanja anda tidak memenuhi syarat untuk mendapatkan diskon.");
    }

    let jumlahDiskon = totalBelanja * persentaseDiskon;
    let totalBayar = totalBelanja - jumlahDiskon;
    console.log();
    console.log("\n--- Rincian Pembayaran ---");
    console.log("Total belanja anda adalah Rp. " + totalBelanja.toLocaleString('id-ID'));
    console.log("Diskon yang diperoleh adalah Rp. " + jumlahDiskon.toLocaleString('id-ID') + " (" + (persentaseDiskon * 100) + "%)");
    console.log("Total yang harus dibayar adalah Rp. " + totalBayar.toLocaleString('id-ID'));

    readline.close();
}); 
