const robot1 = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greetMaster() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
};

//--------------------------------------------------//

const robot2 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot2.provideInfo());

//--------------------------------------------------//

const robot3 = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot3._energyLevel = 'high';

robot3.recharge();

//--------------------------------------------------//

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
};

// To call the getter method:
person.fullName; // 'John Doe'

//--------------------------------------------------//

const robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};

console.log(robot4.energyLevel);

//--------------------------------------------------//

const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },

    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0){
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};

robot5.numOfSensors = 100;

console.log(robot5.numOfSensors);

//--------------------------------------------------//

const monsterFactory1 = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};

const ghost = monsterFactory1('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

//--------------------------------------------------//

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

//--------------------------------------------------//

const monsterFactory2 = (name, age) => {
    return {
        name: name,
        age: age
    }
};

//Destructuring (Property Value Shorthand)
const monsterFactory3 = (name, age) => {
    return {
        name,
        age
    }
};

//--------------------------------------------------//

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

//const residence = vampire.residence;

//Destructured Assignment
const { residence } = vampire;

//--------------------------------------------------//

const robot6 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot6;

functionality.beep();

//--------------------------------------------------//

const robot7 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot7);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot7);

console.log(robotEntries);

// Declare newRobot below this line:
//const newRobot = Object.assign({}, robot7);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);



