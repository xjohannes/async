
function friday () {
	//goToWork();
	//doSomeCoding();
	//lunch();
	//attendMeeting(3);
	goEatChocolate();
	//doSomeMoreCoding();
	goHome();

	friday();
}
function attendMeeting (durationOfMeeting) {
	console.log("Walking to meeting room");
	var counter = 0, meetingIsOver = durationOfMeeting;
	greetBoss("Erik Amunrud");
	findSeat();
	doSomeSmalltalk("trying to say something funny");
	while(counter < meetingIsOver) {
		listen();
		counter++;
	}
}
function greetBoss (bossName) {
	console.log("Good afternoon ", bossName)
}
function listen () {
	tryNotToFallAsleep();
}
function findSeat () {
	console.log("Sitting down on chair in meeting room");
}
function tryNotToFallAsleep () {
	try {
		talkSomeSense();
	} catch (err) {
		console.log("Eh...", err);
		pinchSelf();
	}
}
function talkSomeSense () {
	if((Math.random() * 100) <= 50 ) {
		console.log("Some sensible talk");
	} else {
		console.log("Some nonsensical rambling");
		throw new Error("Sorry. I don't remember");
	}
}
function pinchSelf () {
	console.log("Pinching self");
	console.log("Aouch");
}

function doSomeSmalltalk (pun) {
	console.log("Bla bla " + pun + ", bla bla");
}






////// Eat Chocolate //////////////
function goEatChocolate () {
	console.log("Walk to Chocolate");
	waitForChocolateToArrive();	
}





function makeSomeoneFetchChocolate(ttfb) {
	const timeToFindBjorg = ttfb;
	setTimeout(function {
		findBjorg();
		serveChocolate(function() {
		console.log("Chocolate is served");
	});
	}, timeToFindBjorg);
}

function serveChocolate (callback) {
	callback();
}





function waitForChocolateToArrive() {
	doSomeSmalltalk("Some mediocre pun");
	makeSomeoneFetchChocolate(0);
}




function findBjorg () {
	console.log("Crackle crackle"); 
	console.log("(Bjørg opening chocolate)");
}

function eatChocolate() {
	console.log("Much chocolate");
}



function goHome() {
	console.log("Have a nice weekend team");
}





export {friday};