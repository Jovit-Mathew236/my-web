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
    swal("Good job!", "You clicked the button!", "success")
} 
function sweetAlert() {
    swal("What do you want to do?", {
      buttons: { //creates a button. You can separate them with a comma.
        cancel: "Cancel!", 
        catch: {
          text: "Submit!",
          value: "catch",
        },
        register: true,
        try: true,
      },
    })
    .then((value) => {
      switch (value) { //creates a switch inbetween the buttons we created above.
     
        case "register":
          swal("Type username here:", {
            content: "input", //content is an option which describe the content of the modal
          })
          .then((value) => {
            swal(`Your username is: ${value}`);
          });
          break;
     
        case "catch":
          swal("Yaay!", "Registered successfully!", "success");
          break; 

        case "try": // this is a confirm function in sweetalert
        swal("Are you sure?", {
          dangerMode: true, //this option setup a confirm modal in sweetalert.
          buttons: true,
        });    
        break;     
      }
    });
  }