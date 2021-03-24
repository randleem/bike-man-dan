import React, { useMemo, useState, useEffect } from "react";
import BookNow from '../BookNow/BookNow';
import prices from './dataTest';
import PricesTable from '../PricesTable/PricesTable';

function Prices() {
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "Prices",
            // First group columns
            columns: [
              {
                Header: "Individual Jobs",
                accessor: "prices.Individual_Jobs"
              },
              {
                Header: "Price (min £35)",
                accessor: "prices.Price"
              },
              {
                Header: "STANDARD £50",
                accessor: "prices.STANDARD_£50"
              },
              {
                Header: "ADVANCED £85",
                accessor: "prices.ADVANCED_£85"
              },{
                Header: "ADVANCED £85",
                accessor: "prices.FULL_£85"
              },
            ]
          }])

    return (
        <div id='prices' className='prices-container'>
            <h1>Prices</h1>
            <BookNow /> 
            <div className='prices-table'>
                {/* <div className='prices-table-header'>
                    <PricesTable data={prices} colums={columns}/>
                </div> */}
            </div>
        </div>
    )
}

export default Prices
