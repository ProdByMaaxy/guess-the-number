// Decalre variables

let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

//Event listeners

submit.addEventListener("click",submitClick);

function submitClick () {
    const userValue = Number(guess.value);
    attempts++
    guess.value = '';
    
    if (userValue === randomNumber) {
        hint.textContent = `Congratulations ! You guessed the number in ${attempts} attempts`;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (userValue < randomNumber) {
        hint.textContent = "Too low ! Try again";
    } else {
        hint.textContent = 'Too high ! Try again';
    }
    attemptsText.textContent = "Attempts : " + attempts;
}
