import React, {useState, useEffect} from 'react'
import './Navbar.css'

function navbar() {

  return (
    <nav>
        <ul className='liste'>
            <li className='item'>Accueil</li>
            <li className='item'>Service</li>
            <li className='item'>Contact</li>
        </ul>
    </nav>
  )
}

export default navbar