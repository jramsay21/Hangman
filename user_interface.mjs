import { wordPicker } from './game_mechanics.mjs';
import { enableKeyboard, vkSetup } from './keyboard.mjs';

function userInterface(){
    const el = {};
    
    prepareHandles();
    addEventListeners();
    vkSetup();

    function prepareHandles(){
        el.singlePlayer = document.querySelector('#single-player');   
        el.mainMenu = document.querySelector('#main-menu');
        el.difficulty = document.querySelector('#difficulty');
        el.theme = document.querySelector('#theme');
        el.playGame = document.querySelector('#play-game');
        el.gameScreen = document.querySelector('#game-screen');
        el.word = document.querySelector('#word');
        el.reset = document.querySelector('#reset');
        el.score = document.querySelector('#score');
        el.canvas = document.querySelector('#canvas'); 
    }

    function addEventListeners(){
        el.singlePlayer.addEventListener('click', settingsDisplay);
        el.playGame.addEventListener('click', gameDisplay);
        el.reset.addEventListener('click', resetUI);
    }

    function addAClass(list){
        for (const elem of list){
            elem.classList.add('hidden');
        }
    }

    function removeAClass(list){
        for (const elem of list){
            elem.classList.remove('hidden');
        }
    }

    function settingsDisplay(){
        const removeList = [el.difficulty, el.theme, el.playGame];
        const addList = [el.mainMenu];
        addAClass(addList);
        removeAClass(removeList);
    }

    function gameDisplay(){
        enableKeyboard();
        const removeList = [el.gameScreen];
        const addList = [el.difficulty, el.playGame, el.theme];
        removeAClass(removeList);
        addAClass(addList);
        let word = wordPicker();
        el.word.setAttribute('name', word);
        for (const letter of word){
            if (letter !== ' '){
                el.word.textContent = el.word.textContent + '_'; 
            } else{
                el.word.textContent = el.word.textContent + ' ';
            }
        }
    }

    function resetUI(){
        const removeList = [el.mainMenu];
        const addList = [el.gameScreen, el.reset];
        removeAClass(removeList);
        addAClass(addList);
        el.word.textContent = '';
        el.score.textContent = 'Score: 0';
        el.canvas.getContext('2d').clearRect(0, 0, el.canvas.width, el.canvas.height);
        vkSetup();
    }

}

window.addEventListener('load', userInterface);