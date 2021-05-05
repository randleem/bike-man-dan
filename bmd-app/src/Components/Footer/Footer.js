import React from 'react';
import './Footer.css';
import logo from './Bike_Man_Dan_Name_Footer.png';

function Footer() {

    // Eventually a Business address
    // Should I add my business address
    // BMD Logo in bottom left corner
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <a href="http://bikemandan.co.uk/">
                    <img src={logo} alt='bike man dan logo' className='footer-logo'/>
                </a>
            </div>
            <div className='footer-wrapper'>
            <div>
                <p>Contact Us</p>
                </div>
            <div className='footer-number-container'>
                <a href="tel:07817925929" className='footer-number footer-link-item'><i className="fas fa-phone-alt"></i> 07817 925 929</a>
            </div>
            <div className='footer-email-container'>
                <a href="mailto:dan@bikemandan.co.uk" className='footer-email footer-link-item'> <i className="fas fa-envelope"></i> dan@bikemandan.co.uk</a>  
            </div>
            <div className='footer-facebook-container'>
                <a href="https://www.facebook.com/bmdbrum/" className='footer-facebook footer-link-item'><i className='fab fa-facebook-f'></i> Facebook</a>
            </div>    
            </div>   
            <div className='dummy-div'>

            </div>
        </div>
    )
}

export default Footer
