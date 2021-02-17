import React from 'react';
import './Services.css';
import ServicesCard from "../ServicesCard/ServicesCard";

function Services() {
    return (
        <div className='services-container'>
            <div className='services-introduction'>
                <h1>Bike Servicing</h1>
                <h3>To keep your bike in tip top condition, it's a good idea to have it serviced regularly - as often as every 4 months depending on how much you use it and where you store it. If you've ridden many miles between services be prepared for some parts to need replacing.</h3>
                <h3>A Standard service will get your bike running as safely and smoothly as is possible without “major surgery”. (Please note parts are not included in the price).</h3>
            </div>
            <div className='services-cards'>
                <ServicesCard 
                    title='Standard'
                    imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                    imageAlt='ladies bike with basket'
                    backgroundColor='#514663'
                    fontColor='#FFFFFF'
                    body='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                />
                <ServicesCard 
                    title='Standard'
                    imageURL='https://3378359.app.netsuite.com/core/media/media.nl?id=2400149&c=3378359&h=64a9c23e2b062ee46721'
                    imageAlt='ladies bike with basket'
                    backgroundColor='#CF5C36'
                    body='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
                />
            </div>
        </div>
    )
}

export default Services
