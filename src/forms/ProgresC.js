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
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import TimmerCompo from './TimmerCompo';

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];



const ProgresC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        "Answer1": "",
        "Answer2": "",
        "Answer3": "",
    });
    const [timerTargetTime, setTimerTargetTime] = useState(0); // Initialize target time to 0

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const id = localStorage.getItem('id');

    const handleSubmit = async (event) => {
        try {
            if (event) {
                event.preventDefault();
            }
            const API = `http://3.111.214.106:4000/api/updateTodo3/${id}`; // Include the ID in the API URL


            // Make the HTTP POST request
            const response = await fetch(API, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Set the content type
                },
                body: JSON.stringify(formData), // Convert to JSON
            });

            if (response.ok) {
                // Handle successful response
                await response.json();
                localStorage.clear()
                // Redirect to another page or perform other actions
                navigate('/successpage');
            } else {
                // Handle error response
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Form submission error:', error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('yashodanandC')) {
            navigate(`/progresb/${id}`)
        }
    }, [])

    // this funtion is for checking timming 
    const API1 = `http://localhost:4000/api/todo/${id}`;
    const fetchData1 = React.useCallback(async () => {
        try {
            const response = await fetch(API1);
            const data = await response.json();
            const timestamp = new Date(data.todo.created_at).getTime(); // Assuming 'created_at' is the timestamp field

            const now = new Date().getTime();
            const fortyFiveMinutes = 1 * 60 * 1000; // 45 minutes in milliseconds
            setTimerTargetTime(timestamp + fortyFiveMinutes);

            if (now - timestamp >= fortyFiveMinutes) {
               
                handleSubmit()
            }
        } catch (error) {
            console.log(error);
        }
    }, [API1, id, navigate]);

    React.useEffect(() => {
        fetchData1();
        const interval = setInterval(fetchData1, 1000);

        return () => clearInterval(interval);
    }, [fetchData1]);


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
                    <TimmerCompo targetTime={timerTargetTime} onTimeout={() => navigate(`/progresc/${id}`)} />
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
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Why Areness? Where do you envision your legal career in 5 years, and what steps do you plan to take to achieve your professional goals during that time? <span style={{ fontSize: "12px" }}>(Max Word Limit 250)</span></FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' value={formData.Answer1} onChange={handleChange} fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">What strategies and adaptations should legal practitioners consider in order to thrive and remain competitive in the face of significant transformations within the legal profession?</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer2' value={formData.Answer2} onChange={handleChange} fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Imagine you are representing a client who has entered into a complex international business contract. The other party has failed to fulfill a significant contractual obligation, and your client is seeking to enforce the contract or seek damages. Help me through the steps you would take to assess the situation, advise your client, and develop a legal strategy to achieve a favorable outcome.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer3' value={formData.Answer3} onChange={handleChange} fullWidth />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link' to={`/progresb/${id}`}>Back</Link>
                            <Button className="blue-btn" onClick={handleSubmit}>Submit</Button>

                        </Box>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgresC