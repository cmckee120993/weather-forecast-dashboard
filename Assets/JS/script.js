// Submit button and user input 
let submit = $('.btn');


submit.on('click', function(event) {
    let userInput = $(this).siblings('#city').val();
    localStorage.setItem('currentCity', userInput);
    $(this).siblings('#city').val('');
    let cityHistory = $('.search-history');
    let currentCity = localStorage.getItem('currentCity');
    $('.search-history').append($(`<li>${currentCity}</li>`));

    // Taking localStorage to a geocode API for longitude/lattitude

    let currentConditions = function(event) {
    let currentAPI = 'G27KXPH8JLYLLD4AT9EQQCZ9K'
    let currentURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ currentCity +'?unitGroup=us&key=' + currentAPI +'&contentType=json';
    
    fetch(currentURL)
    .then(function(response) {
        return response.json();})
        .then(function(data) {
            // Populating current conditions on HTML
            let tempEl = $('#temp');
            let windEl = $('#wind');
            let humidEl = $('#humid');
            let indexEl = $('#index');

            tempEl.text('Temp: '+ data.currentConditions.temp);
            windEl.text('Wind: '+ data.currentConditions.windspeed);
            humidEl.text('Humidity: '+ data.currentConditions.humidity);
            indexEl.text('UV Index: '+ data.currentConditions.uvindex);
        });
        
}
currentConditions()



});

