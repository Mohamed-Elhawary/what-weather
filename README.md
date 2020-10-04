# What Weather

[![Netlify Status](https://api.netlify.com/api/v1/badges/bf53e89a-78a1-4704-a28e-a820843356f2/deploy-status)](https://app.netlify.com/sites/whatweather14/deploys)  

What Weather is a Forecasting Weather Application that shows to you the Weather Conditions of a Location you choose depending on JSON API.
  
![Screenshot](preview.png)


## Getting Started

You can try the APP from [here](https://mohamed-elhawary.github.io/what-weather/)

## Prerequisites

Just Modern Browser like "Chrome" and a Code Editor for Deployment and Develop.  

## versions  
* [v1](https://github.com/Mohamed-Elhawary/what-weather/tree/v1)  

* [v1.1](https://github.com/Mohamed-Elhawary/what-weather/tree/v1.1)  
  - Re-build the app with OOP JS technique, which increase from the app performance.
```
class Forecast {
    constructor() {
        this.myKey         = "98AOsgSnks0lZjHn5RiFy9JlXmTnDRbe";
        this.cityUrl       = "https://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherUrl    = `https://dataservice.accuweather.com/currentconditions/v1/`;
    }
    async getDetails(cityName) {
        const cityDetails    = await this.getCity(cityName);  //get promise object
        const weatherDetails = await this.getWeather(cityDetails.Key);  //get promis object
        return {cityDetails, weatherDetails}; //this is shorthand code for objects and it is equal to >>  return {cityDetails: cityDetails, weatherDetails:weatherDetails}
    }
    async getCity(city) {
        const queryParams = `?apikey=${this.myKey}&q=${city}`;
        const response    = await fetch( this.cityUrl + queryParams );
        const data        = await response.json();
        return data[0];
    }
    async getWeather(cityId) {
        const queryParams =  `${cityId}?apikey=${this.myKey}`;
        const response    = await fetch( this.weatherUrl + queryParams);
        const data        = await response.json();
        return data[0];
    }
}

```  

## Built With

* HTML5
* CSS3
* ES6  

## Framework

* Bootstrap  

## API  

* JSON

## Author

* Mohamed Elhawary  

## Contact Me  

* Email: mohamed.k.elhawary@gmail.com

## Deploy with Me

Feel Free to Deploy it with me, send Issues or a Pull Request and i'll deal with you, just test it First.

## License

Licensed under the [MIT License](LICENSE)


