import React, { useEffect, useState } from 'react'
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
import TimmerCompo from './TimmerCompo';
import videobg from '../images/background-video.mp4';

const steps = [
    'Preliminary Details',
    'Experience',
    'Step 3',
];

const ProgresA = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        university: '',
        college: '',
        course_duration: '',
        course: '',
        field_of_interest: '',
        skills: '',
        publications: '',
        publicationslink: ''
    });
    const [timerTargetTime, setTimerTargetTime] = useState(0); // Initialize target time to 0


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const id = localStorage.getItem("id");
    const onSubmit = async (event) => {
        try {
            if (event) {
                event.preventDefault();
            }
            // Check if 'id' is stored in local storage

            const API = `http://localhost:4000/api/updateTodo1/${id}`; // Update the API endpoint

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
                const data = await response.json();


                localStorage.setItem("yashodanandB", "yashodanandB")
                // Redirect to another page or perform other actions
                navigate(`/progresb/${id}`);
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
        if (!localStorage.getItem('yashodanandA')) {
            navigate('/')
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
            const fortyFiveMinutes = 45 * 60 * 1000; // 45 minutes in milliseconds
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
                <video className='background-video' autoPlay loop muted > <source src={videobg} type="video/mp4" /> </video>
                <div className="bound">
                    <div className="form-box">
                        <TimmerCompo targetTime={timerTargetTime} onTimeout={() => navigate(`/progresc/${id}`)} />
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
                                    <TextField required id="outlined-required" label="Name" name='name' value={formData.name} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="Email" name='email' value={formData.email} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <TextField required id="outlined-required" label="Phone" name='phone' value={formData.phone} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="university">University</InputLabel>
                                        <Select
                                            labelId="university"
                                            id="demo-simple-select-helper"
                                            name="university"
                                            value={formData.university}
                                            label="University"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>College Name</em>
                                            </MenuItem>
                                            <MenuItem value={"NLSUI- Bangalore"}>NLSUI- Bangalore</MenuItem>
                                            <MenuItem value={"NALSAR-Hyderabad "}>NALSAR-Hyderabad </MenuItem>
                                            <MenuItem value={"NUJS- KOLKATA"}>NUJS- KOLKATA</MenuItem>
                                            <MenuItem value={"NLU-Jodhpur"}>NLU-Jodhpur</MenuItem>
                                            <MenuItem value={"NLU-Bhopal"}>NLU-Bhopal</MenuItem>
                                            <MenuItem value={"Chanakya Na- Patna"}>Chanakya Na- Patna</MenuItem>
                                            <MenuItem value={"Christ- Bangalore"}>Christ- Bangalore</MenuItem>
                                            <MenuItem value={"Faculty of Law, Delhi"}>Faculty of Law, Delhi</MenuItem>
                                            <MenuItem value={"NLU- DELHI"}>NLU- DELHI</MenuItem>
                                            <MenuItem value={"GLC-Bombay"}>GLC-Bombay</MenuItem>
                                            <MenuItem value={" Faculty of Law- Mumbai"}>Faculty of Law- Mumbai</MenuItem>
                                            <MenuItem value={"Symbiosis"}>Symbiosis</MenuItem>
                                            <MenuItem value={"ICFAI-Hyderabad"}>ICFAI-Hyderabad</MenuItem>
                                            <MenuItem value={"Symbiosis-Hyderabad"}>Symbiosis-Hyderabad</MenuItem>
                                            <MenuItem value={"Usmaniya- Hyderabad "}>Usmaniya- Hyderabad </MenuItem>
                                            <MenuItem value={"Global Jindal- Sonipat"}>Global Jindal- Sonipat</MenuItem>
                                            <MenuItem value={"Amity University- Noida"}>Amity University- Noida</MenuItem>
                                            <MenuItem value={"Gandhi National Law University"}>Gandhi National Law University</MenuItem>
                                            <MenuItem value={"KIIT"}>KIIT</MenuItem>
                                            <MenuItem value={"NLU-Punjab"}>NLU-Punjab</MenuItem>
                                            <MenuItem value={"Nirma University"}>Nirma University</MenuItem>
                                            <MenuItem value={"Bennette university"}>Bennette university</MenuItem>
                                            <MenuItem value={"IIT-Kharagpur"}>IIT-Kharagpur</MenuItem>
                                            <MenuItem value={"Rajiv Gandhi School of intellectual and property law"}>Rajiv Gandhi School of intellectual and property law</MenuItem>
                                            <MenuItem value={"Faculty of Jamia Law University"}>Faculty of Jamia Law University</MenuItem>
                                            <MenuItem value={"ILI-New Delhi"}>ILI-New Delhi</MenuItem>
                                            <MenuItem value={"Army Institute of law-Mohali"}>Army Institute of law-Mohali</MenuItem>
                                            <MenuItem value={"Government law college-thiruvanthapura"}>Government law college-thiruvanthapura</MenuItem>
                                            <MenuItem value={"MNLU-Nagpur"}>MNLU-Nagpur</MenuItem>
                                            <MenuItem value={"Bangalore Law College- Bang"}>Bangalore Law College- Bang</MenuItem>
                                            <MenuItem value={"KC Law College- Mumbai"}>KC Law College- Mumbai</MenuItem>
                                            <MenuItem value={"Faculty of law- Varanasi"}>Faculty of law- Varanasi</MenuItem>
                                            <MenuItem value={"G J Advani law college"}>G J Advani law college</MenuItem>
                                            <MenuItem value={"GGSIP University"}>GGSIP University</MenuItem>
                                            <MenuItem value={"KC Law College- Mumbai"}>KC Law College- Mumbai</MenuItem>
                                            <MenuItem value={"other university"}>other university</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="year-of-passing">College</InputLabel>
                                        <Select
                                            labelId="college"
                                            id="demo-simple-select-helper"
                                            name="college"
                                            value={formData.college}
                                            label="College"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>College Name</em>
                                            </MenuItem>
                                            <MenuItem value={"NLSUI- Bangalore"}>NLSUI- Bangalore</MenuItem>
                                            <MenuItem value={"NALSAR-Hyderabad "}>NALSAR-Hyderabad </MenuItem>
                                            <MenuItem value={"NUJS- KOLKATA"}>NUJS- KOLKATA</MenuItem>
                                            <MenuItem value={"NLU-Jodhpur"}>NLU-Jodhpur</MenuItem>
                                            <MenuItem value={"NLU-Bhopal"}>NLU-Bhopal</MenuItem>
                                            <MenuItem value={"Chanakya Na- Patna"}>Chanakya Na- Patna</MenuItem>
                                            <MenuItem value={"Christ- Bangalore"}>Christ- Bangalore</MenuItem>
                                            <MenuItem value={"Faculty of Law, Delhi"}>Faculty of Law, Delhi</MenuItem>
                                            <MenuItem value={"NLU- DELHI"}>NLU- DELHI</MenuItem>
                                            <MenuItem value={"GLC-Bombay"}>GLC-Bombay</MenuItem>
                                            <MenuItem value={" Faculty of Law- Mumbai"}>Faculty of Law- Mumbai</MenuItem>
                                            <MenuItem value={"Symbiosis"}>Symbiosis</MenuItem>
                                            <MenuItem value={"ICFAI-Hyderabad"}>ICFAI-Hyderabad</MenuItem>
                                            <MenuItem value={"Symbiosis-Hyderabad"}>Symbiosis-Hyderabad</MenuItem>
                                            <MenuItem value={"Usmaniya- Hyderabad "}>Usmaniya- Hyderabad </MenuItem>
                                            <MenuItem value={"Global Jindal- Sonipat"}>Global Jindal- Sonipat</MenuItem>
                                            <MenuItem value={"Amity University- Noida"}>Amity University- Noida</MenuItem>
                                            <MenuItem value={"Gandhi National Law University"}>Gandhi National Law University</MenuItem>
                                            <MenuItem value={"KIIT"}>KIIT</MenuItem>
                                            <MenuItem value={"NLU-Punjab"}>NLU-Punjab</MenuItem>
                                            <MenuItem value={"Nirma University"}>Nirma University</MenuItem>
                                            <MenuItem value={"Bennette university"}>Bennette university</MenuItem>
                                            <MenuItem value={"IIT-Kharagpur"}>IIT-Kharagpur</MenuItem>
                                            <MenuItem value={"Rajiv Gandhi School of intellectual and property law"}>Rajiv Gandhi School of intellectual and property law</MenuItem>
                                            <MenuItem value={"Faculty of Jamia Law University"}>Faculty of Jamia Law University</MenuItem>
                                            <MenuItem value={"ILI-New Delhi"}>ILI-New Delhi</MenuItem>
                                            <MenuItem value={"Army Institute of law-Mohali"}>Army Institute of law-Mohali</MenuItem>
                                            <MenuItem value={"Government law college-thiruvanthapura"}>Government law college-thiruvanthapura</MenuItem>
                                            <MenuItem value={"MNLU-Nagpur"}>MNLU-Nagpur</MenuItem>
                                            <MenuItem value={"Bangalore Law College- Bang"}>Bangalore Law College- Bang</MenuItem>
                                            <MenuItem value={"KC Law College- Mumbai"}>KC Law College- Mumbai</MenuItem>
                                            <MenuItem value={"other colleges"}>other colleges</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Course Duration:</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="3 Years"
                                            name="course_duration"
                                            value="3 Years"
                                            checked={formData.course_duration === '3 Years'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="5 Years"
                                            name="course_duration"
                                            value="5 Years"
                                            checked={formData.course_duration === '5 Years'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="course">Course</InputLabel>
                                        <Select
                                            labelId="course"
                                            id="demo-simple-select-helper"
                                            name="course"
                                            value={formData.course}
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
                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="field-of-interest">Field of Interest</InputLabel>
                                        <Select
                                            labelId="field-of-interest"
                                            id="demo-simple-select-helper"
                                            name="field_of_interest"
                                            value={formData.field_of_interest}
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
                                    <FormControl sx={{ marginBottom: "25px" }} fullWidth>
                                        <InputLabel id="skills">Skills</InputLabel>
                                        <Select
                                            labelId="skills"
                                            id="demo-simple-select-helper"
                                            name='skills'
                                            value={formData.skills}
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
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Publications, if any:</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Yes"
                                            name="publications"
                                            value="Yes"
                                            checked={formData.publications === 'Yes'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="No"
                                            name="publications"
                                            value="No"
                                            checked={formData.publications === 'No'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <TextField required id="outlined-required" label="Publications Link" name='publicationslink' value={formData.publicationslink} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
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