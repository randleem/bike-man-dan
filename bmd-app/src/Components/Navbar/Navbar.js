import React, { useState, useEffect } from 'react';

import './Navbar.css';

let potenchColor = ['#1f1f1f', '#134328','#0D2615', '#1F6F42', '#B7245C', '#EF476F', '#DAB001', '#CF5C36', '#EFF2F1', '#2C8C99', '#7C7C7C', '#F7F7F7', '#574B60', '#514663']

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [seeNav, setSeeNav] = useState(true);
  const [seeMenu, setSeeMenu] = useState(false);

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

  // Function to display Burger Menu
  function handleClick(){
    console.log("handleclick")
    setSeeMenu(true);
  }

  function handleClose(){
    setSeeMenu(false);
  }

  useEffect(() => {
    if (seeMenu){

    }
  })

  // Hides NavBar on Scroll
  useEffect(() => {
    const handleScroll = () => {  
      const currentScrollPos = window.pageYOffset;
      setSeeNav((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 90) || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
      setSeeMenu(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, seeNav]);

  return (
  <div>
    <nav className='navbar' style={{ ...navbarStyles, top: seeNav ? '0' : '-90px' }}>
      <a href="http://bikemandan.co.uk/">
        <div className='nav-title'>
            <h1 > BIKE MAN DAN <i className="fas fa-home"></i> </h1>
        </div>
      </a>
      <a href="tel:07817925929" className='nav-number'><i className="fas fa-phone-alt"></i> 07817925929</a>
      {!seeMenu && <button onClick={handleClick} className='nav-burger-menu-btn'><i className="fas fa-bars"></i></button>}
      {seeMenu && seeNav && <div className='nav-burger-menu'>
      <a href='#about' onClick={handleClose}>
          <div className='nav-logo'>
              <h1 > About </h1>
          </div>
        </a>
        <a href='#areas' onClick={handleClose}>
          <div className='nav-logo'>
              <h1 > Areas </h1>
          </div>
        </a>
        <a href='#services' onClick={handleClose}>
          <div className='nav-logo'>
              <h1 > Services </h1>
          </div>
        </a>
        <a href='#prices' onClick={handleClose}>
          <div className='nav-logo'>
              <h1 > Individual Jobs </h1>
          </div>
        </a>
        <a href='#booking-form' onClick={handleClose}>
          <div className='nav-logo'>
              <h1 > Booking Form </h1>
          </div>
        </a>
        </div>}
      
    </nav>
  </div>
  );
}

{/* <i className="fas fa-wrench"></i>
<i className="fas fa-cog"></i> 
<i className="fas fa-bicycle"></i>  */}