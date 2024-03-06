 // Function to update mouse position
 function updateMousePosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('position').innerHTML = x + ', ' + y;
}

// Add mousemove event listener to the document
document.addEventListener('mousemove', updateMousePosition);

