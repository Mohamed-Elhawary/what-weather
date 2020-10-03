const form     = document.querySelector("form"),
      card     = document.querySelector(".card"),
      time     = document.querySelector("img.time"),
      icon     = document.querySelector(".icon img"),
      details  = document.querySelector(".details"),
      error    = document.querySelector("p.error"),
      forecast = new Forecast();

const updateCard = (data) => {
    console.log(data);
    //using Destructuring new ES6 Feature
    const {cityDetails, weatherDetails} = data;
    //instead of using this code below v:
    /*const cityDetails    = data.cityDetails;
      const weatherDetails = data.weatherDetails;*/
    
    const cityTextName       = cityDetails.EnglishName;
    const weatherCondition   = weatherDetails.WeatherText;
    const weatherTemperature = weatherDetails.Temperature.Metric.Value;

    // update details template
    details.innerHTML = `
        <h5  class="my-3">${cityTextName}</h5>
        <div class="my-3">${weatherCondition}</div>
        <div class="my-3 display-4">
            <span>${weatherTemperature}</span><span>&deg;C</span>
        </div>
    `;

    // update the night/day & icon images
    //first the icon
    const iconSrc = `images/icons/${weatherDetails.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    //second the time img
    //use the ternary operator to make shorthand code for if condition
    const timeSrc = weatherDetails.IsDayTime ? 'images/day.svg' : 'images/night.svg';
    //insted of using the code below v:
    /*let timeSrc = null;
    if (weatherDetails.IsDayTime) {
        timeSrc = "images/day.svg"
    } else {
        timeSrc = "images/night.svg"
    }*/

    time.setAttribute("src", timeSrc);

    //remove the d-none class from the card 
    if(card.classList.contains('d-none')) {
        card.classList.remove("d-none");
    }

};

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputValue = form.city.value.trim();
    form.reset();

    forecast.getDetails(inputValue)
        .then(result => updateCard(result))
        .catch(() => {
            error.classList.remove("d-none");
            setTimeout(() => {
                error.classList.add("d-none");            
            }, 2000);
        });

    //set local storage
    localStorage.setItem("location", inputValue);
});

if(localStorage.getItem("location")) {
    forecast.getDetails(localStorage.getItem("location"))
        .then(result => updateCard(result))
        .catch(() => {
            error.classList.remove("d-none");
            setTimeout(() => {
                error.classList.add("d-none");            
            }, 2000);
        });
}