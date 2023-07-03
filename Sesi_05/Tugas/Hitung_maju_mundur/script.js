var hasil = document.getElementById("hasil");
var count = 0
hasil.innertext = count;

function down() {
    count = count - 1
    hasil.innerText = count;
}

function up() {
    count = count + 1
    hasil.innerText = count;
}