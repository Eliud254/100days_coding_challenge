class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  displayInfo() {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }

  static createAnimal(animalObj) {
    return new this(animalObj.name, animalObj.age);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this._breed = breed;
  }

  get breed() {
    return this._breed;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Breed: ${this._breed}`);
  }

  bark() {
    console.log("Woof woof!");
  }
}

const animal1 = new Animal("Leo", 5);
const dog1 = new Dog("Buddy", 3, "Labrador");

animal1.displayInfo();
dog1.displayInfo();

dog1.bark();

const animalFromObj = Animal.createAnimal({ name: "Luna", age: 2 });
animalFromObj.displayInfo();
