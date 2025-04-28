let gameNum = 50;

let userNumber = prompt ("Guess the game number: ");

while( userNumber != gameNum ){
    userNumber = prompt ("You have entered wrong number, Try Again the Number: ")
}
console.log("Congratulations, you have entered the right Number.");