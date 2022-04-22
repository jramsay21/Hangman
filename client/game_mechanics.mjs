import { canvas } from './canvas.mjs';
import { list } from './themes.mjs';
import { disableKeyboard, vkReset } from './keyboard.mjs';

// Most of the game's mechanisms are located here

let score = 0;
let wrongGuessCounter = 0;
let word = '';
let turnCount = 0;

const el = {};
const selection = ['songs', 'films', 'games', 'colours', 'animals'];

function prepareHandles() {
  const IDList = [
    '#score',
    '#word',
    '#reset',
    '#random',
    '#replay',
    '#back2Settings',
    '#goBack',
  ];
  for (const elem of IDList) {
    const handle = document.querySelector(elem);
    el[handle.id] = handle;
  }
}

function wordPicker() {
  const themeChoice = document.querySelector("input[type = 'radio'][name = 'theme']:checked").value;
  const diffChoice = document.querySelector("input[type = 'radio'][name = 'difficulty']:checked").value;
  for (let i = 0; i < selection.length; i++) {
    if (themeChoice === selection[i]) {
      const object = list[i];
      const array = [...object[diffChoice]];
      return array[Math.floor(Math.random() * array.length)];
    }
  }
}

function randomWordPicker() {
  const randThemeChoice = document.querySelectorAll("input[type = 'radio'][name = 'theme']");
  const randDiffChoice = document.querySelectorAll("input[type = 'radio'][name = 'difficulty']");
  randThemeChoice[Math.floor(Math.random() * 5)].checked = true;
  randDiffChoice[Math.floor(Math.random() * 3)].checked = true;
  el.random.value = 'false';
  return wordPicker();
}

export function playClickSound() {
  const audio = new Audio('assets/click.wav');
  checkSound(audio);
}

export function wordElemUpdater() {
  prepareHandles();
  if (el.random.value === 'false') {
    word = wordPicker();
  } else {
    word = randomWordPicker();
  }
  for (const letter of word) {
    if (letter !== ' ') {
      el.word.textContent = el.word.textContent + '_';
    } else {
      el.word.textContent = el.word.textContent + ' ';
    }
  }
}

export function playGame(letter) {
  // The main game function which occurs when a user clicks a button or presses a key

  const letterLocation = document.querySelector(`#${letter}`);
  const wrongGuessSound = new Audio('assets/wrong-guess.wav');
  const rightGuessSound = new Audio('assets/right-guess.wav');
  if (letterLocation === null) {
    return;
  }

  if (letterChecker(letter, word)) {
    checkSound(rightGuessSound);
    remedyWord();
  } else {
    checkSound(wrongGuessSound);
    canvasUpdater();
  }

  function remedyWord() {
    letterLocation.classList.add('rightGuess');
    let wordReplacement = '';
    for (const index of word) {
      switch (index) {
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
          if (el.word.textContent.includes(index)) {
            wordReplacement = wordReplacement + index;
          } else {
            wordReplacement = wordReplacement + '_';
          }
      }
    }

    el.word.textContent = wordReplacement;
    scoreUpdater(50);
  }

  function canvasUpdater() {
    letterLocation.classList.add('wrongGuess');
    scoreUpdater(-20);
    wrongGuessCounter++;
    canvas(wrongGuessCounter);
  }

  turnCount = turnCount + 1;
  endOfGameChecker();
}

function scoreUpdater(number) {
  score = score + number;
  el.score.textContent = `Score: ${score}`;
}

function letterChecker(letter, word) {
  const newWord = word.toLowerCase();

  return newWord.includes(letter);
}

function checkSound(audio) {
  const mutePage = document.querySelector('#sound').checked;
  if (mutePage) {
    audio.play();
  }
} // This function checks if the sound on option is checked or not before playing the sound

function endOfGameChecker() {
  if (!el.word.textContent.includes('_') || wrongGuessCounter === 11) {
    if (wrongGuessCounter === 11) {
      const audio = new Audio('assets/game-lose.wav');
      checkSound(audio);
    } else {
      const audio = new Audio('assets/game-won.wav');
      checkSound(audio);
    }
    el.reset.classList.remove('hidden');
    el.replay.classList.remove('hidden');
    el.back2Settings.classList.remove('hidden');
    el.random.classList.remove('hidden');
    el.goBack.classList.add('hidden');
    document.querySelector('#gameScreen-buttons').append(el.random);
    el.score.textContent = `Your final score was: ${score} in ${turnCount} turns`;
    score = 0;
    wrongGuessCounter = 0;
    turnCount = 0;
    disableKeyboard();
    vkReset();
  }
}
