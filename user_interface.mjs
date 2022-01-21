import { vkMechanics } from './vk_mechanics.mjs'
import { randomWord } from './random_word.mjs';

export let score = 0;

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
        el.counter = document.querySelector('#counter');
        el.playGame = document.querySelector('#play-game');
        el.gameScreen = document.querySelector('#game-screen');
        el.score = document.querySelector('#score');
        el.word = document.querySelector('#word');
        el.virtualKB = document.querySelector('#virtual-keyboard');  
    }

    function addEventListeners(){
        el.singlePlayer.addEventListener('click', settingsDisplay);
        el.playGame.addEventListener('click', gameDisplay);
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

    function vkSetup(){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let handler = function(event){
            score = vkMechanics(event);
            el.score.textContent = `Score: ${score}`;
            this.removeEventListener('click', handler);
        };
        for (const letter of alphabet){
            const vk = document.createElement('button');
            vk.setAttribute('id', letter);
            vk.textContent = letter.toUpperCase();
            vk.className = 'vk-letters';
            vk.addEventListener('click', handler);
            el.virtualKB.append(vk);
        }
    }


    function settingsDisplay(){
        const removeList = [el.difficulty, el.theme, el.playGame];
        const addList = [el.mainMenu];
        addAClass(addList);
        removeAClass(removeList);
    }

    

    function gameDisplay(){
        const diffChoice = document.querySelector("input[type = 'radio'][name = 'difficulty']:checked").value;
        const themeChoice = document.querySelector("input[type = 'radio'][name = 'theme']:checked").value;
        const removeList = [el.gameScreen];
        const addList = [el.difficulty, el.playGame, el.theme];
        removeAClass(removeList);
        addAClass(addList);
        const word = randomWord(diffChoice, themeChoice);
        el.word.setAttribute('name', word);
        for (const letter of word){
            if (letter !== ' '){
                el.word.textContent = el.word.textContent + '_'; 
            } else{
                el.word.textContent = el.word.textContent + ' ';
            }
        }

    }
}

window.addEventListener('load', userInterface);