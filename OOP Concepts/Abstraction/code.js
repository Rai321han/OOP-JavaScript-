// class Vehicle {
//   constructor(type) {
//     this.type = type;
//     if (this.constructor === Vehicle)
//       throw new Error("Cannot create instance of abstract class.");
//   }

//   // Incomplete implementation of method. Expected to implemented by the subclass
//   turnOnHeadlights() {
//     throw new Error("This method should be defined in subclass");
//   }

//   // Common blueprint methods
//   calculateFuelEfficiency() {
//     // complex implementation here
//     console.log("Fuel Efficiency: 90%");
//   }
// }

// class Bike extends Vehicle {
//   constructor(type) {
//     super(type); // calling super constructor
//   }
//   gearUp() {
//     console.log("Gear Up");
//   }
//   gearDown() {
//     console.log("Gear Down");
//   }
// }

// // const vehicle = new Vehicle();   // ERROR: Cannot create instance of abstract class
// const bike = new Bike("Bike"); // Instance of Bike created
// bike.calculateFuelEfficiency(); // Fuel Efficiency: 90%
// bike.turnOnHeadlights(); // Error: This method should be defined in subclass

// class KFC {
//   constructor(branchName) {
//     if (this.constructor === KFC) {
//       throw new Error("Cannot instantiate abstract class KFC directly.");
//     }
//     this.branchName = branchName;
//   }

//   // Common method for all branches, representing the specific recipe style
//   prepareRecipe() {
//     console.log(
//       `Preparing food using the secret KFC recipe at ${this.branchName} branch.`
//     );
//   }

//   // Abstract method for food delivery, to be implemented by each branch
//   deliverFood() {
//     throw new Error(
//       "Abstract method 'deliverFood' must be implemented by subclass."
//     );
//   }
// }

// // Urban branch of KFC with its own delivery style
// class UrbanKFC extends KFC {
//   constructor(branchName) {
//     super(branchName);
//   }

//   // Implement the delivery style for the urban branch
//   deliverFood() {
//     console.log(`Delivering food by bike at ${this.branchName} branch.`);
//   }
// }

// // Suburban branch of KFC with its own delivery style
// class SuburbanKFC extends KFC {
//   constructor(branchName) {
//     super(branchName);
//   }

//   // Implement the delivery style for the suburban branch
//   deliverFood() {
//     console.log(`Delivering food by car at ${this.branchName} branch.`);
//   }
// }

// const urbanKFC = new UrbanKFC("Urban KFC");
// const suburbanKFC = new SuburbanKFC("Suburban KFC");

// urbanKFC.prepareRecipe(); // Common recipe style
// urbanKFC.deliverFood(); // Branch-specific delivery style

// suburbanKFC.prepareRecipe(); // Common recipe style
// suburbanKFC.deliverFood(); // Branch-specific delivery style

class Vehicle {
  constructor(type) {
    if (this.constructor === Vehicle)
      throw new Error("Cannot create instance of Interface.");
    if (this.start === undefined)
      throw new Error("Must override method 'start'.");
    if (this.stop === undefined)
      throw new Error("Must override method 'stop'.");

    this.type = type;
  }
}

class Bike extends Vehicle {
  constructor(type) {
    super(type);
  }

  // start() {
  //   console.log(`${this.type} has started`);
  // }

  // stop() {
  //   console.log(`${this.type} has stopped`);
  // }
}

const bike = new Bike("Bike");
