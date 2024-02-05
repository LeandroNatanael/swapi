import React from 'react'
import '../styles/navbar.css'
import sw_logo from '../assets/sw_logo.svg'

export const Navbar = ({ navData }) => {

    console.log(navData);
    const entries = Object.entries(navData);


    return (
        <div className='navbarStyle'>
            <div className='logo'>
                <img
                    src={sw_logo}
                    alt='logo star wars'
                />
            </div>
            <ul>
                {entries.map(([key]) =>
                    <li className='navButton'>
                        {key.charAt(0).toUpperCase()+ key.slice(1)}
                    </li>
                )}

            </ul>
        </div>
    )
}
