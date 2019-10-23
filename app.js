const argv = require('./config/yargs').argv;
const placeFunction = require('./place-city/place-city');
const weatherFunction = require('./weather/weather');
//testing
// console.log(argv);
//console.log(argv.direction);




// placeFunction.getPlaceCity(argv.direction)
// .then(console.log)
// .catch(console.log)

// weatherFunction.getWeather(40.750000,-74.000000)
// .then(console.log)
// .catch(console.log)

const getInfo = async (direction) => {
    //rpa
    try {
        let coords = await placeFunction.getPlaceCity(direction)
        let temp = await weatherFunction.getWeather(coords.lat, coords.lng)

        return `El clima en ${direction} es de ${temp}.`;
    
    } catch {
        throw new Error(`No se pudo determinar el clima de ${direction}`);
    }

}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log)