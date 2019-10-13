const createVenueHTML = (name, location, iconSource) => {
    return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
};

const createWeatherHTML = (currentDay) => {
    return `<h2> High: ${currentDay.main.temp_max}</h2>
    <h2> Low: ${currentDay.main.temp_min}</h2>
    <img src="https://${currentDay.weather[0].icon}" class="weathericon" />
    <h2>${weekDays[(new Date()).getDay()]}</h2>`;
};