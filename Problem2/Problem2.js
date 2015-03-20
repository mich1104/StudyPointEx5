/**
 * Created by Michael on 19/03/15.
 */

var numberToGuess;
var numberOfTries;
newNumber();
var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

function wasGuessCorrect(guess){


    if (guess !== numberToGuess) {

        console.log("Wrong guess");
        var change = higherOrLower(guess);
        numberOfTries++;
        console.log("You need to go " + change);
    } else {

        console.log("Correct guess, well done!");
        newNumber();

    }
    if(numberOfTries === 5) {

        console.log("You're out of tries");
        console.log("The number was "+numberToGuess);
        newNumber();
    }
}
function higherOrLower(guess){

    if(guess > numberToGuess){

        return "lower";
    } else {
        return "higher";
    }
}
function newNumber(){

    console.log("New number Generated");
    numberToGuess = Math.random()*100+1;
    numberToGuess = numberToGuess.toFixed(0);
    numberOfTries = 0;
}

rl.on('line', function(cmd){

    wasGuessCorrect(cmd);
});