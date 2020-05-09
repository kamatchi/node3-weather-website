const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia2FtYXRjaGlwIiwiYSI6ImNrOWd6YzY3dDAzbDQzbW12NXpyanl5MHkifQ.f8E1MuQ432JKq-ymFV49lA&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect location services!', undefined);
    } else if (!body.features.length) {
      callback('Unable to find location. Try another location.', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
