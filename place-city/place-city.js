const axios = require('axios');


// https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=New%20York


const getPlaceCity = async (directionEntered) => {

    const encodeUrl = encodeURI(directionEntered);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '250bb3f01emsh20427593737bce1p1262b2jsnbe369d7b2666' }
    });

    const resp = await instance.get();
    // console.log(resp.data.Results)
    const data =resp.data.Results;

    if (data.lenght === 0) {
          throw new Error(`No hay resultados para la dirección ${directionEntered}`);
    }

  const direction = data[0].name;
  const lat = data[0].lat;
  const lng = data[0].lon;
  //console.log(`datos: direccion ${direction}, lat ${lat}, long ${lng}`)
    return {
        direction,
        lat,
        lng
    }

}

module.exports = {
    getPlaceCity
}




/*  FUNCTION FLECHA INICIAL - ANTES DE USAR ASYNC - AWAIT */


// const getPlaceCity = (direction) => {

//     const encodeUrl = encodeURI(direction);

//     const instance = axios.create({
//         baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=${encodeUrl}`,
//         headers: { 'X-RapidAPI-Key': '250bb3f01emsh20427593737bce1p1262b2jsnbe369d7b2666' }
//     });

//     instance.get()
//     .then(resp => {
//         console.log(resp.data.Results[0]);
//     })
//     .catch(err => {
//         console.log('Error!! :', err)
//     });


//     return { 
//         direction,
//         lat,
//         lng
//     }
// }
