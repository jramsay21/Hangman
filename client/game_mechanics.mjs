import { canvas } from "./canvas.mjs";
import { list } from "./themes.mjs";
import { disableKeyboard, vkReset } from "./keyboard.mjs";

let score = 0;
let wrongGuessCounter = 0;

const el = {};

function prepareHandles(){
    el.scoreLocation = document.querySelector('#score');
    el.wordLocation = document.querySelector('#word');
    el.resetButton = document.querySelector('#reset');
}

export function wordPicker(){
    const themeChoice = document.querySelector("input[type = 'radio'][name = 'theme']:checked").value;
    const diffChoice = document.querySelector("input[type = 'radio'][name = 'difficulty']:checked").value;
    const selection = ['songs', 'films', 'games', 'colours', 'animals'];
    for (let i = 0; i < selection.length; i++){
        if (themeChoice === selection[i]){
            const object = list[i];
            const array = [...object[diffChoice]];
            return array[Math.floor(Math.random() * array.length)];
        }
        
    }
}

export function playGame(letter){
    const letterLocation = document.querySelector(`#${letter}`);
    const word = document.querySelector('#word').getAttribute('name');
    prepareHandles();

    if (letterChecker(letter, word) === true){
        remedyWord();
    } else {
        canvasUpdater();
    }

    function remedyWord(){
        letterLocation.classList.add('rightGuess');
        let wordReplacement = '';
        for (const index of word){
            switch (index){
                case letter:
                    wordReplacement = wordReplacement + letter;
                    break;
                case letter.toUpperCase():
                    wordReplacement = wordReplacement + letter.toUpperCase();
                    break;
                case ' ':
                    wordReplacement = wordReplacement + ' ';
                    break;
                default:
                    if (el.wordLocation.textContent.includes(index)){
                        wordReplacement = wordReplacement + index;
                    } else{
                        wordReplacement = wordReplacement + '_';
                    }
            }
        }

        el.wordLocation.textContent = wordReplacement;
        scoreUpdater(50);
    }

    function canvasUpdater(){
        letterLocation.classList.add('wrongGuess');
        scoreUpdater(-20);
        wrongGuessCounter++;
        canvas(wrongGuessCounter);
    }

    endOfGameChecker();
}

function scoreUpdater(number){
    score = score + number;
    el.scoreLocation.textContent = `Score: ${score}`;
}

function letterChecker(letter, word){
    const newWord = word.toLowerCase();

    return newWord.includes(letter);
}

function endOfGameChecker(){
    if(!el.wordLocation.textContent.includes("_") || wrongGuessCounter === 11){
        el.resetButton.classList.remove('hidden');
        el.scoreLocation.textContent = `Your final score was: ${ score }`;
        score = 0;
        wrongGuessCounter = 0;
        vkReset();
        disableKeyboard();
    }
}

// Have option to return to game mode, settings or just redo the game instead of just one return button