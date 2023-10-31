import React, { useState } from 'react';
import { FormControl, FormLabel } from '@mui/material';
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
            <div>
                <h2>section A</h2>
                <div className='section A'>
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
            </div>
            <div>
                <h2>section B</h2>
                <div className='section B'>
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
            </div>
            <div>
                <h2>section C</h2>
                <div className='section C'>
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
            </div>
        </>
    );
};

export default Practices;
