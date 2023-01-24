import React, {useState, useEffect} from 'react'
import './Navbar.css'

 function navbar() {
  const[toggleMenu, EtToggleMenu]= useState(false);

  const toggleNavSmallScreen = ()=>{
    setToggleMenu(!ToggleMenu);
  }
  return (
    <nav>

      {toggleMenu&&(
        <ul className='liste'>
            <li className='item'>Accueil</li>
            <li className='item'>Service</li>
            <li className='item'>Contact</li>
        </ul>)}
        <button oneclick ={toggleNavSmallScreen} className='btn'>BTN</button>
    </nav>
  )
}

export default navbar