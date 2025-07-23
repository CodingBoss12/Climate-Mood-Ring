// convert.js
const csv = require('csvtojson');
csv()
  .fromFile('uscities.csv')
  .then(arr => {
    const out = arr.map(c => ({
      name: c.city,
      state: c.state_id,
      lat: parseFloat(c.lat),
      lon: parseFloat(c.lng)
    }));
    require('fs').writeFileSync('us_cities_full.json', JSON.stringify(out));
    console.log('Done!');
  });
