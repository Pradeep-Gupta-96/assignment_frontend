import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Footer from '../components/Footer';
import videobg from '../images/background-video.mp4';

const steps = [
    'Preliminary Details',
    'Aptitude',
    'Ethical',
    'Technical '
];

const Successpage = () => {

    const saveCurrentTime = () => {
        // Save the current time in local storage
        const currentTime = new Date().getTime();
        localStorage.setItem('currentStartTime', currentTime.toString());
      };

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
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper activeStep={4} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <h3 style={{textAlign:'center', color:'green'}}>Application Applied Successfully</h3>
                        <Link
                            style={{ textAlign: 'center', display: 'inherit' }}
                            className="back-link"
                            onClick={saveCurrentTime}
                            to="/" >Back to Job Posting</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Successpage