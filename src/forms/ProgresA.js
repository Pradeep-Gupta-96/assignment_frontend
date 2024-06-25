import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormLabel, ListItemText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import videobg from '../images/background-video.mp4';
import { Baseurl } from '../common/Url';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const skillsOptions = [
    "Negotiation",
    "Drafting",
    "Communication",
    "Excel",
    "Data Analytics",
    "Business Development",
    "Client Management",
    "Knowledge Management",
    "Account Management",
    "Legal Research",
    "Public Policy",
    "Digital Governance"
];

const steps = [
    'Preliminary Details',
    'Aptitude',
    'Ethical',
    'Technical'
];

const ProgresA = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        field_of_interest: '',
        linkedin_url: '',
        university: '',
        college: '',
        course_duration: '',
        course: '',
        publications: '',
        publications_link: '',
        class_10_education: '',
        class_10_percentage: '',
        class_10_year_of_passing: '',
        class_12_education: '',
        class_12_percentage: '',
        class_12_year_of_passing: '',
        masters_university: '',
        masters_percentage: '',
        masters_year_of_passing: '',
        last_internship_details: '',
        preferred_location: '',
    });

    const [avatar, setAvatar] = useState(null);
    const [skills, setSkills] = useState([]);
    const [error, setError] = useState(null); // State to store error messages

    useEffect(() => {
        const pageDetails = localStorage.getItem('yashodanandB');
        const id = localStorage.getItem('id');

        if (pageDetails === 'yashodanandB') {
            navigate(`/progresb/${id}`)
        }
    }, [navigate]);

    const handleChange1 = (event) => {
        const { target: { value } } = event;
        setSkills(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setAvatar(file);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const id = localStorage.getItem('id');

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            const API = `${Baseurl}/updateTodo1/${id}`; // Include the ID in the API URL

            const formDataObject = new FormData();
            for (const key in formData) {
                formDataObject.append(key, formData[key]);
            }

            if (avatar) {
                formDataObject.append('upload_resume', avatar); // Append the avatar file
            }
            // Append skills to the formDataObject
            formDataObject.append('skills', skills.join(','));

            // Make the HTTP PUT request
            const response = await fetch(API, {
                method: 'PUT',
                body: formDataObject, // Send the FormData object
            });

            if (response.ok) {
                // Handle successful response
                await response.json();
                localStorage.setItem('yashodanandB', 'yashodanandB');
                // Save the current time in local storage
                const currentTime = new Date().getTime();
                localStorage.setItem('currentStartTime', currentTime.toString());
                // Redirect to another page or perform other actions
                navigate(`/progresb/${id}`);
            } else {
                // Handle error response
                const errorMessage = await response.text();
                const errorObj = JSON.parse(errorMessage);
                if (errorObj.message) {
                    setError(`${errorObj.message}`);
                } else {
                    setError('An error occurred while updating the data.');
                }
            }
        } catch (error) {
            // Handle any errors that occur during the request
            setError(error.message); // Store the error message in the state
            console.error('Update error:', error);
        }
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    };

    useEffect(() => {
        if (!localStorage.getItem('yashodanandA')) {
            navigate('/')
        }
    }, [navigate]);

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
                        <Box className='top-form' component="form" onSubmit={onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <div className="eduction p-details">
                                        <label style={{ marginBottom: "10px", display: "inline-block" }} htmlFor="">Basic Details</label>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Name" name='name' value={formData.name} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Email" name='email' value={formData.email} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Phone" name='phone' value={formData.phone} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="field-of-interest">Interest Area</InputLabel>
                                                    <Select required
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
                                                        <MenuItem value={"Entertainment_and_Media_Law"}>Entertainment and Media Law </MenuItem>
                                                        <MenuItem value={"Capital_Market_Securities"}>Capital Market Securities </MenuItem>
                                                        <MenuItem value={"Banking_Law"}>Banking Law </MenuItem>
                                                        <MenuItem value={"Mediation_and_Conciliation"}>Mediation and Conciliation </MenuItem>
                                                        <MenuItem value={"Merger_Acquisition"}>Merger Acquisition </MenuItem>
                                                        <MenuItem value={"Sports_Law"}>Sports Law </MenuItem>
                                                        <MenuItem value={"Intellectual_Property_Rights"}>Intellectual Property Rights </MenuItem>
                                                        <MenuItem value={"Labour_Laws"}>Labour Laws </MenuItem>
                                                        <MenuItem value={"International_Business_Law"}>International Business_Law </MenuItem>
                                                        <MenuItem value={"Startup_in_India_related_legal_Question"}>Startup in India related legal Question </MenuItem>
                                                        <MenuItem value={"Insurance_Law"}>Insurance_Law </MenuItem>
                                                        <MenuItem value={"Joint_Venture_Public_private_partnership_and_MSME"} >Joint Venture Public private partnership and MSME</MenuItem>
                                                        <MenuItem value={"Tax_Law"}>Tax Law </MenuItem>
                                                        <MenuItem value={"ARBITRATION"}>ARBITRATION </MenuItem>
                                                        <MenuItem value={"IBC"}>IBC </MenuItem>
                                                        <MenuItem value={"Competitive_and_Anti_Trust"}>Competitive and Anti Trust </MenuItem>
                                                        <MenuItem value={"AVIATION_LAW"}>AVIATION LAW </MenuItem>
                                                        <MenuItem value={"Environment"}>Environment </MenuItem>
                                                        <MenuItem value={"Public_Policy"}>Public Policy </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Linkedin URL" name='linkedin_url' value={formData.linkedin_url} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
                                                    <Select required
                                                        labelId="demo-multiple-checkbox-label"
                                                        id="demo-multiple-checkbox"
                                                        multiple
                                                        value={skills}
                                                        onChange={handleChange1}
                                                        input={<OutlinedInput label="Skills" />}
                                                        renderValue={(selected) => selected.join(', ')}
                                                        MenuProps={MenuProps}
                                                    >
                                                        {skillsOptions.map((name) => (
                                                            <MenuItem key={name} value={name}>
                                                                <Checkbox checked={skills.indexOf(name) > -1} />
                                                                <ListItemText primary={name} />
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="eduction p-details">
                                        <label style={{ marginBottom: "10px", display: "inline-block" }} htmlFor="">Course Details</label>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="course">Course</InputLabel>
                                                    <Select required
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
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="year-of-passing">College</InputLabel>
                                                    <Select required
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
                                                        <MenuItem value={"other colleges"}>other </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="university">University</InputLabel>
                                                    <Select required
                                                        labelId="university"
                                                        id="demo-simple-select-helper"
                                                        name="university"
                                                        value={formData.university}
                                                        label="University"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value=""><em>University Name</em></MenuItem>
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
                                                        <MenuItem value={"other university"}>other </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>

                                    <FormControl required className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
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

                                    <div className="eduction">
                                        <label style={{ marginBottom: "10px", display: "inline-block" }} htmlFor="">Education Details</label>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class X</label>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="10th-board">Board</InputLabel>
                                                    <Select required
                                                        labelId="10th_board"
                                                        id="demo-simple-select-helper"
                                                        name='class_10_education'
                                                        value={formData.class_10_education}
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
                                                <FormControl fullWidth>
                                                    <TextField required id="outlined-required" label="Percentage" name='class_10_percentage' value={formData.class_10_percentage} onChange={handleChange} fullWidth />
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='class_10_year_of_passing' value={formData.class_10_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>Class XII</label>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <InputLabel id="12th-board">Board</InputLabel>
                                                    <Select required
                                                        labelId="12th_board"
                                                        id="demo-simple-select-helper"
                                                        label="Education Board"
                                                        name='class_12_education'
                                                        value={formData.class_12_education}
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={"IB"}>IB</MenuItem>
                                                        <MenuItem value={"CBSC"}>CBSE</MenuItem>
                                                        <MenuItem value={"ICSC"}>ICSE</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
                                                    <TextField required id="outlined-required" label="Percentage" name='class_12_percentage' value={formData.class_12_percentage} onChange={handleChange} fullWidth />
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='class_12_year_of_passing' value={formData.class_12_year_of_passing} onChange={handleChange} fullWidth />
                                            </div>
                                        </div>
                                        <div className="edu-class">
                                            <div className="class-box">
                                                <label>LLB</label>
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

                                    <FormControl required className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
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
                                    {formData.publications === 'Yes' && (
                                        <TextField required id="outlined-required" label="Publications Link" name='publications_link' value={formData.publications_link} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    )}

                                    <TextField required id="outlined-required" label="Last Internship Details " name='last_internship_details' value={formData.last_internship_details} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />

                                    <FormControl required className="checkbox-row" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Preferred Location:</FormLabel>
                                        <FormControlLabel name='preferred_location' value={"Delhi"} checked={formData.preferred_location === 'Delhi'} onChange={handleChange} control={<Checkbox />} label="Delhi" />
                                        <FormControlLabel name='preferred_location' value={"Gurugram"} checked={formData.preferred_location === 'Gurugram'} onChange={handleChange} control={<Checkbox />} label="Gurugram" />
                                    </FormControl>
                                    <FormControl className="checkbox-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                        <FormLabel required sx={{ paddingBottom: "10px" }} component="legend">Upload Resume: <span style={{fontWeight:'lighter', fontSize:'13px'}}>(Only PDFs/DOC/DOCX less than <span style={{ color:'red', fontWeight:'bold'}}> 2MB</span> )</span> </FormLabel>
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
                                    <p className='terms-cond'><strong>Please Read the Following Terms and Conditions:</strong><br />
                                        1. The test time will be 45 minutes.<br />
                                        2. Some questions will be objective and some subjective.<br />
                                        4. All questions are mandatory.<br />
                                        5. There shall be no negative marking.</p>
                                </Grid>
                            </Grid>
                            <Box sx={{ width: '100%' }} className="bottom-form">
                                <Link className='back-link'></Link>
                                {error && <div style={{ color: "#dc3232" }}>{error}</div>} {/* Display error message if there is an error */}
                                <Button type='submit' className="blue-btn">Next</Button>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgresA;
