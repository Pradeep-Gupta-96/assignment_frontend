import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormLabel } from '@mui/material';
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];



const ProgresC = () => {
    const navigate = useNavigate()
    const onSubmit = async () => {
        try {
            localStorage.clear()
            navigate("/successpage")
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (!localStorage.getItem('yashodanandC')) {
            navigate('/progresb')
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
                        <Link className="back-link" to="/">Back to Job Posting</Link>
                        <h3>Assessment Intern</h3>
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper activeStep={2} alternativeLabel>
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
                                    <FormControl className="question-row"  sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Why Areness? Where do you envision your legal career in 5 years, and what steps do you plan to take to achieve your professional goals during that time?</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='12th-education' fullWidth  />
                                    </FormControl>
                                    <FormControl className="question-row"  sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">What strategies and adaptations should legal practitioners consider in order to thrive and remain competitive in the face of significant transformations within the legal profession?</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='12th-education' fullWidth  />
                                    </FormControl>
                                    <FormControl className="question-row"  sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Imagine you are representing a client who has entered into a complex international business contract. The other party has failed to fulfill a significant contractual obligation, and your client is seeking to enforce the contract or seek damages. Help me through the steps you would take to assess the situation, advise your client, and develop a legal strategy to achieve a favorable outcome.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='12th-education' fullWidth  />
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link' to="/progresb">Back</Link>
                            <Button className="blue-btn" onClick={onSubmit}>Submit</Button>

                        </Box>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgresC