const argv = require('./config/yargs').argv;
const placeFunction = require('./place-city/place-city'); 
const weatherFunction = require('./weather/weather');
//testing
// console.log(argv);
console.log(argv.direction);




// placeFunction.getPlaceCity(argv.direction)
// .then(console.log)
// .catch(console.log)

weatherFunction.getWeather(40.750000,-74.000000)
.then(console.log)
.catch(console.log)