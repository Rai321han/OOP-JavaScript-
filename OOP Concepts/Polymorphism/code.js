class Car {
  openDoor() {
    console.log("The door has opened.");
  }
}

class ModernCar extends Car {
  openDoor() {
    super.openDoor();
    console.log("Air is flowing nicely!");
  }
}

const modernCar = new ModernCar();
modernCar.openDoor(); //Air is flowing nicely.
