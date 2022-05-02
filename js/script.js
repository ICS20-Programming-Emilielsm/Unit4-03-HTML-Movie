
"use strict"

/**
 * This function displays a greeting based on the hour of the day
 */
function displayNumber () {
  // initialize variables and constant
	let answer = ""
  
// get user input
	let age = parseInt(document.getElementById('age').value)

  	// if guess is right says correct
	if (age >= 18) {
		answer = "You can see an R-rated movie"
	} 
	//if not says incorrect	
	else if {
		answer = "Cold. Bring a sweater."
	}

  // display the results
  document.getElementById('answer').innerHTML = answer 
}