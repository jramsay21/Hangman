// Canvas Function that progressivley draws gallows

export function canvas(counter) {
  const canvas = document.querySelector('#canvas');
  const c = canvas.getContext('2d');
  c.beginPath();
  c.lineCap = 'square';
  c.lineWidth = 3;
  c.strokeStyle = '#989898';

  switch (counter) {
    case 1:
      c.moveTo(canvas.width * (1 / 6), canvas.height * (25 / 27));
      c.lineTo(canvas.width * (5 / 6), canvas.height * (25 / 27));
      break;
    case 2:
      c.moveTo(canvas.width * (5 / 6), canvas.height * (25 / 27));
      c.lineTo(canvas.width * (5 / 6), canvas.height * (1 / 10));
      break;
    case 3:
      c.moveTo(canvas.width * (5 / 6), canvas.height * (1 / 10));
      c.lineTo(canvas.width * (1 / 3), canvas.height * (1 / 10));
      break;
    case 4:
      c.moveTo(canvas.width * (11 / 15), canvas.height * (1 / 10));
      c.lineTo(canvas.width * (5 / 6), canvas.height * (7 / 30));
      break;
    case 5:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (1 / 10));
      c.lineTo(canvas.width * (1 / 3), canvas.height * (1 / 4));
      break;
    case 6:
      c.arc(canvas.width * (1 / 3), canvas.height * (1 / 4) + canvas.width * (1 / 20), canvas.width * (1 / 20), 0, 6.3);
      break;
    case 7:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (1 / 4) + canvas.width * (1 / 10));
      c.lineTo(canvas.width * (1 / 3), canvas.height * (25 / 36));
      break;
    case 8:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (25 / 36));
      c.lineTo(canvas.width * (4 / 9), canvas.height * (7 / 9));
      break;
    case 9:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (25 / 36));
      c.lineTo(canvas.width * (2 / 9), canvas.height * (7 / 9));
      break;
    case 10:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (5 / 12));
      c.lineTo(canvas.width * (4 / 9), canvas.height * (1 / 2));
      break;
    case 11:
      c.moveTo(canvas.width * (1 / 3), canvas.height * (5 / 12));
      c.lineTo(canvas.width * (2 / 9), canvas.height * (1 / 2));
      break;
  }
  c.stroke();
}
