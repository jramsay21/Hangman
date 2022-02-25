export function canvas(counter){
    const canvas = document.querySelector('#canvas');
    const c = canvas.getContext('2d');
    c.beginPath();

    switch (counter){
        case 1:
            c.moveTo(124, 500);
            c.lineTo(600, 500);
            break;
        case 2:
            c.moveTo(600, 500);
            c.lineTo(600, 56);
            break;
        case 3:
            c.moveTo(600, 56);
            c.lineTo(250, 56);
            break;
        case 4:
            c.moveTo(525, 56);
            c.lineTo(600, 131);
            break;
        case 5:
            c.moveTo(250, 56);
            c.lineTo(250, 225);
            break;
        case 6:
            c.arc(250, 250, 25, 0, 6.3);
            break;
        case 7:
            c.moveTo(250, 275);
            c.lineTo(250, 375);
            break;
        case 8:
            c.moveTo(250, 375);
            c.lineTo(300, 425);
            break;
        case 9:
            c.moveTo(250, 375);
            c.lineTo(200, 425);
            break;
        case 10:
            c.moveTo(250, 300);
            c.lineTo(300, 350);
            break;
        case 11:
            c.moveTo(250, 300);
            c.lineTo(200, 350);
            break;
    }
    
    c.stroke();
} 