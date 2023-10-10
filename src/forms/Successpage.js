import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Footer from '../components/Footer';

const steps = [
  'Step 1',
  'Step 2',
  'Step 3',
];

const Successpage = () => {
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
                <div className="bound">
                    <div className="form-box">
                        
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper activeStep={3} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <h3 style={{textAlign:'center', color:'green'}}>Assessment Intern Application Applied Successfully</h3>
                        <Link style={{textAlign:'center', display:'inherit'}} className="back-link" to="/">Back to Job Posting</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  )
}

export default Successpage