import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
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
    const [age, setAge] = React.useState('');
    const navigate = useNavigate()
    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                                        <label style={{marginBottom: "10px", display: "inline-block"}} htmlFor="">Education Details</label>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class X</label>
                                            </div>
                                            <div className="class-box">
                                                <FormControl   fullWidth>
                                                    <InputLabel id="10th-board">Board</InputLabel>
                                                    <Select
                                                        labelId="education-board"
                                                        id="demo-simple-select-helper"
                                                        value={age}
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
                                                <TextField required id="outlined-required" label="Percentage" name='percentage' fullWidth  />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='year-of-passing' fullWidth  />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class XII</label>
                                            </div>
                                            <div className="class-box">
                                                 <FormControl   fullWidth>
                                                    <InputLabel id="12th-board">Board</InputLabel>
                                                    <Select
                                                        labelId="education-board"
                                                        id="demo-simple-select-helper"
                                                        value={age}
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
                                                <TextField required id="outlined-required" label="Percentage" name='percentage' fullWidth  />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='year-of-passing' fullWidth  />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Graduation</label>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="University" name='board' fullWidth  />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='percentage' fullWidth  />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='year-of-passing' fullWidth  />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Masters</label>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="University" name='university' fullWidth  />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Percentage" name='percentage' fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='year-of-passing' fullWidth />
                                            </div>
                                        </div>
                                    </div>
                                    <TextField required id="outlined-required" label="Last Internship Details " name='last-internship-details' fullWidth sx={{ marginBottom: "25px" }} />
                                    <FormControl className="checkbox-row"  sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Have you Participated in Moot Court:</FormLabel>
                                        <FormControlLabel control={<Checkbox  />} label="Yes" />
                                        <FormControlLabel control={<Checkbox  />} label="No" /> 
                                    </FormControl>
                                    <FormControl className="checkbox-row"  sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Preferred Location:</FormLabel>
                                        <FormControlLabel control={<Checkbox  />} label="Delhi" />
                                        <FormControlLabel control={<Checkbox  />} label="Gurugram" /> 
                                    </FormControl>
                                    <FormControl className="checkbox-row"  sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                        <FormLabel sx={{paddingBottom: "10px"}} component="legend">Upload Resume:</FormLabel>
                                        <TextField required id="outlined-required" type='file' name='10th-education' fullWidth sx={{ marginBottom: "25px" }} /> 
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