class Clock {
    constructor(){

        let clock = new Date();
        this.hours = clock.getHours();
        this.minutes = clock.getMinutes();
        this.seconds = clock.getSeconds(); // this.hours = clock.getHours();

        this.printTime();

        // this.that = this

        setInterval(this._tick.bind(this),1000) 

    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() { 
        debugger
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        } 

        if (this.minutes === 60 && this.seconds === 60 ) {
            this.minutes = 0;
            this.hours++;
        }

        if (this.hours === 24 && this.minutes === 60 && this.seconds === 60) {
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
        }
        this.printTime()
    }



//

}

let clock1 = new Clock();
console.log(clock1)

