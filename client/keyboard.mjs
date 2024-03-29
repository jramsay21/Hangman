import { playGame } from './game_mechanics.mjs';

// Keyboard file. Here are the enable and disable functions for both the VK and Keyboard as well as their event handlers

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
    const virtualKBSibling = document.querySelector(`#${letter}`);
    if (virtualKBSibling !== null) {
      virtualKBSibling.removeEventListener('click', vkEventHandler);// VKSibling is the VK button that has the same value as the key pressed
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
