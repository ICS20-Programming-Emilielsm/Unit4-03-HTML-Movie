
"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
  // initialize variables and constant
	let answer = ""
  const MIN_R = 18
  const MIN_PG = 13
// get user input
	let age = parseInt(document.getElementById('age').value)

  	// if guess is right says correct
	if (age >= MIN_R) {
		answer = "You can see an R-rated movie!"
	} 
	//if else 	
	else if (age >= MIN_PG) {
		answer = "You can see a PG rated movie!"
	}

  else  {
		answer = "You can see a G-rated movie!"
	}

  // display the results
  document.getElementById('answer').innerHTML = answer 
}