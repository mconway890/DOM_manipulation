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
  // The above code cycles through the different colors
  // If there are 30 boxes created but only 9 colors, after the ninth
  // it will go back to the first color

  var myElement;
  // This variable is where I create a DOM element from scratch
  var myNode = document.querySelector('.boxes');
  // The node variable is where I'm going to put the elements
  // myNode is set to document because that is the root myNode
  // I use querySelector to select the specific element
  // In this case the element with a class of boxes (div from html)

  for (var i = 0; i < howMany; i++) {
    myElement = document.createElement('div');
    // createElement used for making new element, a div
    myElement.className = 'box';
    // className adds a class of 'box' (.box styling from css)
    myElement.style = 'background-color: ' + colors[currColor];
    // style attribute takes regular css
    // refrences colors array, concatenate with + sign and asks for current color
    myNode.appendChild(myElement);
    // boxes need to be appended to DOM using appendChild
    // myNode is the target
    // child appended into that node is myElement

    if (currColor === colorAmt - 1) {
      currColor = 0;
    } else {
      currColor++;
    }
  }
  myNode.addEventListener('click', function(e) {
    e.target.parentNode.removeChild(e.target);
  }, false);
  // addEventListener adds a click event listener to myNode
  // The function receives an event (e)
  // To remove an element, you target the parent element
  // of the thing you want to remove (parentNode)
  // removeChild removes child node from the DOM
}

makeBoxes(30);
