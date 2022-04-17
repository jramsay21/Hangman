import { wordElemUpdater, playClickSound } from './game_mechanics.mjs';
import { enableKeyboard, vkSetup } from './keyboard.mjs';

function userInterface() {
  const el = {};

  prepareHandles();
  addEventListeners();
  vkSetup();

  function prepareHandles() {
    const IDList = [
      '#mainMenu',
      '#difficulty',
      '#theme',
      '#playGame',
      '#gameScreen',
      '#word',
      '#reset',
      '#score',
      '#canvas',
      '#random',
      '#replay',
      '#back2Settings',
      '#image',
      '#switch',
    ];
    for (const elem of IDList) {
      const handle = document.querySelector(elem);
      el[handle.id] = handle;
    }
    el.radioBtns = document.querySelectorAll("input[type = 'radio']");
  }

  function addEventListeners() {
    el.mainMenu.addEventListener('click', settingsDisplay);
    el.playGame.addEventListener('click', gameDisplay);
    el.reset.addEventListener('click', resetUI);
    el.random.addEventListener('click', randomGameDisplay);
    el.replay.addEventListener('click', replayTheme);
    el.back2Settings.addEventListener('click', settingsRedirect);
    el.switch.addEventListener('click', modeSwitcher);
    for (const btn of el.radioBtns) {
      btn.addEventListener('click', playClickSound);
    }
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
    playClickSound();
  }

  function gameDisplay() {
    enableKeyboard();
    const removeList = [el.gameScreen];
    const addList = [el.difficulty, el.playGame, el.theme, el.random];
    removeAClass(removeList);
    addAClass(addList);
    wordElemUpdater();
    playClickSound();
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
    playClickSound();
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

  function modeSwitcher() {
    playClickSound();
    const root = document.querySelector(':root');
    if (el.switch.checked === true) {
      root.style.setProperty('--background-colour', '#FFFFFF');
      root.style.setProperty('--primary-word-colour', '#202020');
      root.style.setProperty('--second-word-colour', '#696969');
      el.word.style.setProperty('color', '#202020');
    } else {
      root.style.setProperty('--background-colour', '#202020');
      root.style.setProperty('--primary-word-colour', '#D3D3D3');
      root.style.setProperty('--second-word-colour', '#C0C0C0');
      el.word.style.setProperty('color', '#FFFFFF');
    }
  }
}

window.addEventListener('load', userInterface);
