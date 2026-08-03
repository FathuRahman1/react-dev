// Bagian A
const namaLengkap = "Fathu Rahman";
const tahunLahir = 1999;
let sudahMenikah = false;
let hobbyFavorit = "Lari";

console.log(typeof namaLengkap);
console.log(typeof tahunLahir);
console.log(typeof sudahMenikah);
console.log(typeof hobbyFavorit);

let statusPendaftaran = null;
let statusVerifikasi;

console.log(statusPendaftaran);
// hasilnya null atau data kosong
console.log(statusVerifikasi);
// data belum ada nilainya sama sekali

// Bagian B
let usiaSaatIni = 2026 - tahunLahir;
let status =
  usiaSaatIni >= 17
    ? "Sudah Cukup Umur untuk Membuat KTP"
    : "Belum Cukup Umur untuk Membuat KTP";
console.log(status);

console.log(9 == "9"); // true
console.log(9 === "9"); // false

/*
jawaban no.6 dikarenakan type coercion
*/

// Bagian C
console.log("10" - 2);
/*
pakai let ketika datanya mau datanya di ubah2.
pakai const ketika membuat data yang tidak akan / bisa dirubah sehingga lebih aman
untuk data2 sensitif. var adalah konstanta lawas, kemudian kekurangannya adalah
dia dapat bocor dari blok kode sementara let dan const terkurung di dalam bloknya (block-scoped)
*/
