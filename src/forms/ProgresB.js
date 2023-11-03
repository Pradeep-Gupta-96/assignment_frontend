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
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import videobg from '../images/background-video.mp4';
import TimmerCompo from './TimmerCompo';

const steps = [
    'Preliminary Details',
    'Aptitude',
    'Ethical',
    'Technical '
];


const ProgresB = () => {
    const navigate = useNavigate()
    const id = localStorage.getItem("id");

    const onSubmit = async () => {
        try {
            localStorage.setItem("yashodanandC", "yashodanandC")
            navigate(`/progresc/${id}`);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('yashodanandB')) {
            navigate(`/progresa`)
        }
    }, [])

    // Function to get the saved current time from local storage
    const getSavedCurrentTime = () => {
        const storedStartTime = localStorage.getItem('currentStartTime');
        return storedStartTime ? parseInt(storedStartTime, 10) : null;
    };

    // Get the saved current time from local storage
    const currentStartTime = getSavedCurrentTime();

    // Calculate target time based on current time
    const targetTime = currentStartTime ? currentStartTime + 45 * 60 * 1000 : 0;

    useEffect(() => {
        // Start the timer when this component mounts
        if (currentStartTime) {
            // The targetTime variable is calculated based on the current time.
            // You can use this targetTime to start the countdown timer as needed.
            // If you want to use the countdown timer, call the startTimer function here.
            // startTimer();
        }
    }, [currentStartTime]);

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
                            <Stepper activeStep={1} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        <TimmerCompo targetTime={targetTime} onTimeout={onSubmit} />
                        <Box className='top-form' component="form" >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 1. A, B, C, D, E, F and G are members of a family consisting of four adults and three children, two of whom, F and G are girls. A and D are brothers and A is a doctor. E is an engineer married to one of the brothers and has two children. B is married to D and G is their child. Who is C?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. E’s daughter" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	G’s brother" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	F’s father" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	A’s son" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend"><strong>Study the paragraph and answer the questions (Questions 2 to 5) that follow:-</strong><br /><br />
                                            The most important reason for this state of affairs, perhaps, is that India was the only country in the world to truly recognize the achievements of the Soviet Union-rather than merely focus on the debilitating faults that Communism brought to its people. The people of India realised that the achievement of one hundred percent literacy in a country much, much larger than its own and with similarly complicated ethnic and religious groupings, the rapid industrialization of a nation that was a primarily agrarian society when the Bolshevik revolution took place in 1917, the attendant revolutionary steps in science and technology, the accessibility of health care (primeval according to Western standards, perhaps, but not according to Indian ones) to the general population, and despite prohibition of the government of the time the vast outpourings in literature, music, art, etc. are momentous and remarkable feats in any country. In contrast, all that the West focused on were the massive human rights violations by the Soviet State on its people, the deliberate uprooting and mass migrations of ethnic peoples from one part of the country to another in the name of industrialization, the end of religion. In short, all the tools of information were employed to condemn the ideology of Communism, so much at variance with capitalist thinking. The difference with the Indian perception, I think here is, that while the Indians reacted as negatively to what the Soviet governments did to its people in the name of good governance (witness the imprisonment of Boris Pasternak and the formation of an international committee to put pressure for his release with Jawaharlal Nehru at its head), they took the pain not to condemn the people of that broad country in black and white terms; they understood that mingled in the shades of grey were grains of uniqueness (The Russians have never failed that characteristic in themselves; they have twice experimented with completely different ideologies, Communism and Capitalism both in the space of a century).<br /><br />
                                            Q 2. Which of the following statements according to the passage is correct? </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. India took heed of the weak faults of Russian policies and systems." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	The process of industrialization had already started when the Russian Revolution took place in 1917." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	India seriously commended the achievements of Russia, i.e., hundred percent literacy and rapid industrialization." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Literature, art and music received a setback during the communist regime in Russia." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 3. The Indian perception of the Soviet Union was always...?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. Neutral" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Applauding" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Counter-reactionary" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Critical" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 4. The West did not focus on...?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. Massive human rights violation of the Soviet state on its people" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Rapid growth of nuclear weapons in Russia" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Deliberate uprooting and mass migration of ethnic people in the name of industrialisation" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Both (a) and (c)" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 5. The passage is...?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. Descriptive" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Thought-provoking" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Paradoxical" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Analytical" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 6.  If TRANSFER is coded as RTNAFSRE, then ELEPHANT would be coded as...?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. LEPEHATN" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	LEEPAHTN" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	LEPEAHTN" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	LEPEAHNT" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 7.  Out of 130 students appearing in an exam, 62 failed in Science, 52 failed in English, whereas 24 failed in both Science and English. The number of students who passed is...?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. 50" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	20" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	40" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	30" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 8.  There are four letters and four envelopes and exactly one letter is to be put in exactly one envelope with the correct address. If the letters are randomly inserted into the envelopes, then consider the following statements:  <br />1. It is possible that exactly one letter goes into an incorrect envelope. <br />2. There are only six ways in which only two letters can go into the correct envelopes. Which of the statements given above is/are correct? </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. 1 Only" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	2 Only" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Both 1 and 2" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Neither 1 nor 2" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 9.  In India, while the unemployment rate is a frequently used measure of poor performance of the economy, under conditions of rising school and college enrolment, it paints an inaccurate picture. The reported unemployment rate is dominated by the experience of younger Indians who face higher employment challenges and exhibit greater willingness to wait for the right job than their older peers. The unemployment challenge is greater for people with secondary or higher education, and rising education levels inflate unemployment challenges.<br />Which one of the following statements most likely reflects as to what the author of the passage intends to say? </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. Enrolment in schools and colleges is high but there is no quality education." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Unemployment must be seen as a function of rising education and aspirations of young Indians." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	There are no labour-intensive industries to accommodate the huge number of unemployed people." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	The education system should be properly designed so as to enable the educated people to be self-employed." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">"Science by itself is not enough, there must be a force and discipline outside the sciences to coordinate them and point to a goal. It is not possible to run a course aright when the goal itself has not been rightly placed. What science needs is philosophy – the analysis of scientific method and the coordination of scientific purposes and results; without this, any science must be superficial. Government suffers, precisely like science, for lack of philosophy. Philosophy bears to science the same relationship which statesmanship bears to politics: movement guided by total knowledge and perspective, as against aimless and individual seeking. Just as the pursuit of knowledge becomes scholasticism when divorced from the actual needs of men and life, so the pursuit of politics becomes a destructive bedlam when divorced from science and philosophy." <br /><br />Q 10.  Which one of the following statements best reflects the most rational, logical and practical message conveyed by the passage?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A. Modern statesmen need to be well trained in scientific methods and philosophical thinking to enable them to have a better perspective of their roles, responsibilities and goals." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	It is not desirable to have Governments managed by empirical statesmen unless well mixed with others who are grounded in learning and reflect wisdom." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	As the statesmen/bureaucrats are the products of a society, it is desirable to have a system of education in a society that focuses on training its citizens in scientific method and philosophical thinking from a very early age." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	It is desirable that all scientists need to be philosophers as well to make their work goaloriented and thus purposeful and useful to the society." />
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