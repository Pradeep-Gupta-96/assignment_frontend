import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
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
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Button onClick={onSubmit}>Next</Button>
        </Box>
    )
}

export default ProgresB