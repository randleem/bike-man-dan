import React, {useState, useEffect} from 'react' //rfce

function GetJobById() {
    const [userJobs, setUserJobs] = useState(null)

    function getParameterByName(userId, url = window.location.href) {
        userId = userId.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + userId + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function getCustomerJob(){
        console.log("hello world")
    }


    return (
        <div>
            
        </div>
    )
}

export default GetJobById


