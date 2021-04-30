require('dotenv').config();


//Setting up the controller using https://chinarajames.com/getting-started-with-the-airtable-api/ tutorial
var Airtable = require('airtable');
const airTableAPI = process.env.AIRTABLE_API_KEY;
const airTableBaseId = process.env.AIRTABLE_BASE_ID;

var base = new Airtable({apiKey: "keyLnp2ozEQJQT4fY"}).base('appXInkHESEFZc80m');
const table = base('Labour Charges');
const view = 'Website';

// Maybe use Firebase or Netlify as a go between - serve client data


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