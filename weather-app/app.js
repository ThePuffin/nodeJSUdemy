const request = require('request');

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=17%20rue%20delandine%20lyon",
    json: true, //transform json en objet
}, (error, response, body)=>{
    console.log(JSON.stringify(body, undefined, 2));
    // console.log(`Address: ${body.results[0].formatted_address}`);
    // console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    // console.log(`Lng: ${body.results[0].geometry.location.lng}`);

})