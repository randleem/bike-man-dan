import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-number-container'>
                <a href="tel:07817925929" className='footer-number'><i className="fas fa-phone-alt"></i> 07817925929</a>
            </div>
            <div className='footer-email-container'>
                <a href="mailto:dan@bikemandan.co.uk" className='footer-email'> <i className="fas fa-envelope"></i> dan@bikemandan.co.uk</a>  
            </div>
            <div className='footer-facebook-container'>
                <a href="https://www.facebook.com/bmdbrum/" className='footer-facebook'><i className='fab fa-facebook-f'></i> Facebook</a>
            </div>       
        </div>
    )
}

export default Footer
