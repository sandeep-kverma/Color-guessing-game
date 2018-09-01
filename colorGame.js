var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.getElementsByClassName("square");
var color_picked = document.getElementById("color_code");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var hardMode = document.querySelector("#hardBtn");
var easyMode = document.querySelector("#easyBtn");
var pickedColor = pickColor();

color_picked.textContent = pickedColor;

easyMode.addEventListener("click", function() {
    numSquares = 3;
    hardMode.classList.remove("selected");
    easyMode.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    color_picked.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++) {
        if( colors[i] ) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
})

hardMode.addEventListener("click", function() {
    numSquares = 6;
    easyMode.classList.remove("selected");
    hardMode.classList.add("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    color_picked.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";       
    }
})

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    color_picked.textContent = pickedColor;
    for(var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New colors";
    h1.style.backgroundColor = "steelblue";
    message.textContent = "Pick a color.";
})

for(var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            message.textContent = "Correct color.";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play again?";
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong color. Try again.";
        }
    })
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    var arr = [];
    for( var i = 0; i < num; i++ ) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
}