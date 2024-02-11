import React, { useState } from 'react'
import '../styles/navbar.css'
import sw_logo from '../assets/sw_logo.svg'
import FloatBar from './FloatBar'

export const Navbar = ({ navData }) => {
    const entries = Object.entries(navData);

    const [isHovered, setIsHovered] = useState(null);

    const isHover = (item) => {
        setIsHovered(item);
    };

    const isLeave = () => {
        setIsHovered(null);
    };

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
                    <li className='navButton'
                        onMouseEnter={() => isHover(key)}
                        onMouseLeave={isLeave}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </li>
                )}
            </ul>
                <FloatBar hover = {isHovered}/>
        </div>
    )
}
