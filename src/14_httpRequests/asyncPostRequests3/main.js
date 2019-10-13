// information to reach API
const apiKey = '2f704e95b285408190453c17cc3ca315';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
// Code goes here

const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    const requestParameters = {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
        }
    };
    
    try {
        const response = await fetch(url, requestParameters);
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);
