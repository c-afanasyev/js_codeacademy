// Foursquare API Info
const clientId = 'KTTODDONVQAE2YND0SLVJPRZZYMUASW32AAKD2VT2011LXCH';
const clientSecret = 'HL40VJ3VXWSY43QRUPGQAJXTR1HOR55TP4TTDBDFXJJCRBFS';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// APIXU Info
const apiKey = 'd96b76e4dda5c96a113a29a52acad5b1';
const forecastUrl = 'https://api.apixu.com/v1/forecast.json?key=';

const openWeatherKey = '78bdf92186b2ecbf4be2ebd59e858b79';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
    const city = $input.val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20191005`;
    
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            console.log(venues);
            return venues;
        }
    } catch (error) {
        console.log(error);
    }
};

const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const responseRet = await response.json();
            return responseRet;
        }

    } catch (error) {
        console.log(error);
    }

}

// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        const venue = venues[index];
        const venueIcon = venue.categories[0].icon;
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
};

const renderForecast = (day) => {
    $weatherDivs.forEach(($day, index) => {
        // Add your code here:
            const weatherContent = createWeatherHTML(day);

            
        $day.append(weatherContent);
    });
};

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDivs.forEach(day => day.empty());
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues => renderVenues(venues));
    getForecast().then(forecast => renderForecast(forecast));
    return false;
};

$submit.click(executeSearch);
