import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"

const steps = [
    'Select master blaster campaign settings ProgresB',
    'Create an ad group',
    'Create an ad',
];



const ProgresB = () => {
    const navigate = useNavigate()
    const onSubmit = async () => {
        try {
            localStorage.setItem("yashodanandC", "yashodanandC")
            navigate('/progresc')
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (!localStorage.getItem('yashodanandB')) {
            navigate('/progresa')
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
                <div className="bound">
                    <div className="form-box">
                        <Link className="back-link">Back to Job Posting</Link>
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
                                    Content Coming Soon!!
                                </Grid>

                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link'>Back</Link>
                            <Button className="blue-btn" onClick={onSubmit}>Next</Button>

                        </Box>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgresB