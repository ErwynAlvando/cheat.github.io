function showDiv() {
    document.getElementById('myDiv').style.display = "block";
 }

 var showEle = document.getElementById("show-id"); 
var buttonEle = document.getElementById("button-id"); 
buttonEle.addEventListener("click", buttonClick); 
function buttonClick(event){ 
	console.log('buttonClick(...)');// remove on publishing 
	updateUi(); 
	//event.preventDefault();// Use if a link 
} 
function updateUi(){ 
	console.log('updateUi()');// remove on publishing 
	showEle.style.display = "block"; 
	buttonEle.style.display = "none"; 
} 