// dogs is object with each possible dog choice and victory video inside

var dogs = [
    {
        name:"SHIBA", 
        video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/hhyS-E8GQbo?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"HUSKY",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/lxm_2s--q3A?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"LABRADOR",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/BOK-2G9GLfY?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"BULLDOG",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/VD2GUDpwuvM?start=18?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"CHIHUAHUA",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/jjOc_8Kp6YI?start=9?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"DALMATION",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/VOH3esRT3GY?start=45?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"POODLE",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/dzPVHGE_RMQ?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"BEAGLE",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/Wbcy-luvFJM?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"DACHSHUND",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/NfXwt8Wqgvk?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"PUG",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/l3S7zyzg4P8?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"POMERANIAN",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/SeEcYAgQZlc?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
];

//computer selects random number which choses random choice of country from list
var turns = 3;
var wins = 0;
var losses = 0;

var dogNames = dogs.map((dog)=>dog.name);

function updateScore(){
document.querySelector('#wins').innerHTML = wins;
document.querySelector('#losses').innerHTML = losses;
document.querySelector('#turns').innerHTML = turns;
};


//selects initial random word to be guessed
var randomNumber = 0;

//make it a function here so you get the initial random word choice!!!!!


var wordChoice = '';

//computer counts letters in the string and displays blanks for every letter in word

var blankWord = [];


//store every letter in word in an array

var wordLetters = [];

var incorrectGuesses = [];
var correctGuesses = [];
var correctLetterTally = 0;
var userGuess;

randomNumber = Math.floor(Math.random()*dogNames.length);

function resetGame(){
    //reset game
    while (correctGuesses.indexOf(randomNumber)>=0) {
        randomNumber = Math.floor(Math.random()*dogNames.length);
      }
    
    wordChoice = dogNames[randomNumber];
        console.log(wordChoice);
    
    wordLetters.length = 0;
    wordLetters = wordChoice.split('');

    blankWord.length = 0;

        for(var j=0;j<wordChoice.length; j++){
        blankWord.push(" _ ")
        };
    document.getElementById('blankWord').textContent = blankWord.join(""); 
    incorrectGuesses.length = 0;
    document.getElementById('incorrectGuesses').textContent = incorrectGuesses;

    correctLetterTally = 0;
    turns=3;

    updateScore();
}
resetGame();

//player choses letter 
    document.onkeyup = function(){
        userGuess = String.fromCharCode(event.keyCode).
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
                document.getElementById('blankWord').textContent = blankWord.join("");    
            }
            
        }
        //If letter does not match letter in word. then letter is shown in box of chosen letters at bottom of screen. 
        if(wordLetters.includes(userGuess)=== false && incorrectGuesses.includes(userGuess)===false) {
            incorrectGuesses.push(userGuess);
            console.log(incorrectGuesses);
            document.getElementById('incorrectGuesses').textContent = incorrectGuesses;
                // turns decreases by 1
                turns--;
                document.querySelector('#turns').innerHTML = turns;
        }
        //if you win
        if(correctLetterTally === wordLetters.length){
            wins++;
            correctGuesses.push(randomNumber);
            
            //insert changing picture and such here!!!!!!
            document.getElementById('video').innerHTML = dogs[randomNumber].video; 

            //reset game
            resetGame();
        }
        
        //if you lose
        else if(turns <= 0){
            losses++;
            //reset game
            resetGame();
        }
        
        
    }







//Create object for each dogs victory. include picture of flag + national anthem.

// https://teamtreehouse.com/library/create-an-array-of-objects


// variable = arrayname.join('');


