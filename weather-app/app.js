const request = require('request');

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=17%20rue%20delandine%20lyon",
    json: true, //transform json en objet
}, (error, response, body)=>{
    console.log(body);
})