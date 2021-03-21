const container = document.getElementById("grid");

 function monkey() {
   number = prompt("Please enter number lower that 100", "64");
   number=Math.round(number);
    if ( (number <= 100) && (number != 0)&& number !=null) { 
      makeRows(number, number);
    }
    else {
      location.reload();
    }
    const test = document.querySelectorAll('.grid-item');
    for (var i = 0 ; i < test.length; i++) {
      
      test[i].addEventListener('mouseover' ,color)
      console.log('mouseover');  
      
}
} 




function makeRows(rows, cols) {
;  container.style.setProperty('--grid-rows', rows);
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
   //console.log(bgColor);
   return bgColor;
    }
    // this.innerText = random_bg_color();
    this.style.background = random_bg_color();
};
  
function whiteWash(){
  //window.location.reload();
  var bgColor = `rgb(256,256,256)`;
  const test = document.querySelectorAll('.grid-item');
   for (var i = 0 ; i < test.length; i++) {
     test[i].style.background = bgColor; 
  }
}

function allBlack(){
  var bgColor = `rgb(0,0,0)`;
  const test = document.querySelectorAll('.grid-item');
   for (var i = 0 ; i < test.length; i++) {
     test[i].style.background = bgColor; 
  }

}


function restart(){
  //location.reload();
}
  


