const key = "98AOsgSnks0lZjHn5RiFy9JlXmTnDRbe";

const getCity         = async (city) => {
    const url         = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParams = `?apikey=${key}&q=${city}`;

    const response    = await fetch( url + queryParams );
    const data        = await response.json();

    return data[0];
}

const getWeather      = async (cityId) => {
    const url         = `https://dataservice.accuweather.com/currentconditions/v1/${cityId}`;
    const queryParams =  `?apikey=${key}`;

    const response    = await fetch( url + queryParams);
    const data        = await response.json();
    
    return data[0];
}