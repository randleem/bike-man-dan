import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Material UI

//Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/1_HomePage/Home";

require('dotenv').config();




// let apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;
// let baseKey = process.env.REACT_APP_AIRTABLE_BASE_ID;


function App() {
// const [priceList, setPriceList] = useState([]);

// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyLnp2ozEQJQT4fY'}).base(`app7bXGxuMvf82oJb`);

// base('Price List').select({
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.
// console.log('This is records:', records)
//     records.forEach(function(record) {
//         console.log('this is record.fields', record.fields);
//         console.log('Retrieved', record.get('Job'));
//     });
    

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });



// useEffect(() => {
//     async function getPriceList() {
//       const res = await fetch("https://api.airtable.com/v0/app7bXGxuMvf82oJb/Price%20List?maxRecords=3&view=Grid%20view", {
//         headers: {
//           'content-type': 'application/JSON',
//           Authorization: `Bearer keyLnp2ozEQJQT4fY`,
//         },
//       });
//       const data = await res.json();
//       console.log(`data payload is `, data?.records[1].fields);
//       setPriceList(data)
//     }
//     getPriceList();
//   }, []);



  return (
    <div>
      <Router>
      <Navbar />
        <Switch >
        <Route path="/">
          {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
