class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(value) {
        if (isNaN(value)){
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        } else {
            this._numberOfStudents = value;
        }
    }

    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomNumber = Math.floor(Math.random() * substituteTeachers.length);

        return substituteTeachers[randomNumber];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

let pickupPolicy = 'Students must be picked up by a parent, guardian, or a family member over the age of 13.';

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, pickupPolicy);

lorraineHansbury.quickFacts();

let teachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

console.log(School.pickSubstituteTeacher(teachers));

let sportTeams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];

const alSmith = new HighSchool('Al E. Smith', 415, sportTeams);

console.log(alSmith.sportsTeams);
