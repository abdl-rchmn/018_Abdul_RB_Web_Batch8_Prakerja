function calculateCircumference() {
  // Get the value of the radius input field
  var radius = document.getElementById("radius").value;

  // Calculate the circumference using the formula: 2 * π * radius
  var circumference = 2 * Math.PI * radius;

  // Display the result on the HTML page
  document.getElementById("result").innerHTML = "Keliling lingkaran adalah: " + circumference;
}

  // Source: ChatGPT