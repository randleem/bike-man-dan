import React, { useState, useEffect } from "react"; //rfce

function GetAllJobs() {
  const [allJobs, setAllJobs] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        if(loggedIn){
            fetch('https://europe-west2-spry-reference-329613.cloudfunctions.net/bmd-get-workshop-jobs')
        }
    })

  return (
    <div>
      
    </div>
  );
}

export default GetAllJobs;
