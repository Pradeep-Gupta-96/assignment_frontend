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
import FormControl from '@mui/material/FormControl';
import TimmerCompo from './TimmerCompo';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import videobg from '../images/background-video.mp4'

const steps = [
    'Preliminary Details',
    'Aptitude',
    'Ethical',
];
const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 8px 12px;
    box-sizing: border-box;
    border-radius: 4px;
    color: #000;
    background: #fff;
    border: 1px solid rgb(118, 118, 118);
    &:hover {border-color: #3399FF;}
    &:focus {border-color: #3399FF;}

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);



const ProgresC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        "Answer1": "",
        "Answer2": "",
        "Answer3": "",
    });
    //const [timerTargetTime, setTimerTargetTime] = useState(0); // Initialize target time to 0

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const id = localStorage.getItem('id');
    console.log("C", id)

    const handleSubmit = async (event) => {
        try {
            if (event) {
                event.preventDefault();
            }
            const API = `http://localhost:4000/api/updateTodo3/${id}`; // Include the ID in the API URL

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

    //             handleSubmit()
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
                        {/* <TimmerCompo targetTime={timerTargetTime} onTimeout={() => navigate(`/progresc/${id}`)} /> */}
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
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                            Why Areness? Where do you envision your legal career in 5 years, and what steps do you plan to take to achieve your professional goals during that time?
                                            <span style={{ fontSize: "12px" }}>(Max Word Limit 250)</span>
                                        </FormLabel>
                                        <Textarea
                                            required
                                            id="outlined-required"
                                            label="Answer"
                                            name='Answer1'
                                            value={formData.Answer1}
                                            onChange={handleChange}
                                            aria-label="maximum height"
                                            minRows={3}
                                            placeholder="Maximum 250 Words"
                                            onPaste={(e) => e.preventDefault()}
                                        />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                            What strategies and adaptations should legal practitioners consider in order to thrive and remain competitive in the face of significant transformations within the legal profession?
                                        </FormLabel>
                                        <Textarea
                                            required
                                            id="outlined-required"
                                            label="Answer"
                                            name='Answer2'
                                            value={formData.Answer2}
                                            onChange={handleChange}
                                            aria-label="maximum height"
                                            minRows={3}
                                            placeholder="Maximum 250 Words"
                                            onPaste={(e) => e.preventDefault()}
                                        />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                    <strong>Situation Based Ethical Problemx</strong>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        ABC Consultancy is an established law firm that practices law in India. You are appointed as a Senior Associate in the firm. Your job profile includes appearances in Court, briefing seniors, drafting pleadings, attending Court proceedings, etc. The Advocates Act, 1961 makes it evident that persons enrolled with the Bar Council of India are entitled to practice law, however there is no bar to a foreign lawyer to conduct arbitration in India especially if the matter is governed by an international commercial arbitration agreement. A commercial dispute between DEF Pvt. Ltd and GHI Pvt. Ltd. were instituted under the Arbitration and Conciliation Act, 1996. Your senior asked you to fraudulently incorporate an international commercial arbitration clause in the agreement between the parties in order to bring a foreign lawyer for making contentions in the matter. How would you handle the above situation as far as balancing your professional obligations and ethical responsibilities are concerned ? 
                                        </FormLabel>
                                        <Textarea
                                            required
                                            id="outlined-required"
                                            label="Answer"
                                            name='Answer3'
                                            value={formData.Answer3}
                                            onChange={handleChange}
                                            aria-label="maximum height"
                                            minRows={3}
                                            placeholder="Maximum 250 Words"
                                            onPaste={(e) => e.preventDefault()}
                                        />
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