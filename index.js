// // random value generated 
// let i = (Math.floor(Math.random() * 25 + 1));
// // counting the number of guesses
// let guess = 1;
// // Chosen number player
// let x = Number;

 
//  result = prompt("Hello new player! " + "\n" + "What is your name?");
// alert ("Hello " + result + "!" );

// // if(confirm("Are you ready to play 'Guess the number' game?")) {
// //  console.log("Confirm");
// //  } else{
// //  console.log("Cancel");
// //  }

//  result = prompt("Enter your number between 0 and 25");
// while (x) {
 
// }
//  if (x > i) {
//  alert ("Guess lower");
//  } else if (x < i) {
//   alert ("Guess higher");
//  }else if (Number === i) {
//   alert("Congratulations! You guessed it right in! " + Number + " GUESSES ");
//  }



// // Show the chosen number
//  alert(i);

// --------------------------------- //

const readline = require("readline").createInterface({
 input: process.stdin,
 output: process.stdout
})

let numberToBeGuessed = null;

const getNameFromUser = function(question) {
 readline.question(question, (answer) => {
  console.log("Hallo! ", answer)
  startGame()
 })
}

const startGame = function (startGame) {
 const min = 0;
 const max = 25;

numberToBeGuessed = Math.floor(Math.random() * (max-min)) + min;
console.log(numberToBeGuessed);
getNumberInputFromUser ();
}

const endGame = function () {
 console.log("Bedankt voor het spelen")
 readline.close();
}
const checkInputFromUser = function(inputFromUser){
 console.log("Je gekozen nummer wordt gecheckt...")
 // Paars de input naar een number
 const numberInput = Number(inputUser)
 if (numberInput === numberToBeGuessed) {
  console.log("Dat is goed!! Gefeliciteerd");
  endGame()
 } else {
  console.log(inputUser, " ... dat is helaas niet goed. Probeer opnieuw")
  getNumberInputFromUser()
 }
  }

  const getNumberInputFromUser = function() {
    readline.question(`Voer een nummer in...`, (number) => {
        console.log("Je raadde dit nummer:", number)
        checkInputFromUser(number)
      })
  }

getNameFromUser('Wat is je naam?')