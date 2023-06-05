var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;
var invalidGuesses = 0;

var isSunk = false;



while (isSunk == false) {

	// prompt user for input
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");

	// compare the user's input to valid input values	
	// IF the user's guess is invlid, tell user to enter a valid number
	// Add one to guesses
	if (guess < 0 || guess > 6) {
		invalidGuesses = invalidGuesses + 1;
		alert("Please enter a valid cell number!");
	} else {
		guesses = guesses + 1;
	}

	// If the user's guess matches a location, add one to number of hits
	if (guess == location1 || guess == location2 || guess == location3) {
		alert("HIT!");
		hits = hits + 1;

		// If number of hits is 3, SET isSunk to true
		if (hits == 3) {
			isSunk = true;
			// Tell user "You sank my battleship!"
			alert("You sank my battleship!");
		}
	} else {
		alert("MISS");
	}

}

// Tell user stats; if user made no invalid guesses, print the following:
if (invalidGuesses == 0) {
	var stats = "You took " + guesses + " guesses to sink the battleship, and made " + hits +
		" hits, which means your shooting accuracy was " + (3 / guesses);

	alert(stats);
} else { // if user made 1 or more invalid guesses, print the folliwng instead:
	var stats = "You took " + guesses + " guesses to sink the battleship, and made " + hits +
		" hits, which means your shooting accuracy was " + (3 / guesses) +
		". However, you made " + invalidGuesses +
		" invalid guesses, which means you're not great at following directions.";

	alert(stats);
}
