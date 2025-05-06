class Meditation {
    constructor(number) {
        this.number = number;
    }

    start() {
        console.log("Start meditation");
        for (let i = this.number; i > 0; i--) {
            console.log(i)
        }
        console.log("Jay Guru Dev");

    }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
