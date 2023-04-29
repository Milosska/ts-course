"use strict";
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 11);
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("The door is closed!");
        }
        this.tenants.push(person);
        console.log("Person inside");
    }
}
class MyHouse extends House {
    openDoor(key) {
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
//# sourceMappingURL=app.js.map