import React from 'react';
import './Footer.css';

function Footer() {

    // Eventually a Business address
    // Should I add my business address
    // BMD Logo in bottom left corner
    return (
        <div className='footer-container'>
            <div className='footer-wrapper'>
            <p>Contact Us</p>
            <div className='footer-number-container'>
                <a href="tel:07817925929" className='footer-number footer-link-item'><i className="fas fa-phone-alt"></i> 07817925929</a>
            </div>
            <div className='footer-email-container'>
                <a href="mailto:dan@bikemandan.co.uk" className='footer-email footer-link-item'> <i className="fas fa-envelope"></i> dan@bikemandan.co.uk</a>  
            </div>
            <div className='footer-facebook-container'>
                <a href="https://www.facebook.com/bmdbrum/" className='footer-facebook footer-link-item'><i className='fab fa-facebook-f'></i> Facebook</a>
            </div>    
            </div>   
        </div>
    )
}

export default Footer
