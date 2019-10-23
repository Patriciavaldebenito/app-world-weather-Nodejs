const argv = require('./config/yargs').argv;
const placeFunction = require('./place-city/place-city'); 

//testing
// console.log(argv);
console.log(argv.direction);




placeFunction.getPlaceCity(argv.direction)
.then(console.log)
.catch(console.log)