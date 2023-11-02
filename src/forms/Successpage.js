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
    'Experience',
    'Step 3',
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
                            <Stepper activeStep={3} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <h3 style={{textAlign:'center', color:'green'}}>Application Applied Successfully</h3>
                        <p className='terms-cond'><strong>Please read the following terms and conditions:</strong><br />
                            1. The test time will be 45 minutes.<br />
                            2. Some questions will be objective and some subjective.<br />
                            3. It will be mandatory to solve all the questions.<br />
                            4. There are total 4 Parts comprising of Part A, Part B, Part C and Part D<br />
                            5. All questions are mandatory.<br />
                            6. There shall be no negative marking.</p>
                        <Link
                            style={{ textAlign: 'center', display: 'inherit' }}
                            className="back-link"
                            onClick={saveCurrentTime}
                            to="/practices"
                        >
                            Please Click Here for Second Round Assessment Test
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Successpage