import React, { useState } from 'react';
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button} from '@mui/material';
import { FormControl, FormLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

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

const allQuestionsA = ['question 1', 'question 2', 'question 3', 'question 4', 'question 5'];
const allQuestionsB = ['question 1', 'question 2', 'question 3', 'question 4', 'question 5', 'question 6'];
const allQuestionsC = ['question 1', 'question 2', 'question 3'];

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
    const sectionA = getRandomQuestions(allQuestionsA, 2);
    const sectionB = getRandomQuestions(allQuestionsB, 3);
    const sectionC = getRandomQuestions(allQuestionsC, 1);

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
                        <h3>Assessment Intern</h3>
                        <Box className='top-form' component="form" >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <div className='section A'>
                                        <h3>PART A</h3>
                                        {sectionA.map((question, index) => (
                                            <FormControl key={index} className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                                <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                                    {question}
                                                </FormLabel>
                                                <Textarea
                                                    required
                                                    id={`outlined-required-${index}`}
                                                    label="Answer"
                                                    name={`Answer${index + 1}`}
                                                    value={formData[`Answer${index + 1}`]}
                                                    onChange={handleChange}
                                                    aria-label="maximum height"
                                                    minRows={3}
                                                    placeholder="maximum 250 Word"
                                                    onPaste={(e) => e.preventDefault()}
                                                />
                                            </FormControl>
                                        ))}
                                    </div>
                                    <div className='section B'>
                                        <h3>PART B</h3>
                                        {sectionB.map((question, index) => (
                                            <FormControl key={index} className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important" }} fullWidth>
                                                <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                                    {question}
                                                </FormLabel>
                                                <Textarea
                                                    required
                                                    id={`outlined-required-${index}`}
                                                    label="Answer"
                                                    name={`Answer${index + sectionA.length + 1}`}
                                                    value={formData[`Answer${index + sectionA.length + 1}`]}
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
                                                    {question}
                                                </FormLabel>
                                                <Textarea
                                                    required
                                                    id={`outlined-required-${index}`}
                                                    label="Answer"
                                                    name={`Answer${index + sectionA.length + sectionB.length + 1}`}
                                                    value={formData[`Answer${index + sectionA.length + sectionB.length + 1}`]}
                                                    onChange={handleChange}
                                                    aria-label="maximum height"
                                                    minRows={3}
                                                    placeholder="maximum 250 Word"
                                                    onPaste={(e) => e.preventDefault()}
                                                />
                                            </FormControl>
                                        ))}
                                    </div>

                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Button className="blue-btn">Submit</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Practices;
