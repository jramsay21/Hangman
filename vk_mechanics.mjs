import { score } from "./user_interface.mjs";
import { canvas } from "./canvas.mjs";


let number = 0;

export function vkMechanics(event){
 
    const letter = event.target.textContent.toLowerCase();
    const word = document.querySelector('#word').getAttribute('name');
    const letterLocation = document.querySelector(`#${letter}`);
    const currentWord = document.querySelector('#word');
    let updatedScore = score;
    

    if (letterChecker(letter, word) === true){
        rightGuess();
    } else {
        letterLocation.classList.add('wrongGuess');
        updatedScore -= 20;
        number++;
        canvas(number);
    }

    if (!currentWord.textContent.includes('_')){
        window.confirm(`Congratz! Your final score was: ${updatedScore}`);
        location.reload();
    }

    function rightGuess(){
        letterLocation.classList.add('rightGuess');
        let wordReplacement = '';
        for (let i = 0; i < word.length; i++){

            switch (word[i]){
                case letter:
                    wordReplacement = wordReplacement + letter;
                    break;
                case ' ':
                    wordReplacement = wordReplacement + ' ';
                    break;
                case letter.toUpperCase():
                    wordReplacement = wordReplacement + letter.toUpperCase();
                    break;
                default:
                    if (currentWord.textContent.includes(word[i])){
                        wordReplacement = wordReplacement + word[i];
                    } else{
                        wordReplacement = wordReplacement + '_';
                    }
            }
        }

        currentWord.textContent = wordReplacement;
        updatedScore += 50;
      
    }
    
    function letterChecker(letter, word){
    
        const newWord = word.toLowerCase();
        const newLetter = letter.toLowerCase();
    
        return newWord.includes(newLetter);
    }
    
  
    return updatedScore;

}