const apiKey = '104abee716e6435f8d5144120240801';
const baseUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}`;

export const getAllData = async(town) => {
    const response = await fetch(`${baseUrl}&q=${town}&days=4&aqi=no&alerts=no`);
    const responseData = await response.json();
    return responseData;
};