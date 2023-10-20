import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
import TimmerCompo from './TimmerCompo';

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];



const ProgresB = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Class10Education: "",
        Class10_percentage: "",
        Class10_year_of_passing: "",
        Class12Education: "",
        Class12_percentage: "",
        Class12_year_of_passing: "",
        graduation_university: "",
        graduation_percentage: "",
        graduation_year_of_passing: "",
        masters_university: "",
        masters_percentage: "",
        masters_year_of_passing: "",
        LastInternshipDetails: "",
        HaveYouParticipatedinMootCourt: "",
        PreferredLocation: "",
    });
    const [avatar, setAvatar] = useState(null);
    const id = localStorage.getItem('id');
    const [timerTargetTime, setTimerTargetTime] = useState(0); // Initialize target time to 0

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    };



    const onSubmit = async () => {
        try {
            const API = `http://localhost:4000/api/updateTodo2/${id}`; // Include the ID in the API URL

            const formDataObject = new FormData();
            for (const key in formData) {
                formDataObject.append(key, formData[key]);
            }

            if (avatar) {
                formDataObject.append('UploadResume', avatar); // Append the avatar file
            }

            // Make the HTTP PUT request
            const response = await fetch(API, {
                method: 'PUT',
                body: formDataObject, // Send the FormData object
            });

            if (response.ok) {
                // Handle successful response
                const data = await response.json();
                localStorage.setItem("yashodanandC", "yashodanandC")
                navigate(`/progresc/${id}`);
            } else {
                // Handle error response
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Update error:', error);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('yashodanandB')) {
            navigate(`/progresa`)
        }
    }, [])

    // this funtion is for checking timming 
    const API1 = `http://3.111.214.106:4000/api/todo/${id}`;
    const fetchData1 = React.useCallback(async () => {
        try {
            const response = await fetch(API1);
            const data = await response.json();
            const timestamp = new Date(data.todo.created_at).getTime(); // Assuming 'created_at' is the timestamp field

            const now = new Date().getTime();
            const fortyFiveMinutes = 1 * 60 * 1000; // 45 minutes in milliseconds
            setTimerTargetTime(timestamp + fortyFiveMinutes);

            if (now - timestamp >= fortyFiveMinutes) {
                // Time is up, navigate to the '/progresc/{id}' route
                onSubmit()
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
                                    <div className="eduction">
                                        <label style={{ marginBottom: "10px", display: "inline-block" }} htmlFor="">Education Details</label>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class X</label>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="10th-board">Board</InputLabel>
                                                    <Select
                                                        labelId="10th_board"
                                                        id="demo-simple-select-helper"
                                                        name='Class10Education'
                                                        value={formData.Class10Education}
                                                        label="Education Board"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"IB"}>IB</MenuItem>
                                                        <MenuItem value={"CBSC"}>CBSE</MenuItem>
                                                        <MenuItem value={"ICSC"}>ICSE</MenuItem>
                                                    </Select>
                                                </FormControl>

                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='Class10_percentage' value={formData.Class10_percentage} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='Class10_year_of_passing' value={formData.Class10_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class XII</label>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="12th-board">Board</InputLabel>
                                                    <Select
                                                        labelId="12th_board"
                                                        id="demo-simple-select-helper"
                                                        label="Education Board"
                                                        name='Class12Education'
                                                        value={formData.Class12Education}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"IB"}>IB</MenuItem>
                                                        <MenuItem value={"CBSC"}>CBSE</MenuItem>
                                                        <MenuItem value={"ICSC"}>ICSE</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='Class12_percentage' value={formData.Class12_percentage} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='Class12_year_of_passing' value={formData.Class12_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Graduation</label>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="University" name='graduation_university' value={formData.graduation_university} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='graduation_percentage' value={formData.graduation_percentage} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='graduation_year_of_passing' value={formData.graduation_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Masters</label>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="University" name='masters_university' value={formData.masters_university} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='masters_percentage' value={formData.masters_percentage} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='masters_year_of_passing' value={formData.masters_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                    </div>
                                    <TextField required id="outlined-required" label="Last Internship Details " name='LastInternshipDetails' value={formData.LastInternshipDetails} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Have you Participated in Moot Court:</FormLabel>
                                        <FormControlLabel name='HaveYouParticipatedinMootCourt' value={"Yes"} checked={formData.HaveYouParticipatedinMootCourt === 'Yes'} onChange={handleChange} control={<Checkbox />} label="Yes" />
                                        <FormControlLabel name='HaveYouParticipatedinMootCourt' value={"No"} checked={formData.HaveYouParticipatedinMootCourt === 'No'} onChange={handleChange} control={<Checkbox />} label="No" />
                                    </FormControl>
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Preferred Location:</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"Delhi"} checked={formData.PreferredLocation === 'Delhi'} onChange={handleChange} control={<Checkbox />} label="Delhi" />
                                        <FormControlLabel name='PreferredLocation' value={"Gurugram"} checked={formData.PreferredLocation === 'Gurugram'} onChange={handleChange} control={<Checkbox />} label="Gurugram" />
                                    </FormControl>
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                        <FormLabel sx={{ paddingBottom: "10px" }} component="legend">Upload Resume:</FormLabel>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            type='file'
                                            fullWidth
                                            sx={{ marginBottom: "25px" }}
                                            onChange={handleAvatarChange}
                                            accept="application/pdf" // Change to allow PDF files
                                        />
                                    </FormControl>
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