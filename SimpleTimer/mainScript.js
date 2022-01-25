let Start = 0;
let Seconds = 0;

setInterval(setTimer, 1000);
setInterval(checkUOF, 1);

function startStopTimer(){
	if(Start==0){
		document.getElementById('startStopBtn').innerHTML = "Stop";
		Start += 1;
	}
	else if(Start==1){
		document.getElementById('startStopBtn').innerHTML = "Start";
		Start -= 1;
	}
}

function setTimer(){
	if(Start==0){
		Seconds == Seconds;
	}
	else if(Start==1){
		Seconds += 1;
		document.getElementById('displayTimer').innerHTML = Seconds;
	}
}

function checkUOF(){ //UOF = Unit Of Time
	if(Seconds==1){
		document.getElementById('displayTimer_Seconds').innerHTML = "Second";
	}
	else if(Seconds>1){
		document.getElementById('displayTimer_Seconds').innerHTML = "Seconds";
	}
}

function resetTimer(){
	Seconds -= Seconds;
	document.getElementById('displayTimer').innerHTML = Seconds;
}