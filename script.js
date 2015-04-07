var possibleanswers = document.getElementById("possibleanswers");
var message = document.getElementById('message');

var words = ["cat", "men", "win", "dog", "mut","bar", "sin", "log", "mud", "dad", "pen", "tin", "wow","gun", "car"];
var printwords = [];
var guessCount = document.getElementById('guessCount');
for(i = 0; i < words.length; i++){
    printwords.push(" " + words[i]);
}
var previousGuesses = document.getElementById("previousGuesses");
var pguesses = [];
possibleanswers.innerHTML = printwords;
var guesses = 1;

// GET A CORRECT ANSWER
    var rNum = Math.floor((Math.random() * 14) + 1);

    var correct_answer = words[rNum];
    console.log("The correct answer is: " + correct_answer);

    correct_answer_array = correct_answer.split("");
    console.log(correct_answer_array);



// WORD GAME //
var gameplay = function(){
    pguesses.push(" " + guess.value);
    previousGuesses.innerHTML = "Wrong Answers: " + pguesses;
    guessCount.innerHTML = "Guess " + guesses + "/5"
// USER GUESS
    var win = false;

    if(win == false && guesses < 6){

        var getGuess = function(){

            console.log("Guess # " + guesses);
            console.log(guess.value);
            guess_array = guess.value.split("");
            console.log("User guessed: " + guess_array);
        }

        var common_letters;
        var findCommon = function(){
            common_letters = 0;

            for(i = 0; i<correct_answer_array.length; i++){
                if(correct_answer_array[i] == guess_array[i]){
                    common_letters++;
                }
            }
        }

        var checkGuess = function(){
            if(guess.value == correct_answer){
                console.log("You won!");
                win = true;
                message.innerHTML = "You won!!!"
            }
            else {

                if(common_letters == 1){
                    console.log("1 letter is in the correct spot.");
                    message.innerHTML = "1 letter is in the correct spot";
                }
                else if(common_letters > 1){
                    console.log(common_letters + " letters are in the correct spot.");
                    message.innerHTML = common_letters + " letters are in the correct spot.";
                }
                else {
                    console.log("No letters are in the right spot");
                    message.innerHTML = "No letters are in the right spot";
                }
            }
        }

            
        getGuess();
        findCommon();
        checkGuess();
        guesses++;
    }

    if(guesses == 6 && win == false){
        console.log("BOMB!!!")
        message.innerHTML = "You lose!";
    }

};

var saveGuess = function(){
    var guess = document.getElementById('guess').value;
    gameplay();
};