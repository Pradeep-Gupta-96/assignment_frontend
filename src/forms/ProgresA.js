import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button, FormLabel, ListItemText } from '@mui/material';
import { useNavigate } from "react-router-dom"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import videobg from '../images/background-video.mp4';

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
    'Technical '
];

const ProgresA = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        field_of_interest: '',
        LinkedinURL: '',
        university: '',
        college: '',
        course_duration: '',
        course: '',
        publications: '',
        publicationslink: '',
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
        PreferredLocation: "",
    });
    const [avatar, setAvatar] = useState(null);
    const [skills, setSkills] = React.useState([]);

    const handleChange1 = (event) => {
        const {
            target: { value },
        } = event;
        setSkills(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
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


    // const onSubmit = async () => {
    //     try {
    //         const API = `http://localhost:4000/api/updateTodo2/${id}`; // Include the ID in the API URL

    //         const formDataObject = new FormData();
    //         for (const key in formData) {
    //             formDataObject.append(key, formData[key]);
    //         }

    //         if (avatar) {
    //             formDataObject.append('UploadResume', avatar); // Append the avatar file
    //         }

    //         // Make the HTTP PUT request
    //         const response = await fetch(API, {
    //             method: 'PUT',
    //             body: formDataObject, // Send the FormData object
    //         });

    //         if (response.ok) {
    //             // Handle successful response
    //             await response.json();
    //             localStorage.setItem("yashodanandC", "yashodanandC")
    //             navigate(`/progresc/${id}`);
    //         } else {
    //             // Handle error response
    //             console.error('Error:', response.statusText);
    //         }
    //     } catch (error) {
    //         // Handle any errors that occur during the request
    //         console.error('Update error:', error);
    //     }
    // };



    // const API1 = `http://localhost:4000/api/todo/${id}`;
    // const fetchData1 = React.useCallback(async () => {
    //     try {
    //         const response = await fetch(API1);
    //         const data = await response.json();
    //         const timestamp = new Date(data.todo.created_at).getTime(); // Assuming 'created_at' is the timestamp field

    //         const now = new Date().getTime();
    //         const fortyFiveMinutes = 45 * 60 * 1000; // 45 minutes in milliseconds
    //         setTimerTargetTime(timestamp + fortyFiveMinutes);

    //         if (now - timestamp >= fortyFiveMinutes) {
    //             navigate('/')
    //             // Time is up, navigate to the '/progresc/{id}' route
    //             // onSubmit()
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [API1, id, navigate]);

    // React.useEffect(() => {
    //     fetchData1();
    //     const interval = setInterval(fetchData1, 1000);

    //     return () => clearInterval(interval);
    // }, [fetchData1]);



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
                        <Box className='top-form' component="form" >
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
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Linkedin URL" name='LinkedinURL' value={formData.LinkedinURL} onChange={handleChange} fullWidth />
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth >
                                                    <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
                                                    <Select
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
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
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
                                            </div>
                                            <div className="class-box">
                                                <FormControl fullWidth>
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
                                                            <em>University Name</em>
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
                                            </div>
                                        </div>
                                    </div>

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
                                                <FormControl fullWidth>
                                                    <TextField required id="outlined-required" label="Percentage" name='Class10_percentage' value={formData.Class10_percentage} onChange={handleChange} fullWidth />
                                                </FormControl>
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
                                                <FormControl fullWidth>
                                                    <TextField required id="outlined-required" label="Percentage" name='Class12_percentage' value={formData.Class12_percentage} onChange={handleChange} fullWidth />
                                                </FormControl>
                                            </div>
                                            <div className="class-box">
                                                <TextField required id="outlined-required" label="Year of Passing" name='Class12_year_of_passing' value={formData.Class12_year_of_passing} onChange={handleChange} fullWidth />
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
                                    {formData.publications === 'Yes' && (
                                        <TextField required id="outlined-required" label="Publications Link" name='publicationslink' value={formData.publicationslink} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />
                                    )}

                                    <TextField required id="outlined-required" label="Last Internship Details " name='LastInternshipDetails' value={formData.LastInternshipDetails} onChange={handleChange} fullWidth sx={{ marginBottom: "25px" }} />

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
                                    <p className='terms-cond'><strong>Please Read the Following Terms and Conditions:</strong><br />
                                        1. The test time will be 45 minutes.<br />
                                        2. Some questions will be objective and some subjective.<br />
                                        3. There are total 4 Parts comprising of Part A, Part B, Part C and Part D<br />
                                        4. All questions are mandatory.<br />
                                        5. There shall be no negative marking.</p>
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