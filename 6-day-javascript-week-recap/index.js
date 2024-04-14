function Car(make, model, year, price, isAvailable, features) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.price = price;
  this.isAvailable = isAvailable;
  this.features = features;
}

Car.prototype.displayInfo = function() {
  console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Price: ${this.price}, Available: ${this.isAvailable}, Features: ${this.features.join(', ')}`);
};

let inventory = [];

function addCar(make, model, year, price, isAvailable, features) {
  let newCar = new Car(make, model, year, price, isAvailable, features);
  inventory.push(newCar);
}

function updateCarPrice(make, model, year, newPrice) {
  let carToUpdate = inventory.find(car => car.make === make && car.model === model && car.year === year);
  if (carToUpdate) {
    carToUpdate.price = newPrice;
    console.log(`Price updated for ${make} ${model} ${year}`);
  } else {
    console.log(`Car not found in inventory`);
  }
}

function searchCars(make, year) {
  return inventory.filter(car => car.make === make && car.year === year);
}

function displayInventory() {
  console.log("Inventory:");
  inventory.forEach(car => car.displayInfo());
}

addCar("Toyota", "Camry", 2020, 25000, true, ["Bluetooth", "Backup camera"]);
addCar("Honda", "Civic", 2018, 20000, true, ["Apple CarPlay", "Lane departure warning"]);
addCar("Ford", "Fusion", 2019, 22000, false, ["Android Auto", "Blind spot monitoring"]);

displayInventory();

updateCarPrice("Toyota", "Camry", 2020, 27000);

displayInventory();

console.log("Search results:");
console.log(searchCars("Toyota", 2020));
