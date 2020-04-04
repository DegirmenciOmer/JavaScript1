// In this project you'll write a script that validates whether or not a credit card number is valid.

// Here are the rules for a valid number:

// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// Make a JavaScript file with a name that describes its contents
// Create a function with a descriptive name, for example: doSomething or calcAnotherThing
// Write at least 2 comments that explain to others what a line of code is meant to do
// Make the return value of the function a template string, so you can insert variables!
// Use node from the command line to test if your code works as expected

function validateCard(cardNum){
	//this function works with string parameter so:
	if (typeof cardNum != "string") {
		return "Please enter your number in  strings."
	}

  // Number must consist of 16 digits
  if(cardNum.length !== 16){
  	console.log("Please enter a 16-digit-number.")
    return false;
  }

  // all of them must be numbers
  for(let i = 0; i < cardNum.length; i++){
    // declare a new variable to capture the current digit
    let currentNum = cardNum[i];

    // turn the digit from a string to an integer
    // resource: https://www.youtube.com/watch?v=vJs3tNbN9gg
    currentNum = Number.parseInt(currentNum, 10);

    // check if the digit is a number
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    if(!Number.isInteger(currentNum)){
    	console.log("Please enter a number.")
      return false;
    }
  }
  // 9999777788880000
  // {true,false,false,false,false,false,false,true,true,true}

 // You must have at least two different digits represented
  let obj = {};
  for(let i = 0; i < cardNum.length; i++){
    obj[cardNum[i]] = true;
  }
  if(Object.keys(obj).length < 2){
  	console.log("You must have at least two different digits represented.")
    return false;
  }

 // The final digit must be even
  if(cardNum[cardNum.length - 1] % 2 !== 0){
  	console.log("The final digit must be even.")
    return false;
  }

  // The sum of all the digits must be greater than 16
  let sum = 0;
  for(let i = 0; i < cardNum.length; i++){
    sum += Number(cardNum[i]);
  }
  if(sum <= 16){
  	console.log("The sum of all the digits must be greater than 16.")
    return false;
  }
  	console.log("Congratulations! This number is valid.")
  return true;
};


console.log(validateCard(9999777788880000));
console.log(validateCard("6666666666666661"));
console.log(validateCard("9999777788880000"));
console.log(validateCard("a92332119c011112"));
console.log(validateCard("4444444444444444"));
console.log(validateCard("6666666666661666"));
console.log(validateCard("1111111111111110"));

// The following credit card numbers are valid:
// 9999777788880000
// 6666666666661666
// The following credit card numbers are invalid:

// a92332119c011112 (invalid characters)
// 4444444444444444 (only one type of number)
// 1111111111111110 (sum less than 16)
// 6666666666666661 (odd final number)
