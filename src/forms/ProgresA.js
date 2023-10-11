import React, { useEffect } from 'react'
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
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ParticleEffect from '../components/ParticleEffect';



const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];



const ProgresA = () => {
    const [age, setAge] = React.useState('');
    const navigate = useNavigate()

    const handleChange = (event) => {
        setAge(event.target.value);
    };
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
                <ParticleEffect/>
                <div className="bound">
                    <div className="form-box">
                        <Link className="back-link" to="/">Back to Job Posting</Link>
                        <h3>Assessment Intern</h3>
                        <Box className="prog-bar" sx={{ width: '100%' }}>
                            <Stepper alternativeLabel>
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
                                    <TextField required id="outlined-required" label="Name" name='name' fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="Email" name='email' fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="Phone" name='phone' fullWidth sx={{ marginBottom: "25px" }} />
                                    <FormControl  sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="university">University</InputLabel>
                                        <Select
                                            labelId="university"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="University"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>College Name</em>
                                            </MenuItem>
                                            <MenuItem value={2022}>University 1</MenuItem>
                                            <MenuItem value={2021}>University 2</MenuItem>
                                            <MenuItem value={2020}>University 3</MenuItem>
                                            <MenuItem value={2019}>University 4</MenuItem>
                                            <MenuItem value={2018}>University 5</MenuItem>
                                            <MenuItem value={2017}>University 6</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl  sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="year-of-passing">College</InputLabel>
                                        <Select
                                            labelId="college"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="College"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>College Name</em>
                                            </MenuItem>
                                            <MenuItem value={2022}>College 1</MenuItem>
                                            <MenuItem value={2021}>College 2</MenuItem>
                                            <MenuItem value={2020}>College 3</MenuItem>
                                            <MenuItem value={2019}>College 4</MenuItem>
                                            <MenuItem value={2018}>College 5</MenuItem>
                                            <MenuItem value={2017}>College 6</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className="checkbox-row"  sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Course Duration:</FormLabel>
                                        <FormControlLabel control={<Checkbox  />} label="3 Years" />
                                        <FormControlLabel control={<Checkbox  />} label="5 Years" />

                                    </FormControl>
                                    
                                    <FormControl  sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="course">Course</InputLabel>
                                        <Select
                                            labelId="course"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="Course"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"BBA LLB"}>BBA LLB</MenuItem>
                                            <MenuItem value={"B.com LLB"}>B.com LLB</MenuItem>
                                            <MenuItem value={"BA LLB"}>BA LLB</MenuItem>
                                            <MenuItem value={"BCA LLB"}>BCA LLB</MenuItem>
                                            <MenuItem value={"B.Tech LLB"}>B.Tech LLB</MenuItem>
                                            <MenuItem value={"B.Sc LLB"}>B.Sc LLB</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl  sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="field-of-interest">Field of Interest</InputLabel>
                                        <Select
                                            labelId="field-of-interest"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="Field of Interest"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Insolvency and Bankruptcy Code"}>Insolvency and Bankruptcy Code</MenuItem>
                                            <MenuItem value={"Corporate Restructuring"}>Corporate Restructuring</MenuItem>
                                            <MenuItem value={"Banking"}>Banking</MenuItem>
                                            <MenuItem value={"Finance"}>Finance</MenuItem>
                                            <MenuItem value={"Intellectual Property Rights"}>Intellectual Property Rights</MenuItem>
                                            <MenuItem value={"Data Privacy"}>Data Privacy</MenuItem>
                                            <MenuItem value={"Litigation"}>Litigation</MenuItem>
                                            <MenuItem value={"Sports Law"}>Sports Law</MenuItem>
                                            <MenuItem value={"Arbitration"}>Arbitration</MenuItem>
                                            <MenuItem value={"Aviation"}>Aviation</MenuItem>
                                            <MenuItem value={"Employment and Labour Laws"}>Employment and Labour Laws</MenuItem>
                                            <MenuItem value={"Mergers and Acquisition"}>Mergers and Acquisition</MenuItem>
                                            <MenuItem value={"Public Policy"}>Public Policy</MenuItem>
                                            <MenuItem value={"White Collar Crimes"}>White Collar Crimes</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl  sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="skills">Skills</InputLabel>
                                        <Select
                                            labelId="skills"
                                            id="demo-simple-select-helper"
                                            value={age}
                                            label="Skills"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Negotiation"}>Negotiation</MenuItem>
                                            <MenuItem value={"Drafting"}>Drafting</MenuItem>
                                            <MenuItem value={"Communication"}>Communication</MenuItem>
                                            <MenuItem value={"Excel"}>Excel</MenuItem>
                                            <MenuItem value={"Data Analytics"}>Data Analytics</MenuItem>
                                            <MenuItem value={"Business Development"}>Business Development</MenuItem>
                                            <MenuItem value={"Client Management"}>Client Management</MenuItem>
                                            <MenuItem value={"Knowledge Management"}>Knowledge Management</MenuItem>
                                            <MenuItem value={"Account Management"}>Account Management</MenuItem>
                                            <MenuItem value={"Legal Research"}>Legal Research</MenuItem>
                                            <MenuItem value={"Public Policy"}>Public Policy</MenuItem>
                                            <MenuItem value={"Digital Governance"}>Digital Governance</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField required id="outlined-required" label="Publications, if any " name='publications-if-any ' fullWidth sx={{ marginBottom: "25px" }} />
                                </Grid>

                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link' to="/">Back</Link>
                            <Button className="blue-btn" onClick={onSubmit}>Next</Button>

                        </Box>

                    </div>
                </div>
            </div>
            
        </>

    )
}

export default ProgresA