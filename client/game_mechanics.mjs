import { canvas } from './canvas.mjs';
import { list } from './themes.mjs';
import { disableKeyboard, vkReset } from './keyboard.mjs';

let score = 0;
let wrongGuessCounter = 0;
let word = '';

const el = {};
const selection = ['songs', 'films', 'games', 'colours', 'animals'];

function prepareHandles() {
  el.scoreLocation = document.querySelector('#score');
  el.wordLocation = document.querySelector('#word');
  el.resetButton = document.querySelector('#reset');
  el.randomButton = document.querySelector('#random');
  el.replayButton = document.querySelector('#replay');
  el.back2SettingsBtn = document.querySelector('#settings-redirect');
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
  el.randomButton.value = 'false';
  return wordPicker();
}

export function wordElemUpdater() {
  prepareHandles();
  if (el.randomButton.value === 'false') {
    word = wordPicker();
  } else {
    word = randomWordPicker();
  }
  for (const letter of word) {
    if (letter !== ' ') {
      el.wordLocation.textContent = el.wordLocation.textContent + '_';
    } else {
      el.wordLocation.textContent = el.wordLocation.textContent + ' ';
    }
  }
}

export function playGame(letter) {
  const letterLocation = document.querySelector(`#${letter}`);
  if (letterLocation === null) {
    return;
  }

  if (letterChecker(letter, word) === true) {
    remedyWord();
  } else {
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
          if (el.wordLocation.textContent.includes(index)) {
            wordReplacement = wordReplacement + index;
          } else {
            wordReplacement = wordReplacement + '_';
          }
      }
    }

    el.wordLocation.textContent = wordReplacement;
    scoreUpdater(50);
  }

  function canvasUpdater() {
    letterLocation.classList.add('wrongGuess');
    scoreUpdater(-20);
    wrongGuessCounter++;
    canvas(wrongGuessCounter);
  }

  endOfGameChecker();
}

function scoreUpdater(number) {
  score = score + number;
  el.scoreLocation.textContent = `Score: ${score}`;
}

function letterChecker(letter, word) {
  const newWord = word.toLowerCase();

  return newWord.includes(letter);
}

function endOfGameChecker() {
  if (!el.wordLocation.textContent.includes('_') || wrongGuessCounter === 11) {
    el.resetButton.classList.remove('hidden');
    el.replayButton.classList.remove('hidden');
    el.back2SettingsBtn.classList.remove('hidden');
    el.scoreLocation.textContent = `Your final score was: ${score}`;
    score = 0;
    wrongGuessCounter = 0;
    disableKeyboard();
    vkReset();
  }
}
