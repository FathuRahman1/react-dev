//Bagian A
class Produk {
  #stok;
  static jumlahDibuat = 0;
  constructor(nama, harga, stok) {
    this.nama = nama;
    this.harga = harga;
    this.#stok = stok;
    Produk.jumlahDibuat++;
  }
  get stok() {
    return this.#stok;
  }

  kurangiStok(jumlah) {
    if (jumlah > this.#stok) {
      throw new Error("Jumlah yang dimasukkan lebih dari total stok");
    } else if (jumlah < 0) {
      throw new Error("Jumlah yang dimasukkan tidak boleh negatif");
    } else {
      this.#stok -= jumlah;
    }
  }
  deskripsi() {
    return `Nama: ${this.nama}, Harga: ${this.harga}, Stok: ${this.#stok}`;
  }
  static termurah(produkArray) {
    let harga = produkArray.map((p) => p.harga);
    let hargaTerendah = Math.min(...harga);
    return produkArray.find((produk) => produk.harga === hargaTerendah);
  }
}
const produk1 = new Produk("Buku", 10000, 10);
const produk2 = new Produk("Pensil", 1000, 15);
const produk3 = new Produk("Penghapus", 5000, 21);

console.log(produk1.deskripsi());
console.log(produk2.deskripsi());
console.log(produk3.deskripsi());

//Bagian B
try {
  produk1.kurangiStok(11); // Akan menampilkan error karena stok tidak cukup
} catch (error) {
  console.error(error.message);
}
try {
  produk1.kurangiStok(-5); // Akan menampilkan error karena jumlah yang dimasukkan negatif
} catch (error) {
  console.error(error.message);
}
produk1.kurangiStok(3); // Akan mengurangi stok produk1 sebanyak 3
console.log(produk1.stok);

//Bagian C
const termurah = Produk.termurah([produk1, produk2, produk3]);
console.log(
  "Produk termurah adalah " + termurah.nama + " seharga " + termurah.harga,
);

//Bagian D
class ProdukDigital extends Produk {
  constructor(nama, harga) {
    const stok = Infinity;
    super(nama, harga, stok);
  }
  deskripsi() {
    return `${super.deskripsi()} (Produk Digital)`;
  }
}

class ProdukFisik extends Produk {
  constructor(nama, harga, stok, beratGram) {
    super(nama, harga, stok);
    this.berat = beratGram;
  }
  deskripsi() {
    return `${super.deskripsi()} dengan berat ${this.berat} gram`;
  }
}

const produkArray = [
  new ProdukFisik("Buku Fisik", 15000, 5, 0.5),
  new ProdukDigital("E-book", 50000),
];
produkArray.forEach((p) => console.log(p.deskripsi()));

//Bagian E
const bisaDiskon = (self) => ({
  hitungDiskon: (persen) => self.harga * ((100 - persen) / 100),
});
const bisaDikirim = (self) => ({
  ongkir: (jarakKm) => jarakKm * self.harga,
});

const buatPaketPromo = (nama, harga) => {
  const self = { nama, harga};
  return {
    ...self,
    ...bisaDiskon(self),
    ...bisaDikirim(self),
  };
};
const paketPromo = buatPaketPromo("Paket Promo", 100000);
console.log(paketPromo);
console.log("Harga setelah diskon: " + paketPromo.hitungDiskon(5));
console.log("Ongkir: " + paketPromo.ongkir(10));


/*soal 16. komposisi lebih cocok untuk kasus ini karena misalnya merek kendaraan ada yang memiliki  mobil sana dan motor saja tapi ada juga yang punya keduanya.
 daripada buat satu2 mending membuat object composisi yab bisa digunakan sesuai kebutuhan
 kalo buat berarti buat 3 buah class kendaraan(mobil, motor, motor&mobil)


 no. 17 semacam fuction mandiri yang ga bergantung dengan data dari classnya sendiri. contohnya Math.min() yamg bisa saya lngsung panggil tanpa harus memebuat object Matnya
 sedangkan function biasa itu harus memanggil data dari classnya sendiri. contohnya method deskripsi() yang memanggil data dari class Produk.
 jumlahDibuat itu milic class jadi dapat dipanggil langsung tanpa harus buat objecnya terlebih dahulu
 no.18. class Produk
 no.19. arrow function mencari nilai this dari sekitar, smenetara function biasa mengambil thisnya dari siapa yang memanggilnya 
*/
