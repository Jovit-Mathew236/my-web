var colors = ["black", "blue", ];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;
    }
function Alt(){
    alert("https://jovit-mathew236.github.io/my-personal-web/")
} 
