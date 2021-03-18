Follow the instructions atop Odin’s Google Homepage project to setup a git repository for this project.

Create a webpage with a 16x16 grid of square divs

Create the divs using JavaScript… don’t try making them by hand with copy and pasting in your html file!

Best to put your grid squares inside another “container” div (that one can go directly in your html)

There are several different ways to make the divs appear as a grid (versus just one on each line) feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid

Be careful with borders and margins, they can adjust the size of the squares!
“OMG, Why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools
Check if there are any errors in the JavaScript console
Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.


Hint: “hovering” is what happens when your mouse enters a div and ends when your mouse leaves it.. you can set up event listeners for either of those events as a starting point.
There are multiple ways to change the color of the divs, including:
adding a new class to the div
changing the div’s background color using JavaScript.

Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered the new grid should be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, resulting in possible delays, freezing, or crashing that we want to prevent.

Research button tags in HTML and how you can make a JavaScript function run when one is clicked.

Also check out prompts

You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used
(Optional): Instead of just changing the color of your grid from black to white (for example) have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

Push your project to GitHub!



//1 create repo on github
2 create a web page with a 16 x 16 grid use jscript and put it in container use css grid
3 create a hover efect to fill in grid changing the div’s background color using JavaScript.
4 add a button asking how big the grid is. max 64.
  
  // // //   // // 1. Find and store the element we want to listen to events on.

// var hover = document.querySelectorAll("#div.grid-item");
    
//   // 2. Define the function that will respond to the event.
//   var onhover = function() {
//       //hover.textContent = "Oh wow, you hovered me!";
//       hover.style.backgroundColor = 'black';
//       console.log(hover);

// // //   // };
// // //   // // 3. Add the event listener for the element and function

// hover.addEventListener("onmouseover", onhover);
// // //   // // 4 remove event after a bit
  
// // //   // // 5 change background ccolor

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (i = 0; i < (rows * cols); i++) {
//     let cell = document.createElement("div");
//     cell.innerText = i;
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(10, 10);

// const para = document.querySelectorAll('div.grid-item');



 function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = i;
    grid.appendChild(cell).className = "grid-item";
    const container = document.querySelectorAll('#grid').addEventListener('mouseover' ,function(e){
      e.document.querySelectorall('#grid-item').body.style.backgroundColor = "red";
      
    });
  };
};
makeRows(10,10);
var color = [, "#3C9EE7", "#E7993C",  
 "#E73C99", "#3CE746", "#E7993C"]; 
document.querySelectorAll('div.grid-item').addEventListener( 
  "mouseover", colors);

var colors= function(){  
    document.querySelectorAll('div.grid-item').style.background  
        = color[Math.floor(Math.random() * color.length)]; 
    }
    console.log(colors);
// const hover = function(){
//   hover = document.getElementById('grid').addEventListener( 
//      "click", hover);

  //console.log(container);
//}

