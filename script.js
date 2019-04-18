var colors = [
  '#ff3366',
  '#ff6633',
  '#FFCC33',
  '#33FF66',
  '#33FFCC',
  '#33CCFF',
  '#3366FF',
  '#6633FF',
  '#CC33FF',
];

function makeBoxes(howMany) {
  var colorAmt = colors.length;
  var currColor = 0;
  var myElement;
  var myNode = document.querySelector('.boxes');

  for (var i = 0; i < howMany; i++) {
    myElement = document.createElement('div');
    myElement.className = 'box';
    myElement.style = 'background-color: ' + colors[currColor];
    myNode.appendChild(myElement);


    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }
  myNode.addEventListener('click', function(e) {
    e.target.parentNode.removeChild(e.target);
  }, false);
}

makeBoxes(20);
