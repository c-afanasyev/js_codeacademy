import Airplane from './3-airplane';

function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function (element) {
        console.log(`Fuel Capacity of ${element.name} : ${element.fuelCapacity}`);
    });
}

displayFuelCapacity();
