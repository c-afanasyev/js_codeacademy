class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior ++;
    }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console

//--------------------------------------------------//

class Surgeon {
    constructor(name, department, blahBlah){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
        this._blahBlah = blahBlah; //undefined
    }
    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(days) {
        this._remainingVacationDays -= days;
    }
}

const surgeonCurry = new Surgeon('Curry','Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry);

console.log(surgeonCurry.name);

surgeonCurry.takeVacationDays(3);

console.log(surgeonCurry.remainingVacationDays);

//--------------------------------------------------//

class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(dayOff) {
        this._remainingVacationDays -= dayOff;
    }

    generatePassword(){
        return Math.floor(Math.random() * 10001);
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }

    static generatePassword(){
        return Math.floor(Math.random() * 10000);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);

console.log(Nurse.generatePassword());


