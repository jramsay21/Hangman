import { wordElemUpdater } from './game_mechanics.mjs';
import { enableKeyboard, vkSetup } from './keyboard.mjs';

export const word = '';

function userInterface() {
  const el = {};

  prepareHandles();
  addEventListeners();
  vkSetup();

  // Use querySelectorAll to squish handles + no longer have to use removeList and addList
  function prepareHandles() {
    el.mainMenu = document.querySelector('#main-menu');
    el.difficulty = document.querySelector('#difficulty');
    el.theme = document.querySelector('#theme');
    el.playGame = document.querySelector('#play-game');
    el.gameScreen = document.querySelector('#gamescreen');
    el.word = document.querySelector('#word');
    el.reset = document.querySelector('#reset');
    el.score = document.querySelector('#score');
    el.canvas = document.querySelector('#canvas');
    el.random = document.querySelector('#random');
    el.replay = document.querySelector('#replay');
    el.back2Settings = document.querySelector('#settings-redirect');
    el.image = document.querySelector('#image');
  }

  function addEventListeners() {
    el.mainMenu.addEventListener('click', settingsDisplay);
    el.playGame.addEventListener('click', gameDisplay);
    el.reset.addEventListener('click', resetUI);
    el.random.addEventListener('click', randomGameDisplay);
    el.replay.addEventListener('click', replayTheme);
    el.back2Settings.addEventListener('click', settingsRedirect);
  }

  function addAClass(list) {
    for (const elem of list) {
      elem.classList.add('hidden');
    }
  }

  function removeAClass(list) {
    for (const elem of list) {
      elem.classList.remove('hidden');
    }
  }

  function settingsDisplay() {
    const removeList = [el.difficulty, el.theme, el.playGame, el.random];
    const addList = [el.mainMenu, el.image];
    addAClass(addList);
    removeAClass(removeList);
  }

  function gameDisplay() {
    enableKeyboard();
    const removeList = [el.gameScreen];
    const addList = [el.difficulty, el.playGame, el.theme, el.random];
    removeAClass(removeList);
    addAClass(addList);
    wordElemUpdater();
  }

  function randomGameDisplay() {
    el.random.value = 'true';
    gameDisplay();
  }

  function resetUI() {
    const removeList = [el.mainMenu, el.image];
    const addList = [el.gameScreen, el.reset, el.replay, el.back2Settings];
    removeAClass(removeList);
    addAClass(addList);
    el.word.textContent = '';
    el.score.textContent = 'Score: 0';
    el.canvas.getContext('2d').clearRect(0, 0, el.canvas.width, el.canvas.height);
    vkSetup();
  }

  function replayTheme() {
    resetUI();
    settingsDisplay();
    gameDisplay();
  }

  function settingsRedirect() {
    resetUI();
    settingsDisplay();
  }
}

window.addEventListener('load', userInterface);
