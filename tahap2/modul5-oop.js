//Bagian A
class Produk {
    #stok;
    static jumlahDibuat = 0;
    constructor(nama, harga, stock) {
        this.nama = nama;
        this.harga = harga;
        this.#stok = stock;
        Produk.jumlahDibuat++;
    }
    get sisaStok() {
        return this.#stok;
    }
    set stok(value) {
        if (value < 0) {
            console.log("Stok tidak boleh kurang dari 0");
        } else {
            this.#stok = value;
        }
    }
    kurangiStok(jumlah) {
        if (jumlah > this.#stok) {
            throw new Error("Jumlah yang dimasukkan lebih dari total stok");
        }
        else {
            this.#stok -= jumlah;
        }
    }
    deskripsi() {
        return this.nama + " seharga " + this.harga + " dengan stok " + this.sisaStok + " tersedia";
    }
    static hargaTermurah(produk1, produk2) {
        if (produk1.harga < produk2.harga) {
            return produk1.nama + " lebih murah daripada " + produk2.nama;
        } else if (produk1.harga > produk2.harga) {
            return produk2.nama + " lebih murah daripada " + produk1.nama;
        } else {
            return produk1.nama + " dan " + produk2.nama + " memiliki harga yang sama";
        }
    }
}
const produk1 = new Produk("Buku", 10000, 10);
const produk2 = new Produk("Pensil", 1000, 15);
const produk3 = new Produk("Penghapus", 5000, 21);


console.log(produk1.deskripsi());
console.log(produk2.deskripsi());
console.log(produk3.deskripsi());

//Bagian B
produk1.kurangiStok(6); // Akan menampilkan error karena stok tidak cukup
produk1.kurangiStok(-5); // Akan menampilkan error karena jumlah yang dimasukkan negatif
produk1.kurangiStok(3); // Akan mengurangi stok produk1 sebanyak 3
console.log(produk1.sisaStok);
console.log(produk1.stok);

//Bagian C
produk1.hargaTermurah(produk2, produk3); // Akan menampilkan "Pensil lebih murah daripada Penghapus"

//Bagian D
class ProdukDigital extends Produk {
    constructor(nama, harga){
        super(nama, harga);
    }
}

