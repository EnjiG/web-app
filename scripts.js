function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('color-box').style.backgroundColor = randomColor;
    document.getElementById('color-code').innerText = randomColor; // Display hex code
}

//document.getElementById('generate-btn').addEventListener('click', generateRandomColor);

