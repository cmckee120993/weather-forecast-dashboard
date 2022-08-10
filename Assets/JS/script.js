// Submit button and user input 
let submit = $('.btn');

// Five-day forecast div used to clear old data upon a new search
let forecastDiv =$('.five-day');

// Search button for query
submit.on('click', function(event) {

    // Clearing previous search five-day forecast (if any)
    forecastDiv.empty();

    // Getting user input and sending it to storage
    let userInput = $(this).siblings('#city').val();
    localStorage.setItem('currentCity', userInput);
    $(this).siblings('#city').val('');
    let cityHistory = $('.search-history');

    weatherConditions();
});
   



    // Taking localStorage to a geocode API for longitude/lattitude

    function weatherConditions() {
   
    // Creating the search history list
    let currentCity = localStorage.getItem('currentCity');
    $('.search-history').append($(`<li id='city-history'>${currentCity}</li>`));
   
    // API URL
    let currentAPI = 'G27KXPH8JLYLLD4AT9EQQCZ9K'
    let currentURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ currentCity +'?unitGroup=us&key=' + currentAPI +'&contentType=json';
   
    // Getting data from API and returning to site
    fetch(currentURL)
    .then(function(response) {
        return response.json();})
        .then(function(data) {
            console.log(data);

            // Adding loc/date and dates to all forecast lists
            let currentCityInfo = $('.city-current-date');
            let todayDate = moment().format('MM-DD-YY');

            currentCityInfo.text(`${currentCity}: ${todayDate}`);

            // Populating current conditions on HTML
            let tempEl = $('#temp');
            let windEl = $('#wind');
            let humidEl = $('#humid');
            let indexEl = $('#index');
            let conditionsEl = $('#conditions');

            tempEl.text('Temp: '+ data.currentConditions.temp);
            windEl.text('Wind: '+ data.currentConditions.windspeed);
            humidEl.text('Humidity: '+ data.currentConditions.humidity);
            indexEl.text('UV Index: '+ data.currentConditions.uvindex);

            if (data.currentConditions.conditions === 'Clear') {
                conditionsEl.text('🔆')
            } else if (data.currentConditions.conditions === 'Partially cloudy') {
                conditionsEl.text('🌤')
            } else if (data.currentConditions.conditions === 'Rain, Partially cloudy') {
                conditionsEl.text('🌦')
            } else if (data.currentConditions.conditions === 'Rain') {
                conditionsEl.text('🌧')
            } else if (data.currentConditions.conditions === 'Snow') {
                conditionsEl.text('🌨')
            } else if (data.currentConditions.conditions === 'Thunderstorm') {
                conditionsEl.text('⛈')
            } else {
                conditionsEl.text('Conditions Unknown')
            };

        // Setting five-day forecast off of arrays
        for (var i=1; i<=5; i++) {
            let dayTemp = data.days[i].temp;
            let dayHum = data.days[i].humidity;
            let dayWind = data.days[i].windspeed;
            let dayConditions = data.days[i].conditions;
            let dayConditionsEl = $('<li></li>');
            let dayDate = moment().add(1, 'day').format('MM/DD/YY');
            
            if (dayConditions === 'Clear') {
                dayConditionsEl.text('🔆')
                } else if (dayConditions === 'Partially cloudy') {
                    dayConditionsEl.text('🌤');
                } else if (dayConditions === 'Rain, Partially cloudy') {
                    dayConditionsEl.text('🌦');
                } else if (dayConditions === 'Rain') {
                    dayConditionsEl.text('🌧');
                } else if (dayConditions === 'Snow') {
                    dayConditionsEl.text('🌨');
                } else if (dayConditions === 'Thunderstorm') {
                    dayConditionsEl.text('⛈');
                } else {
                    dayConditionsEl.text('Conditions Unknown');
                };

                console.log(dayConditionsEl);
            
            // Creating HTML list for array
            let fiveDayForecast = $(`<div id='day'>
                    <ul>
                        <li>${dayDate}</li>
                        ${dayConditionsEl[0].innerHTML}
                        <li>Temp: ${dayTemp}</li>
                        <li>Humidity: ${dayHum}</li>
                        <li>Windspeed: ${dayWind}</li>
                    </ul>`);

            // Accessing div and appending forecast to HTML
            forecastDiv.append(fiveDayForecast);
        }})};