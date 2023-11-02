import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormLabel } from '@mui/material';
import { useNavigate } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import videobg from '../images/background-video.mp4';

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];


const ProgresB = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem("id");

    const onSubmit=async()=>{
        try {
            localStorage.setItem("yashodanandC", "yashodanandC")
              navigate(`/progresc/${id}`);
        } catch (error) {
            console.error(error)
        }
    }
 
    useEffect(() => {
        if (!localStorage.getItem('yashodanandB')) {
            navigate(`/progresa`)
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
                        <Link className="back-link" to="/">Back to Job Posting</Link>
                        <h3>Assessment Intern</h3>
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper activeStep={1} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <Box className='top-form' component="form" >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link' to="/progresa">Back</Link>
                            <Button className="blue-btn" onClick={onSubmit}>Next</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgresB