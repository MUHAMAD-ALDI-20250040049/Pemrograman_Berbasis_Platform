let product = {
  name: "Laptop Gaming",
  price: 15000000,
  stock: 5,
  
  // Fungsi untuk membeli produk / mengurangi stok
  buyProduct: function(quantity) {
    if (this.stock <= 0) {
      console.log(`Maaf, produk ${this.name} stok habis!`);
    } else if (quantity > this.stock) {
      console.log(`Stok tidak cukup. Sisa stok ${this.name} hanya ${this.stock}.`);
    } else {
      this.stock -= quantity;
      console.log(`Berhasil membeli ${quantity} ${this.name}. Sisa stok sekarang: ${this.stock}`);
      
      if (this.stock <= 0) {
        console.log(`Peringatan: Stok ${this.name} sudah habis!`);
      }
    }
  },
  
  // Fungsi untuk menampilkan informasi produk
  infoProduct: function() {
    return (
      "Nama Produk: " + this.name + "\n" +
      "Harga: Rp " + this.price + "\n" +
      "Stok Tersedia: " + this.stock
    );
  }
};

// Pengujian program:
console.log("--- Informasi Awal ---");
console.log(product.infoProduct());

console.log("\n--- Simulasi Pembelian 1 ---");
product.buyProduct(2); // Sisa stok jadi 3

console.log("\n--- Simulasi Pembelian 2 ---");
product.buyProduct(3); // Stok habis (sisa 0)

console.log("\n--- Simulasi Pembelian 3 (Saat Stok Habis) ---");
product.buyProduct(1); // Memicu pesan stok habis