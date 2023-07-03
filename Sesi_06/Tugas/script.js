var textElements = [
    {element: document.getElementById('para_1'), color: '#ff0000'},
    {element: document.getElementById('para_2'), color: '#00ff00'},
    {element: document.getElementById('para_3'), color: '#0000ff'}
];

var currentIndex = 0;
function changeColor() {
    var currentElement = textElements[currentIndex].element;
    var currentColor = textElements[currentIndex].color;
    
    currentElement.style.color = currentColor;

    currentIndex++;
    if (currentIndex >= textElements.length) {
        currentIndex = 0;
    }
}

var interval = setInterval(changeColor, 1500);

setTimeout(function() {
    clearInterval(interval);
}, 4500);