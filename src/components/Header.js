import React from 'react'
import './Header.css';
import logo from '../image/logo192.png';

export default function Header() {
  return (
    <div className='App-header'>
        <span className='text'>
            <img src={logo} alt = 'netflix' width="300" height="40"></img>
        </span>
        <span className='tv-shows'> 
            <p>
                UNLIMITED TV SHOWS & MOVIES
            </p>
        </span>
        <button className='join'>Join now</button>
        <button className='sign-in'>Sign-out</button>
    </div>
  )
}
