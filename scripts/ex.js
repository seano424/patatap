// // Create a Paper.js Path to draw a line into it:
// var path = new Path();
// // Give the stroke a color
// path.strokeColor = 'seagreen';
// var start = new Point(100, 100);
// // Move to start and draw a line from there
// path.moveTo(start);
// // Note the plus operator on Point objects.
// // PaperScript does that for us, and much more!
// path.lineTo(start + [ 100, -50 ]);
// var myCircle = new Path.Circle(new Point(270, 100), 150);
// myCircle.fillColor = 'black';
// var circle2 = new Path.Circle(new Point(100, 50), 10);
// circle2.fillColor = 'green';

var randomNum = Math.floor(Math.random() * 300) + 1;
console.log(randomNum);
var x = 0;
var y = 50;
for(var i = 0; i < 100; i++) {
  // var x = Math.floor(Math.random() * 700) + 1;
  // var y = Math.floor(Math.random() * 700) + 1;
  if(x < 1650){
    x+= 150;
  } else {
    y+= 120;
    x = 0;
    x+= 150;
  }
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var color = "rgb(" + r + ', ' + g + ', ' + b + ")"
  var circles = new Path.Circle(new Point(x, y), 50);
  circles.fillColor = color;
}
