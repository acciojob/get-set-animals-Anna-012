//complete this code
// Define the Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make a sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
    // Method for purring
    purr() {
        console.log("purr");
    }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
    // Method for barking
    bark() {
        console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
