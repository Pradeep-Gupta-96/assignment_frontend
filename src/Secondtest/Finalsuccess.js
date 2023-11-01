import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Footer from '../components/Footer';
import videobg from '../images/background-video.mp4';

const Finalsuccess = () => {
  return (
    <>
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
      <div className="form-sce sucess">
        <video className='background-video' autoPlay loop muted > <source src={videobg} type="video/mp4" /> </video>
        <div className="bound">
          <div className="form-box">
            <h3 style={{ textAlign: 'center', color: 'green' }}>Application Applied Successfully</h3>
            <Link style={{ textAlign: 'center', display: 'inherit' }} className="back-link" to="https://www.arenesslaw.com/">Visit our Website</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Finalsuccess