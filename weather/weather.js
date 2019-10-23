const axios = require('axios');


const getWeather = async (lat, lng) => {

    let rpta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=32f4e741ebd6d41a366cf1905dcc76d4&units=metric`);
    return rpta.data.main.temp;
   
}


module.exports = {
    getWeather
}