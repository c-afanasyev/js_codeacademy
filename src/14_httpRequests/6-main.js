fetch('https://api-to-call.com/endpoint').then(response => {
    if (response.ok){
        return response.json();
    } 
    else {
        throw new Error('Request failed!');
    }
}, console.log
).then(jsonResponse => {
    return jsonResponse;
});