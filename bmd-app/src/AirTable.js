require('dotenv').config();

var Airtable = require('airtable');
const airTableAPI = process.env.AIRTABLE_API_KEY;
const airTableBaseId = process.env.AIRTABLE_BASE_ID;

// const base = require('airtable').base('appXInkHESEFZc80m');

// var Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: `keyLnp2ozEQJQT4fY`
// });
// var base = Airtable.base('appXInkHESEFZc80m');


var base = new Airtable({apiKey: "keyLnp2ozEQJQT4fY"}).base('appXInkHESEFZc80m');

// base('Customer').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('email'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });


base('Customer').create([
    {
      "fields": {
        "Last Name": "Leach",
        "First Name": "Hannah",
        "email": "hannahleach@gmail.com",
        "Mobile Number": "07723541312",
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.get("Name"));
    });
  });

  base('Customer').update([
    {
      "id": "recq8lnaWhQwY67r9",
      "fields": {
        "Last Name": "Randle",
        "First Name": "Emma"
      }
    },
    {
      "id": "rec3aLKb03vthaU3H",
      "fields": {
        "Last Name": "Hayward",
        "First Name": "Daniel"
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function(record) {
      console.log(record.get('Last Name'));
    });
  });