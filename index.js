const dummyWord = 'Dummy';
const el = {};

function pageLoaded(){
    prepareHandles();
    addEventListeners();
    vkSetup();
}

function prepareHandles(){
    el.singlePlayer = document.querySelector('#single-player');   
    el.mainMenu = document.querySelector('#main-menu');
    el.difficulty = document.querySelector('#difficulty');
    el.theme = document.querySelector('#theme');
    el.counter = document.querySelector('#counter');
    el.playGame = document.querySelector('#play-game');
    el.score = document.querySelector('#score');
    el.word = document.querySelector('#word');
    el.virtualKB = document.querySelector('#virtual-keyboard');        // Use npm install http-server so that JS has a secure origin
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


function settingsDisplay(){
    const removeList = [el.difficulty, el.theme, el.playGame];
    const addList = [el.mainMenu];
    addAClass(addList);
    removeAClass(removeList);
}

function vkSetup(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of alphabet){
        const vk = document.createElement('button');
        vk.setAttribute('id', letter);
        vk.textContent = letter.toUpperCase();
        vk.className = 'vk-letters';
        vk.addEventListener('click', letterChecker);
        el.virtualKB.append(vk);
    }
}

function gameDisplay(){
    const removeList = [el.score, el.word, el.virtualKB];
    const addList = [el.difficulty, el.playGame, el.theme];
    removeAClass(removeList);
    addAClass(addList);
    for (const letter of dummyWord){
        el.word.textContent = el.word.textContent + '_';
    }

}

function letterChecker(){

}


window.addEventListener('load', pageLoaded);
