//rfec - shortcut
import React, {useState, useEffect} from 'react'

// Components
import HeroBanner from '../HeroBanner/HeroBanner';

function Home() {
    const [googleReviews, setGoogleReviews] = useState([])

// Need to await the Google API request 
// Attempt to get Google review Data to add to pageBreakAfter: 

    // useEffect(() => {
       
    //     fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=[PLACE_ID]&key=[API_KEY]`)
    //       .then((response) => response.json())
    //       .then((data) => setGoogleReviews(data.reviews))
    //       .catch((e) => {
    //         console.error(e);
    //       })
    //   }, []);

    return (
        <div>
            <HeroBanner/>
            <p>Hello Home</p>
            <div className='home-left'>
            <p>Hi, my name is Dan, your local mobile bicycle mechanic, I have been proudly serving cyclists in Birmingham and surrounding areas since 2011</p>
            </div>
            <div className='home-right'>

            </div>
        </div>
    )
}

export default Home
