function startGame(){
	for (var i = 1; i <= 9; i++) {
		clearBox(i);
	}
	document.count = 0;
	document.turn = 'X';
	document.winner = null;
	setMessage(document.turn + " to start");
	var imgElementToClear = document.getElementById("winnerclipart");
	imgElementToClear.removeChild(imgElementToClear.childNodes[0]);
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function fillBoxWithColor(square){
	square.style.backgroundColor = "#C1FBF5";
}

function nextMove(square){
	if(document.winner){
		setMessage("We already have a winner - "+document.turn);
	}
	else if(square.innerText === ''){
		square.innerText = document.turn;
		fillBoxWithColor(square);
		switchTurn();
		document.count += 1;
	}
	else{
		setMessage("Pick another square");
	}

	if(!document.winner && document.count === 9){
		setMessage("Oh...! Its a Draw.");
	}
}

function switchTurn(){
	if(checkForWinner(document.turn)){
		setMessage("Congrats "+document.turn + ", you won!");
		document.winner = document.turn;
		var imgElement = document.createElement("img");
		imgElement.setAttribute("src", "http://clipart-library.com/images/kcM5X4ncj.gif");
		imgElement.setAttribute("height", "15%");
		imgElement.setAttribute("width", "15%");
		imgElement.setAttribute("id", "resultimage");
		document.getElementById("winnerclipart").appendChild(imgElement);
	}
	else {
		document.turn = document.turn === 'X' ? 'O' : 'X';
		setMessage(document.turn + "'s turn");
	}
}

function checkForWinner(move){
	var result = false;
	if(	checkRow(1,2,3, move) || checkRow(4,5,6, move) || checkRow(7,8,9, move) ||
		checkRow(1,4,7, move) || checkRow(2,5,8, move) || checkRow(3,6,9, move) ||
		checkRow(1,5,9, move) || checkRow(3,5,7, move))
	{
		result = true;
	}
	return result;
}

function checkRow(a,b,c,move){
	var result = false;
	if(getBox(a) === move && getBox(b) === move && getBox(c) === move){
		result = true;
	}
	return result;	
}

function getBox(number){
	return document.getElementById("s"+number).innerText;
}

function clearBox(number){
	document.getElementById("s"+number).innerText = "";
	document.getElementById("s"+number).style.backgroundColor = "";
}