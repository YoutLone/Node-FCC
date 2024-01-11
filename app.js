const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2) => {
    const total = num1 + num2;
    console.log(total);
})

eventEmitter.emit('tutorial',1,3);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let jame = new Person('Jame');
let julia = new Person('Julia');

julia.on('name', () => {
    console.log("My name is " + julia.name)
})
jame.on('name', () => {
    console.log('My name is ' + jame.name);
});

julia.emit('name');
jame.emit('name');
