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
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/-6wbfijGL0o?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"CHIHUAHUA",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/Rr0Ss5iT-wA?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"DALMATION",
        video:"<iframe width='560' height='315' src='https://www.youtube.com/embed/38adYwOWTck?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
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

//variables are defined
var turns = 5;
var wins = 0;
var losses = 0;
var randomNumber = 0;
var wordChoice = '';
var wordLetters = [];
var blankWord = [];
var incorrectGuesses = [];
var correctGuesses = [];
var correctLetterTally = 0;
var userGuess;

//takes all the dog names and puts them in an array
var dogNames = dogs.map((dog)=>dog.name);

//function for when score is changed will be called in game reset
function updateScore(){
document.querySelector('#wins').innerHTML = wins;
document.querySelector('#losses').innerHTML = losses;
document.querySelector('#turns').innerHTML = turns;
};


//random number is assigned a value
randomNumber = Math.floor(Math.random()*dogNames.length);


//reset game this is also called at the begining of the game so that eveerything starts out blank and random
function resetGame(){
    //makes it so that same number cannot be chosen twice for random number
    while (correctGuesses.indexOf(randomNumber)>=0) {
        randomNumber = Math.floor(Math.random()*dogNames.length);
      }
    //choses random word from dogNames
    wordChoice = dogNames[randomNumber];
        console.log(wordChoice);
    
    wordLetters.length = 0;
    wordLetters = wordChoice.split('');

    blankWord.length = 0;
        
        //pushes blanks for each letter
        for(var j=0;j<wordChoice.length; j++){
        blankWord.push(" _ ")
        };

    document.getElementById('blankWord').textContent = blankWord.join(""); 
    incorrectGuesses.length = 0;
    document.getElementById('incorrectGuesses').textContent = incorrectGuesses;

    correctLetterTally = 0;
    turns=5;

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
        if(correctLetterTally >= wordLetters.length){
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

