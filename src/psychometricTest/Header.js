import React from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './ptest.css'

const Header = () => {
  return (
    <div className="header">
        <div className="bound">
            <div className="topsec">
                <div className="logo"><Link className="nav-Link" to="/"><img src={logo} alt="Logo" /></Link></div>
                <div className="menu">
                    <Link to="https://www.arenesslaw.com/career/" className='toggle-menu'>Search More Jobs</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header