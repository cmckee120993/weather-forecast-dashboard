// Submit button and user input 
let submit = $('.btn');


submit.on('click', function(event) {
    let userInput = $(this).siblings('#city').val();
    localStorage.setItem('currentCity', userInput);
    $(this).siblings('#city').val('');
    let cityHistory = $('.search-history');
    let currentCity = localStorage.getItem('currentCity');
    $('.search-history').append($(`<li>${currentCity}</li>`));

})
