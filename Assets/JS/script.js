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

    let weatherConditions = function(event) {
    let currentAPI = 'G27KXPH8JLYLLD4AT9EQQCZ9K'
    let currentURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ currentCity +'?unitGroup=us&key=' + currentAPI +'&contentType=json';
    
    fetch(currentURL)
    .then(function(response) {
        return response.json();})
        .then(function(data) {
            console.log(data);
            // Populating current conditions on HTML
            let tempEl = $('#temp');
            let windEl = $('#wind');
            let humidEl = $('#humid');
            let indexEl = $('#index');

            tempEl.text('Temp: '+ data.currentConditions.temp);
            windEl.text('Wind: '+ data.currentConditions.windspeed);
            humidEl.text('Humidity: '+ data.currentConditions.humidity);
            indexEl.text('UV Index: '+ data.currentConditions.uvindex);

            // Populating the five-day forecast: Day 1
            let dayOne = $('#day-one');
            let dayOneTemp = data.days[1].temp;
            let dayOneHum = data.days[1].humidity;
            let dayOneWind = data.days[1].windspeed;

             
            dayOne.append($(`<li>Temp: ${dayOneTemp}</li>`));
            dayOne.append($(`<li>Windspeed: ${dayOneWind}</li>`));
            dayOne.append($(`<li>Humidty: ${dayOneHum}</li>`));

             // Populating the five-day forecast: Day 2
             let dayTwo = $('#day-two');
             let dayTwoTemp = data.days[2].temp;
             let dayTwoHum = data.days[2].humidity;
             let dayTwoWind = data.days[2].windspeed;
 
              
             dayTwo.append($(`<li>Temp: ${dayTwoTemp}</li>`));
             dayTwo.append($(`<li>Windspeed: ${dayTwoWind}</li>`));
             dayTwo.append($(`<li>Humidty: ${dayTwoHum}</li>`));

              // Populating the five-day forecast: Day 3
            let dayThree = $('#day-three');
            let dayThreeTemp = data.days[3].temp;
            let dayThreeHum = data.days[3].humidity;
            let dayThreeWind = data.days[3].windspeed;

             
            dayThree.append($(`<li>Temp: ${dayThreeTemp}</li>`));
            dayThree.append($(`<li>Windspeed: ${dayThreeWind}</li>`));
            dayThree.append($(`<li>Humidty: ${dayThreeHum}</li>`));

            // Populating the five-day forecast: Day 4
            let dayFour = $('#day-four');
            let dayFourTemp = data.days[4].temp;
            let dayFourHum = data.days[4].humidity;
            let dayFourWind = data.days[4].windspeed;

             
            dayFour.append($(`<li>Temp: ${dayFourTemp}</li>`));
            dayFour.append($(`<li>Windspeed: ${dayFourWind}</li>`));
            dayFour.append($(`<li>Humidty: ${dayFourHum}</li>`));

            // Populating the five-day forecast: Day 5
            let dayFive = $('#day-five');
            let dayFiveTemp = data.days[5].temp;
            let dayFiveHum = data.days[5].humidity;
            let dayFiveWind = data.days[5].windspeed;

             
            dayFive.append($(`<li>Temp: ${dayFiveTemp}</li>`));
            dayFive.append($(`<li>Windspeed: ${dayFiveWind}</li>`));
            dayFive.append($(`<li>Humidty: ${dayFiveHum}</li>`));
        })
        } 
        weatherConditions()
});





