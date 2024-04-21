const factorial = (n) => {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
};

const number = 5;
console.log(`The factorial of ${number} is: ${factorial(number)}`);

const fibonacci = (n) => {
  if (n <= 1) {
      return n;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const fibNumber = 10;
console.log(`The Fibonacci number at position ${fibNumber} is: ${fibonacci(fibNumber)}`);

class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());
