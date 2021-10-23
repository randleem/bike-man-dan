import React, { useState, useEffect } from "react";

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyLnp2ozEQJQT4fY" }).base(
  "appgfB11h54LqZPOd"
);

function PostcodeChecker() {
  const [getRoundDay, setGetRoundDay] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [roundDay, setRoundDay] = useState("");
  const [invalidPostcode, setInvalidPostcode] = useState(false);
  const [unknownPostcode, setUnknownPostcode] = useState(false);

  useEffect(() => {
    if (getRoundDay) {
      base("POSTCODES For Form")
        .select({
          // Selecting the first 3 records in Grid view:
          maxRecords: 1,
          view: "Grid view",
          fields: ["WebsiteDay"],
          // filterByFormula: `{Original Postcode} = ${postcode}`
          filterByFormula: `NOT({Original Postcode} != '${postcode}')`,
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            // If its an invalid postcode
            if (records.length === 0) {
              setUnknownPostcode(true);
            } else {
              records.forEach(function (record) {
                // console.log(record)
                setRoundDay(record.get("WebsiteDay"));
              });

              // To fetch the next page of records, call `fetchNextPage`.
              // If there are more records, `page` will get called again.
              // If there are no more records, `done` will get called.
              fetchNextPage();
            }
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            }
          }
        );
      setGetRoundDay(false);
    }
  }, [getRoundDay]);

  function handlePostcodeInput(e) {
    setRoundDay("");
    setInvalidPostcode(false);
    let { value } = e.target;
    value = value.toUpperCase().trim();
    let containsSpace = /\s/.test(value);
    let firstCharacter = value.charAt(0);
    let fourthCharacter = value.charAt(value.length - 3);
    console.log(fourthCharacter);
    let firstIsLetter = /[a-z]/i.test(firstCharacter);
    let fourthIsNumber = /[0-9]/i.test(fourthCharacter);
    if (firstIsLetter && fourthIsNumber) {
      if (containsSpace) {
        setPostcode(value);
      } else {
        let ammendedValue = value.split("");
        ammendedValue.splice(-3, 0, " ");
        setPostcode(ammendedValue.join(""));
      }
    } else {
      setInvalidPostcode(true);
    }
  }

  function handleSubmit() {
    setUnknownPostcode(false);
    setInvalidPostcode(false);
    setGetRoundDay(true);
  }

  return (
    <div className="areas-postcode-container">
      <div>
        <form>
          <input
            type="text"
            name="postcode"
            placeholder="Enter Your Postcode"
            onChange={handlePostcodeInput}
          ></input>
        </form>
        <button className="areas-postcode-button" onClick={handleSubmit}>
          search
        </button>
      </div>
      <div>
        {unknownPostcode && postcode.length !== 0 ? (
          <h3>
            Please Check Your Postcode is Correct, if it is I'm sorry I dont
            currently service your area
          </h3>
        ) : (
          <h3>Your Round Day is {roundDay}</h3>
        )}
        {/* {invalidPostcode && postcode.length !== 0 ? <h3>Your Postcode is invalid</h3> : <h3>Your Round Day is {roundDay}</h3>}  */}
        {/* <h3>Your Round Day is {roundDay}</h3> */}
      </div>
    </div>
  );
}

export default PostcodeChecker;
