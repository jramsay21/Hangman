import { score } from "./user_interface.mjs";

export function canvas(number){


    const canvas = document.querySelector('#canvas');
    const c = canvas.getContext('2d');

    switch (number){
        case 1:
            c.beginPath();
            c.moveTo(124, 500);
            c.lineTo(600, 500);
            c.stroke();
            break;
        case 2:
            c.beginPath();
            c.moveTo(600, 500);
            c.lineTo(600, 56);
            c.stroke();
            break;
        case 3:
            c.beginPath();
            c.moveTo(600, 56);
            c.lineTo(250, 56);
            c.stroke();
            break;
        case 4:
            c.beginPath();
            c.moveTo(525, 56);
            c.lineTo(600, 131);
            c.stroke();
            break;
        case 5:
            c.beginPath();
            c.moveTo(250, 56);
            c.lineTo(250, 225);
            c.stroke();
            break;
        case 6:
            c.beginPath();
            c.arc(250, 250, 25, 0, 6.3);
            c.stroke();
            break;
        case 7:
            c.beginPath();
            c.moveTo(250, 275);
            c.lineTo(250, 375);
            c.stroke();
            break;
        case 8:
            c.beginPath();
            c.moveTo(250, 375);
            c.lineTo(300, 425);
            c.stroke();
            break;
        case 9:
            c.beginPath();
            c.moveTo(250, 375);
            c.lineTo(200, 425);
            c.stroke();
            break;
        case 10:
            c.beginPath();
            c.moveTo(250, 300);
            c.lineTo(300, 350);
            c.stroke();
            break;
        case 11:
            c.beginPath();
            c.moveTo(250, 300);
            c.lineTo(200, 350);
            c.stroke();
            window.confirm(`You died! Try again... 
Final Score: ${score - 20}`);
            location.reload();
            break;
    }
} 