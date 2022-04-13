//importing from canvas-sketch library stored as a reference called canvasSketch
const canvasSketch = require('canvas-sketch');
// canvas object created in this pixel dimension
const settings = {
  dimensions: [ 1080, 1080 ]
  // to print on A4
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    //line thickness
    context.lineWidth = width * 0.002;
    context.strokeStyle = 'white';
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;

    const ix = width * 0.17;
    const iy = height * 0.17;
    let x, y;
//variable for offset
const off = width * 0.02;

    for (let i = 0; i < 5; i++){
      for (let j = 0; j < 5; j++){
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        //context.rotate((Math.PI / 180) * 25);
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.rotate(Math.random());
          context.strokeStyle = 'red';
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
