const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Pilih Jenis Olahraga:");
console.log("1. Lari");
console.log("2. Push-up");
console.log("3. Plank");

readline.question("Masukkan pilihan (1/2/3): ", (pilihan) => {
    
    if (pilihan === "1" || pilihan === "2" || pilihan === "3") {
        
        readline.question("Masukkan durasi (menit): ", (inputMenit) => {
            let menit = parseFloat(inputMenit) || 0;
            let totalKalori = 0;
            let namaOlahraga = "";

            if (pilihan === "1") {
                namaOlahraga = "Lari";
                totalKalori = (menit / 5) * 60;
            } else {
                if (pilihan === "2") {
                    namaOlahraga = "Push-up";
                    totalKalori = (menit / 30) * 200;
                } else if (pilihan === "3") {
                    namaOlahraga = "Plank";
                    totalKalori = menit * 5;
                }
            }

            // Membulatkan total kalori menjadi bilangan bulat (genap/tanpa koma)
            let kaloriBulat = Math.round(totalKalori);

            console.log("\n--- Hasil ---");
            console.log("Olahraga: " + namaOlahraga);
            console.log("Durasi: " + menit + " menit");
            console.log("Kalori yang terbakar: " + kaloriBulat + " kalori");

            readline.close();
        });

    } else {
        console.log("Pilihan tidak valid! Jalankan ulang program.");
        readline.close();
    }
});
