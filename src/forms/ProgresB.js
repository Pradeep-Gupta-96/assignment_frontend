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

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];



const ProgresB = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        educationBoard: "",
        Class10Education: "",
        Class12Education: "",
        CollegePercentage: "",
        LastInternshipDetails: "",
        HaveYouParticipatedinMootCourt: "",
        PreferredLocation: "",
    });
    const [avatar, setAvatar] = useState(null);
    const { id } = useParams()
    console.log('params ID:', id)

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
            const API = `http://localhost:4000/api/updateTodo/${id}`; // Include the ID in the API URL

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
                const id = data.todo.id;
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
            navigate('/progresa/:id')
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
                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="education-board">Education Board</InputLabel>
                                        <Select
                                            labelId="education-board"
                                            id="demo-simple-select-helper"
                                            name='educationBoard'
                                            value={formData.educationBoard}
                                            label="Education Board"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>College Name</em>
                                            </MenuItem>
                                            <MenuItem value={"IB"}>IB</MenuItem>
                                            <MenuItem value={"CBSC"}>CBSE</MenuItem>
                                            <MenuItem value={"ICSC"}>ICSE</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField required id="outlined-required" label="10th Class Education" name='Class10Education' value={formData.Class10Education} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="12th Class Education" name='Class12Education' value={formData.Class12Education} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="College Percentage" name='CollegePercentage' value={formData.CollegePercentage} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
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