// dogs is object with each possible dog choice and victory video inside

var dogs = [
    {
        name:"SHIBA", 
        color: "blue",
        video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/hhyS-E8GQbo?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    },
    {
        name:"HUSKY",
        color: "red",
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
        name:"CHIHWAHUA",
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
var dogNames = [];

document.querySelector('#wins').innerHTML = wins;
document.querySelector('#losses').innerHTML = losses;
document.querySelector('#turns').innerHTML = turns;

function listDogs(names) {
    
    for (let i=0; i<names.length; i++){
        dogNames.push(names[i].name);
    }
    console.log(dogNames);
}

listDogs(dogs);

//selects initial random word to be guessed
var randomNumber = Math.floor(Math.random()*dogNames.length);

//make it a function here so you get the initial random word choice!!!!!





var wordChoice = dogNames[randomNumber];

console.log(wordChoice);
console.log(dogs[randomNumber].video);

//computer counts letters in the string and displays blanks for every letter in word

var blankWord = [];

for(var j=0;j<wordChoice.length; j++){
    blankWord.push(" _ ")
    };

document.getElementById('blankWord').textContent = blankWord.join(""); 
//want to display it without commas
console.log(blankWord);


//store every letter in word in an array

var wordLetters = wordChoice.split('');
console.log(wordLetters);

var incorrectGuesses = [];
var correctLetterTally = 0;
var userGuess;

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
            document.getElementById('video').innerHTML = dogs[randomNumber].video; 

                //reset game
                randomNumber = Math.floor(Math.random()*dogNames.length);
                wordChoice = dogNames[randomNumber];
                    console.log(wordChoice);

                wordLetters = wordChoice.split('');

                blankWord.length = 0;

                    for(var j=0;j<wordChoice.length; j++){
                    blankWord.push(" _ ")
                    };
                document.getElementById('blankWord').textContent = blankWord.join(""); 
                incorrectGuesses.length = 0;

                correctLetterTally = 0;
                turns=8;
                
        }

        //if you lose
        if(turns <= 0){
            losses++;
            document.querySelector('#losses').innerHTML = losses;
                //reset game
                randomNumber = Math.floor(Math.random()*dogs.length);
                wordChoice = dogNames[randomNumber];
                    console.log(wordChoice);

                wordLetters = wordChoice.split('');

                blankWord.length = 0;

                    for(var i=0;i<wordChoice.length; i++){
                    blankWord.push(" _ ")
                    };

                document.getElementById('blankWord').textContent = blankWord.join(""); 
                
                incorrectGuesses.length = 0;
                document.querySelector('#incorrectGuesses').innerHTML = incorrectGuesses;
                
                correctLetterTally = 0;
                turns=3;
                //insert sad image for losing
        }
        
    }







//Create object for each dogs victory. include picture of flag + national anthem.

// https://teamtreehouse.com/library/create-an-array-of-objects


// variable = arrayname.join('');


