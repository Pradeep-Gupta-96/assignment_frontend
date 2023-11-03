import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormLabel } from '@mui/material';
import { useNavigate } from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import videobg from '../images/background-video.mp4'
import Practices from '../Secondtest/Practices';

const steps = [
    'Preliminary Details',
    'Aptitude',
    'Ethical',
    'Technical '
];

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: 4px;
    color: #000;
    background: #fff;
    border: 1px solid rgb(118, 118, 118);
    &:hover {border-color: #3399FF;}
    &:focus {border-color: #3399FF;}

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const ProgresD = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem('id');
    useEffect(() => {
        if (!localStorage.getItem('yashodanandD')) {
            navigate(`/progresc/${id}`)
        }
    }, [])

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
            <div className="form-sce">
                <video className='background-video' autoPlay loop muted > <source src={videobg} type="video/mp4" /> </video>
                <div className="bound">
                    <div className="form-box">
                        {/* <TimmerCompo targetTime={timerTargetTime} onTimeout={() => navigate(`/progresc/${id}`)} /> */}
                        <Link className="back-link" to="/">Back to Job Posting</Link>
                        <h3>Assessment Intern</h3>
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper activeStep={3} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                            <Practices />
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProgresD