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
