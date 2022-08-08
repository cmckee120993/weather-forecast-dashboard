// Submit button and user input 
let submit = $('.btn');


submit.on('click', function(event) {
    let userInput = $(this).siblings('#city').val();
    localStorage.setItem('currentCity', userInput);
    $(this).siblings('#city').val('');
    let cityHistory = $('.search-history');
    let currentCity = localStorage.getItem('currentCity');
    $('.search-history').append($(`<li>${currentCity}</li>`));

    // Taking localStorage to the weather api for current conditions

    let currentConditions = function(event) {
    let currentAPI = 'YTg0OTY5YTdlOTI2NDE5ODk4MzE0ZmViMThmNmIyMmU6YjQzYjhkMWYtODVhMi00M2Y0LTk4NzktNmU1ZThjMzdhYjhj';
    let currentURL = 'https://api.myptv.com/geocoding/v1/locations/by-text?searchText=aan%27t%20verlaat%2033f%20&apiKey=YTg0OTY5YTdlOTI2NDE5ODk4MzE0ZmViMThmNmIyMmU6YjQzYjhkMWYtODVhMi00M2Y0LTk4NzktNmU1ZThjMzdhYjhj';
    fetch(currentURL)
    .then(function(response) {
        console.log(response);
        return response.json();})
        .then(function(data) {
            console.log(data);
        });
}
currentConditions()
});

