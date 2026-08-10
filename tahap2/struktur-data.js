//Bagian A
const buku = {
    judul: "Belajar JavaScript",
    penulis: "John Doe",
    tahunTerbit: 2021,
    stok: 10,
}

buku.tersedia = true;
const {judul, penulis} = buku;
console.log("judul buku: " + judul + " oleh " + penulis);
const bukuDiskon = { ...buku }
bukuDiskon.stok -= 1;
console.log(buku);
console.log(bukuDiskon);

//Bagian B
const daftarHarga = [10000, 20000, 30000, 40000, 50000, 55000];
const hargaMurah = daftarHarga.filter(harga => harga < 50000);
const hargaSetelahPajak = daftarHarga.map(harga => harga * 1.11);
const totalHarga = daftarHarga.reduce((total, harga) => total + harga, 0);
console.log(daftarHarga);
console.log(hargaMurah);
console.log(hargaSetelahPajak);
console.log(totalHarga);


//Bagian C

const stokBarang = new Map();
stokBarang.set("Buku", 10);
stokBarang.set("Pensil", 30);
stokBarang.set("Penghapus", 11);

for (const [barang, stok] of stokBarang) {
    console.log(barang + " : " + stok);
}

//Bagian D
const tagArtikel = ["JavaScript", "JavaScript", "Pemrograman", "Web", "Frontend", "Backend"];
const tagUnik = [... new Set(tagArtikel)];
console.log(tagUnik);

/* Bagian E
memilih object untuk 1 data lengkap seperti data seseorang,
sedangkan Map untuk data yang memiliki key yang dinamis.

map() ddan filter() merupakan metore array yang immutable data aslinya
sehingga metode ini menghasilkan array baru dan tidak merubah data aslinya
*/