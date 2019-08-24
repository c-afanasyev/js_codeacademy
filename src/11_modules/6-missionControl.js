import {aircrafts, meetsStaffReqs, flightReqs, meetsSpeedRangeReqs} from './6-airplane';

function displayFuelCapacity() {
    aircrafts.forEach(function (element) {
        console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
    });
}

function displayStaffStatus() {
    aircrafts.forEach(function (element) {
        console.log(`${element.name} meets staff requirements: ${meetsStaffReqs(
            element.availableStaff, flightReqs.requiredStaff
        )}`);
    })
}

function displaySpeedRangeStatus() {
    aircrafts.forEach(function (element) {
        console.log(`${element.name} meets speed range requirements: ${meetsSpeedRangeReqs(
            element.maxSpeed, element.m, flightReqs.requiredSpeedRange
        )}`);
    })
}

displayFuelCapacity();

displayStaffStatus();

displaySpeedRangeStatus();
