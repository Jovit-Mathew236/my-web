button{
    width: 100px;
    height: 50px;
    border:2px solid green;
    border-radius: 20%;
    background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
    float:right;
}

var colors = ["black", "blue"];
var colorIndex = 0;
function changeColor() {
    var col = document.getElementById("body");
    if( colorIndex >= colors.length ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

<button onclick="changeColor();">Change theme</button>