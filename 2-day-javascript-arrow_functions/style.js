const add = (a, b) => a + b;

const square = x => x * x;

const greet = name => {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
};

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);

const person = { name: 'John', age: 30 };
const greetPerson = ({ name }) => console.log(`Hello, ${name}!`);

const greetWithDefault = (name = 'Stranger') => console.log(`Hello, ${name}!`);

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

const fruits = ['apple', 'banana', 'orange'];
const fruitLengths = fruits.map(fruit => fruit.length);

setTimeout(() => {
  console.log('Delayed message');
}, 1000);

document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked');
});

const multiplyBy = x => y => x * y;
const double = multiplyBy(2);
const triple = multiplyBy(3);

const evenNumbers = [2, 4, 6, 8, 10];
const areAllEven = evenNumbers.every(number => number % 2 === 0);

function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++;
    console.log(this.count);
  }, 1000);
}

const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const sortedUsers = users.sort((a, b) => a.age - b.age);

const isAdult = age => age >= 18 ? 'Adult' : 'Minor';

const logCoordinates = ([x, y]) => console.log(`Coordinates: (${x}, ${y})`);

const numbersArray = [1, 2, 3, 4, 5];
numbersArray.forEach((number, index) => console.log(`Number at index ${index}: ${number}`));

const createPerson = (name, age) => ({ name, age });

const memoizedFunction = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      console.log('From cache');
      return cache[num];
    } else {
      console.log('Calculating...');
      const result = num * 2;
      cache[num] = result;
      return result;
    }
  };
};

const memoizedDouble = memoizedFunction();

console.log(add(2, 3));
console.log(square(4));
greet('World');
console.log(squaredNumbers);
greetPerson(person);
greetWithDefault();
console.log(sum(1, 2, 3, 4, 5));
console.log(calculator.add(5, 3));
console.log(fruitLengths);
Counter();
console.log(sortedUsers);
console.log(isAdult(20));
logCoordinates([10, 20]);
console.log(createPerson('Alice', 25));
console.log(double(5));
console.log(triple(5));
console.log(areAllEven);
