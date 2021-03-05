import React, {useState} from 'react';
import './Services.css';
import ServicesCard from "../ServicesCard/ServicesCard";

function Services() {
const [otherServices, setOtherServices] = useState(false);

function handleOther(){
    setOtherServices(!otherServices);
}
    return (
        <div id='services' className='services-container'>
            <div className='services-introduction'>
                <h1>Bike Servicing</h1>
                <h3>To keep your bike in tip top condition, it's a good idea to have it serviced regularly - as often as every 4 months depending on how much you use it and where you store it. If you've ridden many miles between services be prepared for some parts to need replacing.</h3>
                <h3>A Standard service will get your bike running as safely and smoothly as is possible without “major surgery”. (Please note parts are not included in the price).</h3>
            </div>
            <div className='services-cards'>
                <ServicesCard 
                    title='On Site Puncture Repair or Gear Index'
                    imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                    imageAlt='ladies bike with basket'
                    // backgroundColor='#514663'
                    // fontColor='#FFFFFF'
                    price='£35'
                    summary='I will take off your wheel and fit you a brand new innertube or index your gears on site be that at home, work or on the roadside'
                    detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                />
                <ServicesCard 
                    title='Standard Service'
                    imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                    imageAlt='ladies bike with basket'
                    // backgroundColor='#514663'
                    // fontColor='#FFFFFF'
                    price='£50'
                    summary='Gets your bike safely back on the road'
                    detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                />
                <ServicesCard 
                    title='Full Service'
                    imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                    imageAlt='ladies bike with basket'
                    // backgroundColor='#CF5C36'
                    price='£130'
                    summary='Get your bike in tip top condition'
                    detail={['fix one', 'fix two', 'fix 3', 'fix 4']}

                />
                </div>
                <button className='services-button-other' onClick={handleOther}>{!otherServices ? 'Other Services' : 'Hide Other Services'}</button>
                {otherServices && (<div><div className='services-cards-other services-cards'>
                    <ServicesCard 
                        title='Brake Blead'
                        imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                        imageAlt='ladies bike with basket'
                        // backgroundColor='#CF5C36'
                        price='£30'
                        summary='Blead brakes and refill brake fluid'
                        detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                    />
                     <ServicesCard 
                        title='New Bike Build'
                        imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                        imageAlt='ladies bike with basket'
                        // backgroundColor='#CF5C36'
                        price='£50'
                        summary='I will assemble your new bike straight from the box'
                        detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                    />
                    <ServicesCard 
                        title='Suspension'
                        imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                        imageAlt='ladies bike with basket'
                        // backgroundColor='#CF5C36'
                        price='£ variable'
                        summary='I will send off your bike to specialist suspension fixers whilst i continue to work on your bike'
                        detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                    />
                    </div>
                    <div className='services-cards-other services-cards'>
                    <ServicesCard 
                        title='Advice & Tuition'
                        imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                        imageAlt='ladies bike with basket'
                        // backgroundColor='#CF5C36'
                        price='£ call me to find out'
                        summary='Give me a call and we can discuss your specific requirements'
                        detail={['fix one', 'fix two', 'fix 3', 'fix 4']}
                    />
                   </div> 
                   </div>)}
            </div>
        
    )
}

export default Services
