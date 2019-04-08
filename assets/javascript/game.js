// make list of all possible selections for computer to choose

var countries = ["BRAZIL", "USA", "ENGLAND","CROATIA","GHANA"];

for(var i=0; i<countries.length; i++){
console.log(countries[i])
};

console.log(countries);

//computer selects random number which choses random choice of country from list

var randomNumber = Math.floor(Math.random()*countries.length);
wordChoice = countries[randomNumber];

console.log(wordChoice);

//computer counts letters in the string and displays blanks for every letter in word

var blankWord = [];

for(var i=0;i<wordChoice.length; i++){
blankWord.push("_ ")
};
console.log(blankWord);


//computer stores every letter in word in an array

var wordLetters = wordChoice.split('');
console.log(wordLetters);


//player choses letter 

var turns = 15;
var incorrectGuesses = []

document.onkeyup = function(){
    var userGuess = String.fromCharCode(event.keyCode).
    toUpperCase();
    

    console.log(userGuess);
    console.log(turns);

    //letter chosen by player is compared to letters in array from wordChoice.  
    for(var i=0; i<wordLetters.length; i++){

        //If letter matches then take numbers in array where letters match and replace the blank with that number with that letter.
        if(wordLetters[i].includes(userGuess)){
            blankWord.splice(i,1,userGuess);
            console.log(blankWord);
        }
        
    }
    //If letter does not match letter in word. then letter is shown in box of chosen letters at bottom of screen. 
    if(wordLetters.includes(userGuess)=== false) {
        incorrectGuesses.push(userGuess);
        console.log(incorrectGuesses);
    }
    //turns decreases by 1
    turns--;
}



//If all letters are guessed then picture changes, winns++, and song it played. 
//Create object for each countries victory. include picture of flag + national anthem.

//game resets turns reset

//if all the choices are made and word is not guessed then game resets, loses++.



// how to display in HTML
// js: document.getElementById("demo").innerHTML = n;
// html: <p id="demo"></p>



