import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
function Header() {
  return (
    <header className='Header'>
        <nav>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
        </nav>
    </header>
  )
}


export default Header