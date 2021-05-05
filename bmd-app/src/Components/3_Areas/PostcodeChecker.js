import React, {useState, useEffect} from 'react';

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyLnp2ozEQJQT4fY'}).base('appgfB11h54LqZPOd');

function PostcodeChecker() {
    const [postcode, setPostcode] = useState("B13 9TY");
    const [roundDay, setRoundDay] = useState("");

    useEffect(() => {
        base('POSTCODES For Form').select({
            // Selecting the first 3 records in Grid view:
            maxRecords: 1,
            view: "Grid view",
            fields: ["WebsiteDay"],
            // filterByFormula: `{Original Postcode} = ${postcode}`
            filterByFormula: `NOT({Original Postcode} != '${postcode}')`
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
        
            records.forEach(function(record) {
                setRoundDay(record.get('WebsiteDay'));
                console.log('Retrieved', record.get('WebsiteDay'));
            });
        
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, [])

    return (
        <div className='areas-postcode-container'>
            <div>
                <h3>Your Round Day is {roundDay}</h3>
            </div>
            
        </div>
    )
}

export default PostcodeChecker


