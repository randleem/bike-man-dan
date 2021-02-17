import React, { useState, useEffect } from 'react';

import './Navbar.css';

let potenchColor = ['#1f1f1f', '#134328','#0D2615', '#1F6F42', '#B7245C', '#EF476F', '#DAB001', '#CF5C36', '#EFF2F1', '#2C8C99', '#7C7C7C', '#F7F7F7', '#574B60', '#514663']

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [seeNav, setSeeNav] = useState(true);  

  const navbarStyles = {
  backgroundColor: `${potenchColor[3]}`,
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.2rem',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '999',
  transition: 'top 0.3s',
  boxShadow: "0px 0px 20px -5px",
  }

  useEffect(() => {
    const handleScroll = () => {  
      const currentScrollPos = window.pageYOffset;
      setSeeNav((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 90) || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, seeNav]);

  return (
  <div>
    <nav className='navbar' style={{ ...navbarStyles, top: seeNav ? '0' : '-90px' }}>
      <a href="#home">
        <div className='nav-logo'>
            <h1 > BIKE MAN DAN <i className="fas fa-home"></i> </h1>
        </div>
      </a>
      <div className='nav-pages'>
        <a href='#services'>
          <div className='nav-logo'>
              <h1 > Services <i className="fas fa-wrench"></i> </h1>
          </div>
        </a>
        <a href='#prices'>
          <div className='nav-logo'>
              <h1 > Individual Jobs <i className="fas fa-cog"></i> </h1>
          </div>
        </a>
        <a href='#booking-form'>
          <div className='nav-logo'>
              <h1 > Booking Form <i className="fas fa-bicycle"></i> </h1>
          </div>
        </a>
        </div>
      <a href="tel:07817925929" className='nav-number'><i className="fas fa-phone-alt"></i> 07817925929</a>
    </nav>
  </div>
  );
}
