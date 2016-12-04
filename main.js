(function(){
	for(var index = 1; index <= 10; index+=2){
		console.log(index--);
		greet();
	}
})()

function greet(){
	console.log("hello");
}