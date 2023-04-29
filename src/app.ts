class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 11);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("The door is closed!");
    }
    this.tenants.push(person);
    console.log("Person inside");
  }
  abstract openDoor(a: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

let key1 = new Key();
let stoneHouse = new MyHouse(key1);
let person = new Person(key1);

stoneHouse.openDoor(person.getKey());
stoneHouse.comeIn(person);
