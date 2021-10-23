import React, {useState, useEffect} from 'react' //rfce

function GetJobById() {
    const [userJobId, setUserJobId] = useState(null)

 

    function getQueryStringParameter(){
        let url = window.location.href
        let queryString = url.split("?");
        let customerId = queryString[1].split("=");
        setUserJobId(customerId[1]);
    }

    function getCustomerJob(){
        console.log("hello world")
    }


    return (
        <div>
            <button onClick={getQueryStringParameter}>Window Variable</button>
        </div>
    )
}

export default GetJobById


