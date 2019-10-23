const argv = require('./config/yargs').argv;
const axios = require('axios');

//testing
// console.log(argv);
 console.log(argv.address);

const encodeUrl = encodeURI(argv.address);
console.log(encodeUrl);
 // https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=New%20York

 const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php/latlon.php?location=${encodeUrl}`,
    headers: {'X-RapidAPI-Key': '250bb3f01emsh20427593737bce1p1262b2jsnbe369d7b2666'}
  });


  instance.get()
  .then(resp => { 
      console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error!! :', err)
    });
