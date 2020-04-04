// Write a function named tellFortune.
// It takes 4 arguments: number of children (number), partner's name (string), geographic location (string), job title (string).
// Randomly select Elements from the arrays.
// Return a string: "You will be a [JOB_TITLE] in [LOCATION], and married to [PARTNER_NAME] with [NUMBER_KIDS] kids."
// Create 4 arrays, numChildren, partnerNames, locations and jobs. Give each array 5 random Elements that make sense
// Call the function 1 time, by passing the arrays as the argument.

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Amy", "Sally", "Kathy", "Tiffany", "Angie"];
const locations = ["Amsterdam", "San Francicso", "Dublin", "Istanbul", "Budapest"];
const jobs = ["lawyer", "teacher", "web developer", "software programmer", "photographer"];

 function tellFortune(numChildren, partnerNames, locations, jobs) {

 	function randomSelect(array){
 		return array[Math.floor(Math.random() * array.length)];
 	}	
	
	return "You will be a " + randomSelect(jobs) + " in " + randomSelect(locations) + 
			", and married to " + randomSelect(partnerNames) + " with " + randomSelect(numChildren) + " kids."

}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));




