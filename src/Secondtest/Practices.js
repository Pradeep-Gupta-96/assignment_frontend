import React, { useState } from 'react';
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { allQuestionsA1 } from './Questionpart/PartA';
import { allQuestionsB } from './Questionpart/PartB';
import { allQuestionsC } from './Questionpart/PartC';
import { allQuestionsD } from './Questionpart/PartD';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import videobg from '../images/background-video.mp4';

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
    const sectionA1 = getRandomQuestions(allQuestionsA1, 5);
    const sectionB = getRandomQuestions(allQuestionsB, 2);
    const sectionC = getRandomQuestions(allQuestionsC, 2);
    const sectionD = getRandomQuestions(allQuestionsD, 6);

    const [formData, setFormData] = useState({
        Answer1: '',
        Answer2: '',
        Answer3: '',
        Answer4: '',
        Answer5: '',
        Answer6: '',
        Answer7: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    console.log(formData)

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
                        <h3>Assessment Intern</h3>
                        <Box className='top-form' component="form" >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <div className='section A'>
                                        <h3>PART A</h3>
                                        {sectionA1.map((questionData, index) => (
                                            <FormControl key={index} className="question-row" sx={{ marginBottom: "25px" }} fullWidth>
                                                <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                                    Q {index + 1}:- {questionData.question}
                                                </FormLabel>
                                                {questionData.options.map((option, optionIndex) => (
                                                    <FormControlLabel
                                                        key={optionIndex}
                                                        name={`Answer${index + optionIndex + 1}`}
                                                        value={(optionIndex + 1).toString()}
                                                        onChange={handleChange}
                                                        control={<Checkbox />}
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
                                                    Q {index + 1}:- {question}
                                                </FormLabel>
                                                <Textarea
                                                    required
                                                    id={`outlined-required-${index}`}
                                                    label="Answer"
                                                    name={`Answer${index + sectionA1.length + 1}`}
                                                    value={formData[`Answer${index + sectionA1.length + 1}`]}
                                                    onChange={handleChange}
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
                                                    Q {index + 1}:- {question}
                                                </FormLabel>
                                                <Textarea
                                                    required
                                                    id={`outlined-required-${index}`}
                                                    label="Answer"
                                                    name={`Answer${index + sectionA1.length + sectionB.length + 1}`}
                                                    value={formData[`Answer${index + sectionA1.length + sectionB.length + 1}`]}
                                                    onChange={handleChange}
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
                                            <FormControl key={index} className="question-row" sx={{ marginBottom: "25px" }} fullWidth>
                                                <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                                    Q {index + 1}:-  {questionData.question}
                                                </FormLabel>
                                                {questionData.options.map((option, optionIndex) => (
                                                    <FormControlLabel
                                                        key={optionIndex}
                                                        name={`Answer${index + sectionA1.length + sectionB.length + sectionC.length + optionIndex + 1}`}
                                                        value={(optionIndex + 1).toString()}
                                                        onChange={handleChange}
                                                        control={<Checkbox />}
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
                            <Button className="blue-btn"></Button>
                            <Button className="blue-btn">Submit</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Practices;
