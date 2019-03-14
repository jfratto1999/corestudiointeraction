console.log("hello!")

var number = -3.5;
	console.log(number)
	number = number + 5;
	console.log(number)

var string = "this is a string";

	console.log(string)
	string = string + number; 
	// a string + a number will result in a string
	console.log(string)

var aBoolean;
	console.log(aBoolean)


/**********************/
// get an element and add a class:
var idName = "myElement";
var myFirstElement = document.getElementById(idName);

	//myFirstElement.classList.add("newClass")
	//myFirstElement.classList.remove("newClass")
	myFirstElement.classList.toggle("newClass")


// get an element and add a custom style
var mySecondElement = document.getElementById("myList")
	console.log(mySecondElement)

var myNewNumber = 5;
	myNewNumber = myNewNumber + 1;

	mySecondElement.style.letterSpacing = myNewNumber + "px";

var red = 255;
var green = red/2;
var blue = red/4;

mySecondElement.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

var myFunction = function(){
	
	if(red <= 0){
		red = 255;
		console.log("reset")
	}else{
		red = red - 5;
		console.log("-5")
	}

	green = red/2;
	blue = red/4;

	mySecondElement.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

}

var myButton = document.getElementById("myButton")
myButton.onclick = function() {myFunction()};

var myList = document.getElementById("myList");
var mySecondButton = document.getElementById("mySecondButton");
var addingAListElement = function(){

	console.log(myList.innerHTML.length)

	if(myList.innerHTML.length > 500){
		myList.innerHTML = "";
	}else{
		console.log("test")

		var myNewElement = document.createElement("li");
		myNewElement.className = "important";
		myNewElement.innerHTML = "<a href='https://google.com'>test</a> not bold";


		myList.appendChild(myNewElement)
	}



}


mySecondButton.onclick = function(){addingAListElement()}







	












