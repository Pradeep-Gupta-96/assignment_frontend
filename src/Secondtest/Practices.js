import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { allQuestionsA1 } from './Questionpart/PartA';
import { allQuestionsB } from './Questionpart/PartB';
import { allQuestionsC } from './Questionpart/PartC';
import { allQuestionsD } from './Questionpart/PartD';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import videobg from '../images/background-video.mp4';
import TimmerCompo from '../forms/TimmerCompo';

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

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const getRandomQuestions = (questions, count) => {
    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions.slice(0, count);
};

const Practices = () => {
    const [sectionA1] = useState(() => getRandomQuestions(allQuestionsA1, 5));
    const [sectionB] = useState(() => getRandomQuestions(allQuestionsB, 2));
    const [sectionC] = useState(() => getRandomQuestions(allQuestionsC, 2));
    const [sectionD] = useState(() => getRandomQuestions(allQuestionsD, 6));

    const id = localStorage.getItem("id");
    const navigate = useNavigate()

    const [formDataPartA, setFormDataPartA] = useState({
        Answer1_PartA: '',
        Answer2_PartA: '',
        Answer3_PartA: '',
        Answer4_PartA: '',
        Answer5_PartA: '',
        Answer6_PartA: '',
        Answer7_PartA: '',
        Answer8_PartA: '',
        Answer9_PartA: '',
        Answer10_PartA: '',
        Answer11_PartA: '',
        Answer12_PartA: '',
        Answer13_PartA: '',
        Answer14_PartA: '',
        // ... other PartA questions
    });

    const [formDataPartB, setFormDataPartB] = useState({
        Answer1_PartB: '',
        Answer2_PartB: '',
        Answer3_PartB: '',
        // ... other PartB questions
    });

    const [formDataPartC, setFormDataPartC] = useState({
        Answer1_PartC: '',
        Answer2_PartC: '',
        Answer3_PartC: '',
        // ... other PartC questions
    });

    const [formDataPartD, setFormDataPartD] = useState({
        Answer1_PartD: '',
        Answer2_PartD: '',
        Answer3_PartD: '',
        Answer4_PartD: '',
        Answer5_PartD: '',
        Answer6_PartD: '',
        Answer7_PartD: '',
        Answer8_PartD: '',
        Answer9_PartD: '',
        Answer10_PartD: '',
        // ... other PartD questions
    });


    const handleChangePartA = (event) => {
        const { name, value } = event.target;
        setFormDataPartA({
            ...formDataPartA,
            [name]: value,
        });
    };

    const handleChangePartB = (event) => {
        const { name, value } = event.target;
        setFormDataPartB({
            ...formDataPartB,
            [name]: value,
        });
    };

    const handleChangePartC = (event) => {
        const { name, value } = event.target;
        setFormDataPartC({
            ...formDataPartC,
            [name]: value,
        });
    };

    const handleChangePartD = (event) => {
        const { name, value } = event.target;
        setFormDataPartD({
            ...formDataPartD,
            [name]: value,
        });
    };

    const Submit = async (event) => {
        try {
            if (event) {
                event.preventDefault();
            }
            const API = `http://localhost:4000/api/lastround/${id}`; // Include the ID in the API URL

            // Merge all form data objects into one
            const formData = {
                ...formDataPartA,
                ...formDataPartB,
                ...formDataPartC,
                ...formDataPartD,
            };

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
            <Box className='top-form' component="form" >
                {/* <TimmerCompo targetTime={targetTime} onTimeout={Submit} /> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <div className='section A'>
                            <h3>PART A</h3>
                            {sectionA1.map((questionData, index) => (
                                <FormControl key={index} className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                    <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        Q {index + 1}:- {questionData.question}
                                    </FormLabel>
                                    {questionData.options.map((option, optionIndex) => (
                                        <FormControlLabel
                                            key={optionIndex}
                                            control={
                                                <Checkbox
                                                    name={questionData.PartA}
                                                    value={(optionIndex + 1).toString()} // Set the value to the selected option (e.g., "1" for option A)
                                                    onChange={handleChangePartA}
                                                />
                                            }
                                            label={option}
                                        />
                                    ))}
                                </FormControl>
                            ))}
                        </div>
                        <div className='section B'>
                            <h3>PART B</h3>
                            {sectionB.map((question, index) => (
                                <FormControl key={index} className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                    <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        Q {index + 1}:- {question.Question}
                                    </FormLabel>
                                    <Textarea
                                        required
                                        id={`outlined-required-${index}`}
                                        label="Answer"
                                        name={question.PartB}
                                        value={formDataPartB[question.PartB]}
                                        onChange={handleChangePartB}
                                        aria-label="maximum height"
                                        minRows={3}
                                        placeholder="maximum 250 Word"
                                        onPaste={(e) => e.preventDefault()}
                                    />
                                </FormControl>
                            ))}
                        </div>
                        <div className='section C'>
                            <h3>PART C</h3>
                            {sectionC.map((question, index) => (
                                <FormControl key={index} className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                    <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        Q {index + 1}:- {question.Question}
                                    </FormLabel>
                                    <Textarea
                                        required
                                        id={`outlined-required-${index}`}
                                        label="Answer"
                                        name={question.PartC}
                                        value={formDataPartC[question.PartC]}
                                        onChange={handleChangePartC}
                                        aria-label="maximum height"
                                        minRows={3}
                                        placeholder="maximum 250 Word"
                                        onPaste={(e) => e.preventDefault()}
                                    />
                                </FormControl>
                            ))}
                        </div>
                        <div className='section D'>
                            <h3>PART D</h3>
                            {sectionD.map((questionData, index) => (
                                <FormControl key={index} className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                    <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        Q {index + 1}:- {questionData.question}
                                    </FormLabel>
                                    {questionData.options.map((option, optionIndex) => (
                                        <FormControlLabel
                                            key={optionIndex}
                                            control={
                                                <Checkbox
                                                    name={questionData.PartD}
                                                    value={(optionIndex + 1).toString()} // Set the value to the selected option (e.g., "1" for option A)
                                                    onChange={handleChangePartD}
                                                />
                                            }
                                            label={option}
                                        />
                                    ))}
                                </FormControl>
                            ))}

                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%' }} className="bottom-form">
                <Link className='back-link' to={`/progresc/${id}`}>Back</Link>
                <Button className="blue-btn" onClick={Submit}>Submit</Button>
            </Box>
        </>
    );
};

export default Practices;
