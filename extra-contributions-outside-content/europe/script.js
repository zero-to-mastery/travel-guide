var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function addInputToList() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function checkLength() {
	return input.value.length > 0;
}

button.addEventListener("click", function() {
	if(checkLength()) {
		addInputToList();
	}
})

input.addEventListener("keypress", function(event) {
	if(checkLength() && event.keyCode === 13) {
		addInputToList();
	}
})