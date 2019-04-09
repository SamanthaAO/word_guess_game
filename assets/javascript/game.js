// make list of all possible selections for computer to choose

var countries = ["BRAZIL", "USA", "ENGLAND","CROATIA","GHANA"];

//computer selects random number which choses random choice of country from list
var turns = 8;
var wins = 0;
var losses = 0;



var randomNumber = Math.floor(Math.random()*countries.length);
wordChoice = countries[randomNumber];

console.log(wordChoice);

//computer counts letters in the string and displays blanks for every letter in word

var blankWord = [];

for(var i=0;i<wordChoice.length; i++){
blankWord.push("_")
};
//want to display it without commas
console.log(blankWord);


//store every letter in word in an array

var wordLetters = wordChoice.split('');
console.log(wordLetters);

var incorrectGuesses = [];
var correctLetterTally = 0;

//player choses letter 




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
                //increase correctLetterrTally by 1 for each correct letter
                correctLetterTally++;
                console.log(blankWord);
                document.querySelector('#blankWord').innerHTML = blankWord;   
            }
            
        }
        //If letter does not match letter in word. then letter is shown in box of chosen letters at bottom of screen. 
        if(wordLetters.includes(userGuess)=== false && incorrectGuesses.includes(userGuess)===false) {
            incorrectGuesses.push(userGuess);
            console.log(incorrectGuesses);
            document.querySelector('#incorrectGuesses').innerHTML = incorrectGuesses;
                // turns decreases by 1
                turns--;
                document.querySelector('#turns').innerHTML = turns;
        }
        //if you win
        if(correctLetterTally === wordLetters.length){
            wins++;
            document.querySelector('#wins').innerHTML = wins;

            //insert changing picture and such here!!!!!!

                //reset game
                randomNumber = Math.floor(Math.random()*countries.length);
                wordChoice = countries[randomNumber];
                    console.log(wordChoice);

                wordLetters = wordChoice.split('');

                blankWord.length = 0;

                    for(var i=0;i<wordChoice.length; i++){
                    blankWord.push("_")
                    };

                incorrectGuesses.length = 0;

                correctLetterTally = 0;
                turns=8;
                
        }

        //if you lose
        if(turns <= 0){
            losses++;
            document.querySelector('#losses').innerHTML = losses;
                //reset game
                randomNumber = Math.floor(Math.random()*countries.length);
                wordChoice = countries[randomNumber];
                    console.log(wordChoice);

                wordLetters = wordChoice.split('');

                blankWord.length = 0;

                    for(var i=0;i<wordChoice.length; i++){
                    blankWord.push("_")
                    };

                incorrectGuesses.length = 0;

                correctLetterTally = 0;
                turns=8;
                //insert sad image for losing
        }
        
    }







//Create object for each countries victory. include picture of flag + national anthem.

var victoryArray = 



