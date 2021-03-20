


const container = document.getElementById("grid");

 function monkey() {
  var number = prompt("Please enter number lower that 64", "32");
  if ( (number <= 64) && (number != null)) {
    makeRows(number, number);
  }
  else {
    return monkey();
  }
  const test = document.querySelectorAll('.grid-item');
   for (var i = 0 ; i < test.length; i++) {
     test[i].addEventListener('mouseover' ,color)  
  }
}


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
  };
};



function color(){

  function random_bg_color() {
   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   console.log(bgColor);
   return bgColor;
    }
  this.style.background = random_bg_color();
};






  


