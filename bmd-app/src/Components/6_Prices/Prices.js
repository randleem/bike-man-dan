import React, { useEffect } from "react";
import BookNow from "../BookNow/BookNow";
import prices from "./dataTest";
import PricesTable from "../PricesTable/PricesTable";
import "./Prices.css";
// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'YOUR_API_KEY'}).base('appgfB11h54LqZPOd');

function Prices() {
  useEffect(() => {});

  // // Attempt to get information from Airtable
  // base("Labour Charges")
  //   .select({
  //     // Selecting the first 3 records in Grid view:
  //     view: "Website",
  //     // Fields I want returned from the Dans Airtable Wesbite Schema
  //     fields: [
  //       "Job",
  //       "Notes",
  //       "Website prices",
  //       "Area of Bike",
  //       "STANDARD",
  //       "FULL",
  //       "ADVANCED",
  //       "Advanced optional",
  //     ],
  //   })
  //   .eachPage(
  //     function page(records, fetchNextPage) {
  //       // This function (`page`) will get called for each page of records.

  //       records.forEach(function (record) {
  //         console.log("Retrieved", record.get("Job"));
  //       });

  //       // To fetch the next page of records, call `fetchNextPage`.
  //       // If there are more records, `page` will get called again.
  //       // If there are no more records, `done` will get called.
  //       fetchNextPage();
  //     },
  //     function done(err) {
  //       if (err) {
  //         console.error(err);
  //         return;
  //       }
  //     }
  //   );

  //React Table - Hard coded data with dataTest/json
  const columns = [
    {
      Header: "Individual Jobs",
      accessor: "Individual_Jobs",
    },
    {
      Header: "Individual Jobs",
      accessor: "Price",
    },

    {
      Header: "Standard £60",
      accessor: "STANDARD",
    },
    {
      Header: "Advanced £85",
      accessor: "ADVANCED",
    },
    {
      Header: "Full £130",
      accessor: "FULL",
    },
  ];

  return (
    <div id="prices" className="prices-container">
      <h1>Prices</h1>
      <div className="prices-table-container">
        <PricesTable data={prices} columns={columns} />
      </div>
      <BookNow />
    </div>
  );
}

export default Prices;
