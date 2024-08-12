# Association

Association is the principle of defining how different objects can associte with each other.
There are two types of Association:

1. Aggregation
2. Composition

<br/>

## 1. Aggregation

In this type, objects are losely coupled with each other. That means, an object can exists even after its associated object is destroyed.

Let's see an example:

We have two classes, `SoundSystem` and `TV`. The object of `TV` will use a object of `SoundSystem`.

```js
class SoundSystem {
  constructor(highestSound) {
    this.highest = highestSound;
  }
  soundOn() {
    console.log("Sound is on");
  }

  soundOff() {
    console.log("Sound is off");
  }
}

class TV {
  constructor(sound) {
    this.sound = sound;
  }
  turnOn() {
    console.log("TV is turned on");
  }
  turnOff() {
    console.log("TV is turned off");
  }
}

let PanasonicSound = new SoundSystem(10); // A object of SoundSystem is created
const PanasonicTV = new TV(PanasonicSound);
PanasonicTV.sound.soundOn(); //Sound is on
PanasonicSound = null;
PanasonicTV.sound.soundOff(); //Sound is off
```

As you can see, even after the `PanasonicSound` is distroyed, `PanasonicTV` can still use that object that was passed as an agruement.
So destroying the `PanasonicSound` object doesn't affect the `PanasonicTV` as they are losely coupled or independent.

<br/>

## 2. Composition
