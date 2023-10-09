import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom"

const steps = [
    'Select master blaster campaign settings ProgresA',
    'Create an ad group',
    'Create an ad',
];



const ProgresA = () => {
    const navigate = useNavigate()
    const onSubmit = async () => {
        try {
            localStorage.setItem("yashodanandB", "yashodanandB")
            navigate('/progresb')
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        if (!localStorage.getItem('yashodanandA')) {
            navigate('/')
        }
    }, [])
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel>
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

export default ProgresA