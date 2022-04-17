import { playGame } from './game_mechanics.mjs';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let pastGuesses = [];

const vkEventHandler = function (event) {
  const letter = event.target.textContent.toLowerCase();
  playGame(letter);
  this.removeEventListener('click', vkEventHandler);
  pastGuesses.push(letter);
};

const keyboardEventHandler = function (event) {
  const letter = event.key.toLowerCase();
  if (!alphabet.includes(letter)) {
    return;
  }
  if (!pastGuesses.includes(letter)) {
    playGame(letter);
    pastGuesses.push(letter);
    const virtualKBBrother = document.querySelector(`#${letter}`);
    if (virtualKBBrother !== null) {
      virtualKBBrother.removeEventListener('click', vkEventHandler);
    }
  }
};

export function vkSetup() {
  const virtualKB = document.querySelector('#virtual-keyboard');
  for (const letter of alphabet) {
    const vk = document.createElement('button');
    vk.setAttribute('id', letter);
    vk.textContent = letter.toUpperCase();
    vk.className = 'vk-letters';
    vk.addEventListener('click', vkEventHandler);
    virtualKB.append(vk);
  }
}

export function vkReset() {
  const virtualKB = document.querySelector('#virtual-keyboard');
  while (virtualKB.lastElementChild) {
    virtualKB.removeChild(virtualKB.lastElementChild);
  }
}

export function enableKeyboard() {
  window.addEventListener('keyup', keyboardEventHandler);
}

export function disableKeyboard() {
  window.removeEventListener('keyup', keyboardEventHandler);
  pastGuesses = [];
}

// Merge functions
// button disabled
// Fix kb input error: buffer?
