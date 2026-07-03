const toggleBtn = document.getElementById('theme_toggle');
const body = document.body;
// Apply saved preference on load
const saved = localStorage.getItem('theme');
if (saved === 'dark') body.classList.add('dark-mode');
if (saved === 'light') body.classList.add('light-mode');
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode') ||
    (!body.classList.contains('light-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
});
// Thanks to: https://codepen.io/Irina-T/pen/bqyPvP
//
//https://en.m.wikipedia.org/wiki/Mandelbrot_set
//
var canvas = document.querySelector("canvas");
console.log(document.getElementById("mb_set"));
var ctx = canvas.getContext("2d");
function checkCondition(x, y) {
    var real = x;
    var imag = y;
    var maxI = 100;
    for(var i = 0; i < maxI; i++) {
         var tempReal = real*real - imag*imag + x;
         var tempImag = 2*real*imag + y;
         real = tempReal;
         imag = tempImag;

         if (real * imag > 5)
           return (i/maxI * 100); // Inside the Mandelbrot set
    }

    return 0; // Outside the Mandelbrot set
}
function drawSet(x0, y0, hue) {
  for(var x = 0; x < canvas.width; x++) {
     for(var y = 0; y < canvas.height; y++) {
         var belongsToSet = 
              checkCondition(x/canvas.width*5- x0,                                      
                           y/canvas.height*4- y0);
         if(belongsToSet == 0) {
              ctx.fillStyle = 'black';
              ctx.fillRect(x,y, 1,1); 
         }                
       else {
          ctx.fillStyle = 'hsl(' + hue + ', 100%, ' + belongsToSet + '%)';
          ctx.fillRect(x,y, 1,1); // Draw a colorful pixel
          }
     } 
  }
}
var hue = 126;
drawSet(3.1, 2, hue);

