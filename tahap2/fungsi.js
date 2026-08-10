//Bagian A
function konversiSuhu(celcius) {
    return (celcius * 9 / 5) + 32
};

console.log(konversiSuhu(26)) //78.8
console.log(konversiSuhu(20)) //68
console.log(konversiSuhu(15)) //59

//Bagian B

const konversiSuhuArrow = celcius => {
    return (celcius * 9 / 5) + 32;
};

console.log(konversiSuhuArrow(26)) //78.8
console.log(konversiSuhuArrow(20)) //68
console.log(konversiSuhuArrow(15)) //59

//Bagian C

function buatProfile(nama, kota = "tidak diketahui") {
    return nama + " dari " + kota
}
console.log(buatProfile("Fatur", "Jakarta")); // Fatur dari Jakarta
console.log(buatProfile("Adam")); // Adam dari tidak diketahui

function rataRata(...nilai) {
    let hasil = nilai.reduce((total, n) => total + n, 0)/nilai.length;
    return hasil;
}

console.log(rataRata(1, 2, 5)) // 2.666
console.log(rataRata(1, 2, 5, 9, 8)) //5

//Bagian D

let namaSekolah = "SDN 03";

function kelasSekolah() {
    let kelas = "Kelas 4a";
    console.log(kelas)
    console.log(namaSekolah)
}
kelasSekolah(); // SND 03 Kelas 4a
console.log(kelas);
// error karena variabel let/const itu hidup di block scope.

/*
7. parameter adalah deklarasi variabel yang diisi function, argumen deklarasi 
nilai parameter ketika pemanggilan function.

sebenrnya arrow function dan function itu cuma gaya cara menulisa aja, tapi
kelebihan function biasa adalah ketika function didalam object dapat menggunakan function this

*/