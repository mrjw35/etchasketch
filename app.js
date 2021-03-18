

const container = document.getElementById("grid");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const test = document.querySelectorAll('.grid-item');
   for (var i = 0 ; i < test.length; i++) {
     test[i].addEventListener('mouseover' , function(){
       this.style.background = "red";
     }); 
  }
// test.addEventListener("mouseover" , function(e){
//   e.style.backgroundcolor = "red"});


