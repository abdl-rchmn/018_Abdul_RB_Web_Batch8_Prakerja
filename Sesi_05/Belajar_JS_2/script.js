var bilangan1 = 6;
var bilangan2 = 2;

var penjumlahan = bilangan1 + bilangan2;
var pengurangan = bilangan1 - bilangan2;
var perkalian = bilangan1 * bilangan2;
var pembagian = bilangan1 / bilangan2;
var modulus = bilangan1 % bilangan2;

document.getElementById("penjumlahan").innerHTML = penjumlahan;
document.getElementById("pengurangan").innerHTML = pengurangan;
document.getElementById("perkalian").innerHTML = perkalian;
document.getElementById("pembagian").innerHTML = pembagian;
document.getElementById("modulus").innerHTML = modulus;

tampilkanNama();
document.write(tampilkanAlamat());

function tampilkanNama() {
    console.log("Hello World dari function tampilkanNama()");
}

function tampilkanAlamat() {
    return "Jl. Kaliurang KM 5, Yogyakarta";
}

function tampilkanAlamatHTML() {
    document.getElementById("func_string").innerHTML = tampilkanAlamat();
}