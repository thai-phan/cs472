function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}

Animal.prototype.run = function (speedIncrease) {
    this.speed += speedIncrease;
    console.log(`${this.name} runs at speed ${this.speed}`);
};

Animal.compareBySpeed = function (a1, a2) {
    return a2.speed - a1.speed;
};

function Rabbit(name, speed) {
    Animal.call(this, name, speed);
}

Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
Object.setPrototypeOf(Rabbit, Animal)


Rabbit.prototype.hide = function () {
    console.log(`${this.name} hides`);
};

const rabbit1 = new Rabbit("Bobby", 10);
const rabbit2 = new Rabbit("Veronica", 10);
const rabbit3 = new Rabbit("Kiwi", 10);

rabbit1.run(5);
rabbit2.run(10);

const speed = Animal.compareBySpeed(rabbit1, rabbit2);
console.log("Speed difference:", speed);

rabbit3.hide();
