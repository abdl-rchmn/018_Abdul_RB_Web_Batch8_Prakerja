function cetak() {
    var loopCountInput = document.getElementById("hitungan").value;
    var textInput = document.getElementById("isi").value;
    var loopCount = parseInt(loopCountInput);
    var outputElement = document.getElementById("list");

    if (!isNaN(loopCount) && loopCount > 0) {
      outputElement.innerHTML = ""; // Clear previous content

      for (var i = 1; i <= loopCount; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = textInput;
        outputElement.appendChild(listItem);
        // Add your code here to execute in each iteration
      }
    } else {
      outputElement.innerHTML = "Tolong masukkan jumlah pengulangan.";
    }
  }