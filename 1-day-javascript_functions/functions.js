
function displayGreeting() {
  alert(`Happy coding day!`);
}

function displayRandomNumber() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  alert(randomNum);
}

displayGreeting();
displayRandomNumber();

// Additional Problem:
function calculateRectangleArea(length, width) {
  return length * width;
}

const rectangleLength = 5;
const rectangleWidth = 8;
const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
alert(`The area of the rectangle is: ${rectangleArea}`);
