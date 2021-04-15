import React from "react";
import BookNow from '../BookNow/BookNow';
import prices from './dataTest';
import PricesTable from '../PricesTable/PricesTable';
import "./Prices.css";

function Prices() {

   
    const columns = [
      {
        Header: "Individual Jobs",
        accessor: "Individual_Jobs"
      },
      {
        Header: "Price (min £35)",
        accessor: "Price"
      },
      
      {
        Header: "Standard £50",
        accessor: "STANDARD"
      },
      {
        Header: "Advanced£85",
        accessor: "ADVANCED"
      },{
        Header: "Full £85",
        accessor: "FULL"
      },
    ]
          

    return (
        <div id='prices' className='prices-container'>
            <h1>Prices</h1>
            <div className='prices-table-container'>
              <PricesTable data={prices} columns={columns}/>
            </div>
            <BookNow /> 
        </div>
    )
}

export default Prices
