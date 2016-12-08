

(function(){
	//main function
	 startSymulation();
}())


function startSymulation(){
	document.body.style.width = "100%";
	document.body.style.height = "100%";
	var node = document.createElement("DIV");
	node.style.height ="10em";
	node.style.width ="10em";
	node.style.backgroundColor ="red"
	node.style.borderRadius = "100%";
	node.style.position = "absolute";
	
	document.body.appendChild(node);

	document.body.onmouseover = function(event){
		
        node.style.left = event.clientX;
        node.style.top = event.clientY;
	}

}

 