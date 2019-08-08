let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};

//--------------------------------------------------//

let spaceship1 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    'Active Mission' : true,
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below

let crewCount = spaceship1.numCrew;

let planetArray = spaceship1.flightPath;

//--------------------------------------------------//

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship1[propName];

console.log(isActive);

//--------------------------------------------------//

spaceship1.color = 'glorious gold';

spaceship1.numEngines = 10;

delete spaceship1["Secret Mission"];

//--------------------------------------------------//

//old
/*const alienShip = {
    invade: function () {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};*/

//ES6 - omit the colon and the "function" keyword

const alienShip = {
    invade() {
        console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    },

    retreat() {
        console.log(retreatMessage);
    },

    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

alienShip.retreat();
alienShip.takeOff();

//--------------------------------------------------//

let spaceship2 = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        backup: {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

// Write your code below

let capFave = spaceship2.crew.captain["favorite foods"][0];

spaceship2.passengers = [{name: 'Jimmy', gender: 'male'}, {name: 'Amy', gender: 'female'}];

let firstPassenger = spaceship2.passengers[0];

//--------------------------------------------------//

// Write your code below

let greenEnergy = obj => {
    obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = obj => {
    obj.disabled = true;
};

greenEnergy(spaceship2);
remotelyDisable(spaceship2);

console.log(spaceship2);

//--------------------------------------------------//

let spaceship3 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below

for (let crewMember in spaceship3.crew) {
    console.log(`${crewMember}: ${spaceship3.crew[crewMember].name}`)
}

for (let crewMember in spaceship3.crew) {
    console.log(`${spaceship3.crew[crewMember].name}: ${spaceship3.crew[crewMember].degree}`)
}
