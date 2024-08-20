// class Vehicle {
//   name;
//   license;

//   constructor(name, license) {
//     this.name = name;
//     this.license = license;
//   }

//   setName(newName) {
//     this.name = newName;
//   }

//   setLicense(newLicense) {
//     this.license = newLicense;
//   }
// }

// class Vehicle {
//   constructor(type, serialNo) {
//     this.type = type;
//     this.serialNo = serialNo;
//   }

//   getType() {
//     return this.type;
//   }

//   getSerialNo() {
//     return this.serialNo;
//   }
// }

// const car = new Vehicle("Car");
// car.type = "bike";
// console.log(car.type);
// car.getType = () => {
//   return "This method is modified";
// };
// console.log(car.getType());

// class Vehicle {
//   #type;
//   #serialNo;

//   constructor(type, serialNo) {
//     this.#type = type;
//     this.#serialNo = serialNo;
//   }

//   setType(newType) {
//     this.#type = newType;
//   }

//   setSerialNo(newSerialNo) {
//     this.#type = newSerialNo;
//   }

//   getType() {
//     return this.#type;
//   }

//   getSerialNo() {
//     return this.#serialNo;
//   }
// }

// const car = new Vehicle("Car");
// console.log(car.getType()); // Car
// car.#type = "bike"; // Property '#type' is not accessible outside class 'Vehicle' because it has a private identifier.

// class Vehicle {
//   // #type;
//   // #serialNo;

//   constructor(type, serialNo) {
//     this.#type = type;
//     this.#serialNo = serialNo;
//   }
// }

// const car = new Vehicle("Car"); //

// class Vehicle {
//   #type;
//   #serialNo;

//   constructor(type) {
//     this.#type = type;
//     delete this.#serialNo
//   }
// }

// const car = new Vehicle("Car")

// class Vehicle {
//   #type;
//   static #maxNumber = 40;
//   constructor(type) {
//     this.#type = type;
//   }

//   static getMaxNumber() {
//     return this.#maxNumber;
//   }
// }

// class Car extends Vehicle {
//   #model;
//   constructor(model) {
//     super();
//     this.#model = model;
//   }

//   getModel() {
//     return this.#model;
//   }
// }

// const car = new Car("Bugatti");
// console.log(Car.getMaxNumber()); // Cannot read private member #maxNumber
// // from an object whose class did not declare it

// class Vehicle {
//   #maxNumber;
//   constructor(type, maxNumber) {
//     this.type = type;
//     this.#maxNumber = maxNumber;
//   }

//   #getMaxNumber() {
//     return this.#maxNumber;
//   }

//   publicGetMaxNumber() {
//     return this.#getMaxNumber();
//   }
// }

// const car = new Vehicle("Bugatti", 20);
// console.log(car.publicGetMaxNumber()); // 20
// console.log(Vehicle.prototype); // {publicGetMaxNumber: ƒ}

// class Vehicle {
//   #type;
//   static #maxNumber = 40;
//   constructor(type) {
//     this.#type = type;
//   }

//   static #getMaxNumber() {
//     return this.#maxNumber;
//   }

//   static publicGetMaxNumber() {
//     return this.#getMaxNumber();
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super();
//   }
// }

// const car = new Car("Bugatti");
// console.log(Vehicle.publicGetMaxNumber()); // 40
// console.log(Car.publicGetMaxNumber()); // TypeError: Cannot read private member #getMaxNumber from an object whose class did not declare it

// class Vehicle {
//   constructor(type) {
//     this._type = type;
//   }

//   getType() {
//     return this._type;
//   }
// }

// class Car extends Vehicle {
//   constructor(type) {
//     super(type);
//   }
// }

// const car = new Car("Car");
// console.log(car.getType()); // Car

class Vehicle {
  constructor(type) {
    this._type = type;
  }

  get Type() {
    return this._type;
  }
}

class Car extends Vehicle {
  constructor(type) {
    super(type);
  }
}

const car = new Car("Car");
console.log(car.Type); // Car
car.Type = "Bike";
console.log(car.Type);
