import './App.css';


var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

let myResult = []

base('Price List').select({
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
console.log('This is records:', records)
    records.forEach(function(record) {
        console.log('this is record.fields', record.fields);
        console.log('Retrieved', record.get('Job'));
    });
    console.log('This is resullt', myResult);

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});


function App() {
  return (
    <div>

    </div>
  );
}

export default App;
