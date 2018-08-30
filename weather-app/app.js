const request = require('request')
const yargs = require('yargs')

const argv = yargs
  .option({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

console.log(argv.a);
const encodeAddress = encodeURIComponent(argv.a)

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true // transform json en objet
  },(error, response, body) => {
    if(error){
        console.log('unable to connect to google servers');
    }
    else if (body.status === "ZERO_RESULTS"){
        console.log('unable to find that adress.');
    }
    else if (body.status=== "OK"){
    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lng: ${body.results[0].geometry.location.lng}`);
    }

  }
)
