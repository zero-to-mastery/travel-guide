var ul=document.querySelector("ul");

function toggle(event){
	event.target.classList.toggle("done");	
}

ul.addEventListener("click",toggle);

