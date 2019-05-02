dragElement(document.getElementById("t1"));
dragElement(document.getElementById("t2"));
dragElement(document.getElementById("t3"));
dragElement(document.getElementById("t4"));
dragElement(document.getElementById("t5"));
dragElement(document.getElementById("t6"));
dragElement(document.getElementById("t7"));
dragElement(document.getElementById("t8"));
dragElement(document.getElementById("t9"));
dragElement(document.getElementById("t10"));
dragElement(document.getElementById("t11"));
dragElement(document.getElementById("t12"));
dragElement(document.getElementById("t13"));
dragElement(document.getElementById("t14"));
dragElement(document.getElementById("t15"));
dragElement(document.getElementById("t16"));
dragElement(document.getElementById("t17"));
dragElement(document.getElementById("t18"));
dragElement(document.getElementById("t19"));
dragElement(document.getElementById("t20"));
dragElement(document.getElementById("t21"));


// random amount
var allTattoos = document.getElementsByClassName("tattoo_image")
var randomAmount = 3 + Math.round(Math.random()*2)

var counter = 0;

// hiding some of the tattoos
for (var i = 0; i < allTattoos.length; i++) {
  if(Math.random() > 0.5){
    allTattoos[i].style.display = "none";
  }else{
    // if the tattoo is displayed, increase the count, also give it a random position

   // var leftPosition = Math.round(Math.random()*90);
   // var topPosition = Math.round(Math.random()*90);
   // allTattoos[i].style.left = leftPosition + "%";
   // allTattoos[i].style.top = topPosition + "%";


    counter++;
    if(counter >= randomAmount){
      allTattoos[i].style.display = "none";
    }
  }

}

// 1. to download an image of your html, there might be a way to place your html onto a canvas and then "print" (i.e. download) that canvas element
// 2. html directly to image: https://stackoverflow.com/questions/10721884/render-html-to-an-image
  // 
var drawingBeingMoved = false;


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  // console.log(elmnt);
  
  if(elmnt == null){
    return
  }


  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    drawingBeingMoved = true;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    drawingBeingMoved = false;
  }
}


function setup() {
  createCanvas(1500, 1500);
  background(255, 255, 255);
}

function draw() {

  stroke(0);
  if (mouseIsPressed === true) {
    if (drawingBeingMoved == false) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}



















/*document.getElementById("download").onmousedown = function(){
  console.log("test")
  html2canvas(document.body).then(function(canvas) {
      
      canvas.setAttribute('crossOrigin', 'anonymous');
*/


      // steps:
      /*
        - you save your canvas to the doucment (or inside a div w/ appendChild)
        - then get that canvas and run toDataUrl()
        - then save the converted canvas to an document.getElementById("imgid").src = 
        - and then it either produces a button to download or you can use the a tag w/ "download attribute"
      */


      // document.getElementById("download_image").appendChild(canvas);


      // document.getElementById("download_image").src = canvas.toDataURL('image/jpeg', 1.0);
      // this doesnt work bc of "tainted canvas" being generated.  (this may work on github pages?)
      // you still have access to the canvas (which stupidly canb e downloaded with a right click "save image")










