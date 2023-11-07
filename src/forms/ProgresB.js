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
    const [formData, setFormData] = useState({
        Aptitude_answer1: "",
        Aptitude_answer2: "",
        Aptitude_answer3: "",
        Aptitude_answer4: "",
        Aptitude_answer5: "",
        Aptitude_answer6: "",
        Aptitude_answer7: "",
        Aptitude_answer8: "",
        Aptitude_answer9: "",
        Aptitude_answer10: "",
    });

    const id = localStorage.getItem("id");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const API = `http://localhost:4000/api/updateTodo2/${id}`;

    const onSubmit = async () => {
        try {
            const response = await fetch(API, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                await response.json();
                localStorage.setItem("yashodanandC", "yashodanandC");
                navigate(`/progresc/${id}`);
            } else {
                const errorMessage = await response.text();
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
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. E’s daughter"
                                            name="Aptitude_answer1"
                                            value="A. E’s daughter"
                                            checked={formData.Aptitude_answer1 === 'A. E’s daughter'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. G’s brother"
                                            name="Aptitude_answer1"
                                            value="B. G’s brother"
                                            checked={formData.Aptitude_answer1 === 'B. G’s brother'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. F’s father"
                                            name="Aptitude_answer1"
                                            value="C. F’s father"
                                            checked={formData.Aptitude_answer1 === 'C. F’s father'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. A’s son"
                                            name="Aptitude_answer1"
                                            value="D. A’s son"
                                            checked={formData.Aptitude_answer1 === 'D. A’s son'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend"><strong>Study the paragraph and answer the questions (Questions 2 to 5) that follow:-</strong><br />
                                            The most important reason for this state of affairs, perhaps, is that India was the only country in the world to truly recognize the achievements of the Soviet Union-rather than merely focus on the debilitating faults that Communism brought to its people. The people of India realised that the achievement of one hundred percent literacy in a country much, much larger than its own and with similarly complicated ethnic and religious groupings, the rapid industrialization of a nation that was a primarily agrarian society when the Bolshevik revolution took place in 1917, the attendant revolutionary steps in science and technology, the accessibility of health care (primeval according to Western standards, perhaps, but not according to Indian ones) to the general population, and despite prohibition of the government of the time the vast outpourings in literature, music, art, etc. are momentous and remarkable feats in any country. In contrast, all that the West focused on were the massive human rights violations by the Soviet State on its people, the deliberate uprooting and mass migrations of ethnic peoples from one part of the country to another in the name of industrialization, the end of religion. In short, all the tools of information were employed to condemn the ideology of Communism, so much at variance with capitalist thinking. The difference with the Indian perception, I think here is, that while the Indians reacted as negatively to what the Soviet governments did to its people in the name of good governance (witness the imprisonment of Boris Pasternak and the formation of an international committee to put pressure for his release with Jawaharlal Nehru at its head), they took the pain not to condemn the people of that broad country in black and white terms; they understood that mingled in the shades of grey were grains of uniqueness (The Russians have never failed that characteristic in themselves; they have twice experimented with completely different ideologies, Communism and Capitalism both in the space of a century).<br /><br />
                                            Q 2. Which of the following statements according to the passage is correct? </FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. India took heed of the weak faults of Russian policies and systems."
                                            name="Aptitude_answer2"
                                            value="A. India took heed of the weak faults of Russian policies and systems."
                                            checked={formData.Aptitude_answer2 === 'A. India took heed of the weak faults of Russian policies and systems.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. The process of industrialization had already started when the Russian Revolution took place in 1917."
                                            name="Aptitude_answer2"
                                            value="B. The process of industrialization had already started when the Russian Revolution took place in 1917."
                                            checked={formData.Aptitude_answer2 === 'B. The process of industrialization had already started when the Russian Revolution took place in 1917.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. India seriously commended the achievements of Russia, i.e., hundred percent literacy and rapid industrialization."
                                            name="Aptitude_answer2"
                                            value="C. India seriously commended the achievements of Russia, i.e., hundred percent literacy and rapid industrialization."
                                            checked={formData.Aptitude_answer2 === 'C. India seriously commended the achievements of Russia, i.e., hundred percent literacy and rapid industrialization.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. Literature, art and music received a setback during the communist regime in Russia."
                                            name="Aptitude_answer2"
                                            value="D. Literature, art and music received a setback during the communist regime in Russia."
                                            checked={formData.Aptitude_answer2 === 'D. Literature, art and music received a setback during the communist regime in Russia.'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>

                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 3. The Indian perception of the Soviet Union was always...?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. Neutral"
                                            name="Aptitude_answer3"
                                            value="A. Neutral"
                                            checked={formData.Aptitude_answer3 === 'A. Neutral'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. Applauding"
                                            name="Aptitude_answer3"
                                            value="B. Applauding"
                                            checked={formData.Aptitude_answer3 === 'B. Applauding'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. Counter-reactionary"
                                            name="Aptitude_answer3"
                                            value="C. Counter-reactionary"
                                            checked={formData.Aptitude_answer3 === 'C. Counter-reactionary'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. Critical"
                                            name="Aptitude_answer3"
                                            value="D. Critical"
                                            checked={formData.Aptitude_answer3 === 'D. Critical'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 4. The West did not focus on...?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. Massive human rights violation of the Soviet state on its people"
                                            name="Aptitude_answer4"
                                            value="A. Massive human rights violation of the Soviet state on its people"
                                            checked={formData.Aptitude_answer4 === 'A. Massive human rights violation of the Soviet state on its people'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. Rapid growth of nuclear weapons in Russia"
                                            name="Aptitude_answer4"
                                            value="B. Rapid growth of nuclear weapons in Russia"
                                            checked={formData.Aptitude_answer4 === 'B. Rapid growth of nuclear weapons in Russia'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. Deliberate uprooting and mass migration of ethnic people in the name of industrialisation"
                                            name="Aptitude_answer4"
                                            value="C. Deliberate uprooting and mass migration of ethnic people in the name of industrialisation"
                                            checked={formData.Aptitude_answer4 === 'C. Deliberate uprooting and mass migration of ethnic people in the name of industrialisation'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. Both (a) and (c)"
                                            name="Aptitude_answer4"
                                            value="D. Both (a) and (c)"
                                            checked={formData.Aptitude_answer4 === 'D. Both (a) and (c)'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 5. The passage is...?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. Descriptive"
                                            name="Aptitude_answer5"
                                            value="A. Descriptive"
                                            checked={formData.Aptitude_answer5 === 'A. Descriptive'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. Thought-provoking"
                                            name="Aptitude_answer5"
                                            value="B. Thought-provoking"
                                            checked={formData.Aptitude_answer5 === 'B. Thought-provoking'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. Paradoxical"
                                            name="Aptitude_answer5"
                                            value="C. Paradoxical"
                                            checked={formData.Aptitude_answer5 === 'C. Paradoxical'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. Analytical"
                                            name="Aptitude_answer5"
                                            value="D. Analytical"
                                            checked={formData.Aptitude_answer5 === 'D. Analytical'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 6.  If TRANSFER is coded as RTNAFSRE, then ELEPHANT would be coded as...?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. LEPEHATN"
                                            name="Aptitude_answer6"
                                            value="A. LEPEHATN"
                                            checked={formData.Aptitude_answer6 === 'A. LEPEHATN'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. LEEPAHTN"
                                            name="Aptitude_answer6"
                                            value="B. LEEPAHTN"
                                            checked={formData.Aptitude_answer6 === 'B. LEEPAHTN'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. LEPEAHTN"
                                            name="Aptitude_answer6"
                                            value="C. LEPEAHTN"
                                            checked={formData.Aptitude_answer6 === 'C. LEPEAHTN'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. LEPEAHNT"
                                            name="Aptitude_answer6"
                                            value="D. LEPEAHNT"
                                            checked={formData.Aptitude_answer6 === 'D. LEPEAHNT'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 7.  Out of 130 students appearing in an exam, 62 failed in Science, 52 failed in English, whereas 24 failed in both Science and English. The number of students who passed is...?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. 50"
                                            name="Aptitude_answer7"
                                            value="A. 50"
                                            checked={formData.Aptitude_answer7 === 'A. 50'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. 20"
                                            name="Aptitude_answer7"
                                            value="B. 20"
                                            checked={formData.Aptitude_answer7 === 'B. 20'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. 40"
                                            name="Aptitude_answer7"
                                            value="C. 40"
                                            checked={formData.Aptitude_answer7 === 'C. 40'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. 30"
                                            name="Aptitude_answer7"
                                            value="D. 30"
                                            checked={formData.Aptitude_answer7 === 'D. 30'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 8.  There are four letters and four envelopes and exactly one letter is to be put in exactly one envelope with the correct address. If the letters are randomly inserted into the envelopes, then consider the following statements:  <br />1. It is possible that exactly one letter goes into an incorrect envelope. <br />2. There are only six ways in which only two letters can go into the correct envelopes. Which of the statements given above is/are correct? </FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. 1 Only"
                                            name="Aptitude_answer8"
                                            value="A. 1 Only"
                                            checked={formData.Aptitude_answer8 === 'A. 1 Only'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. 2 Only"
                                            name="Aptitude_answer8"
                                            value="B. 2 Only"
                                            checked={formData.Aptitude_answer8 === 'B. 2 Only'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. Both 1 and 2"
                                            name="Aptitude_answer8"
                                            value="C. Both 1 and 2"
                                            checked={formData.Aptitude_answer8 === 'C. Both 1 and 2'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. Neither 1 nor 2"
                                            name="Aptitude_answer8"
                                            value="D. Neither 1 nor 2"
                                            checked={formData.Aptitude_answer8 === 'D. Neither 1 nor 2'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 9.  In India, while the unemployment rate is a frequently used measure of poor performance of the economy, under conditions of rising school and college enrolment, it paints an inaccurate picture. The reported unemployment rate is dominated by the experience of younger Indians who face higher employment challenges and exhibit greater willingness to wait for the right job than their older peers. The unemployment challenge is greater for people with secondary or higher education, and rising education levels inflate unemployment challenges.<br />Which one of the following statements most likely reflects as to what the author of the passage intends to say? </FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. Enrolment in schools and colleges is high but there is no quality education."
                                            name="Aptitude_answer9"
                                            value="A. Enrolment in schools and colleges is high but there is no quality education."
                                            checked={formData.Aptitude_answer9 === 'A. Enrolment in schools and colleges is high but there is no quality education.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. Unemployment must be seen as a function of rising education and aspirations of young Indians."
                                            name="Aptitude_answer9"
                                            value="B. Unemployment must be seen as a function of rising education and aspirations of young Indians."
                                            checked={formData.Aptitude_answer9 === 'B. Unemployment must be seen as a function of rising education and aspirations of young Indians.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. There are no labour-intensive industries to accommodate the huge number of unemployed people."
                                            name="Aptitude_answer9"
                                            value="C. There are no labour-intensive industries to accommodate the huge number of unemployed people."
                                            checked={formData.Aptitude_answer9 === 'C. There are no labour-intensive industries to accommodate the huge number of unemployed people.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. The education system should be properly designed so as to enable the educated people to be self-employed."
                                            name="Aptitude_answer9"
                                            value="D. The education system should be properly designed so as to enable the educated people to be self-employed."
                                            checked={formData.Aptitude_answer9 === 'D. The education system should be properly designed so as to enable the educated people to be self-employed.'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">"Science by itself is not enough, there must be a force and discipline outside the sciences to coordinate them and point to a goal. It is not possible to run a course aright when the goal itself has not been rightly placed. What science needs is philosophy – the analysis of scientific method and the coordination of scientific purposes and results; without this, any science must be superficial. Government suffers, precisely like science, for lack of philosophy. Philosophy bears to science the same relationship which statesmanship bears to politics: movement guided by total knowledge and perspective, as against aimless and individual seeking. Just as the pursuit of knowledge becomes scholasticism when divorced from the actual needs of men and life, so the pursuit of politics becomes a destructive bedlam when divorced from science and philosophy." <br /><br />Q 10.  Which one of the following statements best reflects the most rational, logical and practical message conveyed by the passage?</FormLabel>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="A. Modern statesmen need to be well trained in scientific methods and philosophical thinking to enable them to have a better perspective of their roles, responsibilities, and goals."
                                            name="Aptitude_answer10"
                                            value="A. Modern statesmen need to be well trained in scientific methods and philosophical thinking to enable them to have a better perspective of their roles, responsibilities, and goals."
                                            checked={formData.Aptitude_answer10 === 'A. Modern statesmen need to be well trained in scientific methods and philosophical thinking to enable them to have a better perspective of their roles, responsibilities, and goals.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="B. It is not desirable to have Governments managed by empirical statesmen unless well mixed with others who are grounded in learning and reflect wisdom."
                                            name="Aptitude_answer10"
                                            value="B. It is not desirable to have Governments managed by empirical statesmen unless well mixed with others who are grounded in learning and reflect wisdom."
                                            checked={formData.Aptitude_answer10 === 'B. It is not desirable to have Governments managed by empirical statesmen unless well mixed with others who are grounded in learning and reflect wisdom.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="C. As the statesmen/bureaucrats are the products of a society, it is desirable to have a system of education in a society that focuses on training its citizens in scientific method and philosophical thinking from a very early age."
                                            name="Aptitude_answer10"
                                            value="C. As the statesmen/bureaucrats are the products of a society, it is desirable to have a system of education in a society that focuses on training its citizens in scientific method and philosophical thinking from a very early age."
                                            checked={formData.Aptitude_answer10 === 'C. As the statesmen/bureaucrats are the products of a society, it is desirable to have a system of education in a society that focuses on training its citizens in scientific method and philosophical thinking from a very early age.'}
                                            onChange={handleChange}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="D. It is desirable that all scientists need to be philosophers as well to make their work goal-oriented and thus purposeful and useful to the society."
                                            name="Aptitude_answer10"
                                            value="D. It is desirable that all scientists need to be philosophers as well to make their work goal-oriented and thus purposeful and useful to the society."
                                            checked={formData.Aptitude_answer10 === 'D. It is desirable that all scientists need to be philosophers as well to make their work goal-oriented and thus purposeful and useful to the society.'}
                                            onChange={handleChange}
                                        />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 11. Who is the current Minister of State, Ministry of Law and Justice (Independent Charge)?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Sri. Arjun Ram Meghwal" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Sri. Anurag Thakur" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Smt. Smriti Irani" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Sri. Nithin Gadkari" />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Button className="blue-btn" onClick={onSubmit}>Next</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgresB