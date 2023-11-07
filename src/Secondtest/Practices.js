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
import {
    Entertainment_and_Media_Law,
    Capital_Market_Securities,
    Banking_Law,
    Mediation_and_Conciliation,
    Merger_Acquisition,
    Sports_Law,
    Intellectual_Property_Rights,
    Labour_Laws,
    International_Business_Law,
    Startup_in_India_related_legal_Question,
    Insurance_Law,
    Joint_Venture_Public_private_partnership_and_MSME,
    Tax_Law,
    ARBITRATION,
    IBC,
    Competitive_and_Anti_Trust,
    AVIATION_LAW,
    Environment,
    Public_Policy,
} from './Questionpart/SkillBasedQuestion';

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

    function getQuestionsForFieldOfInterest(fieldOfInterest) {
        switch (fieldOfInterest) {
            case 'Entertainment_and_Media_Law':
                return Entertainment_and_Media_Law;
            case 'Capital_Market_Securities':
                return Capital_Market_Securities;
            case 'Banking_Law':
                return Banking_Law;
            case 'Mediation_and_Conciliation':
                return Mediation_and_Conciliation;
            case 'Merger_Acquisition':
                return Merger_Acquisition;
            case 'Sports_Law':
                return Sports_Law;
            case 'Intellectual_Property_Rights':
                return Intellectual_Property_Rights;
            case 'Labour_Laws':
                return Labour_Laws;
            case 'International_Business_Law':
                return International_Business_Law;
            case 'Startup_in_India_related_legal_Question':
                return Startup_in_India_related_legal_Question;
            case 'Insurance_Law':
                return Insurance_Law;
            case 'Joint_Venture_Public_private_partnership_and_MSME':
                return Joint_Venture_Public_private_partnership_and_MSME;
            case 'Tax_Law':
                return Tax_Law;
            case 'ARBITRATION':
                return ARBITRATION;
            case 'IBC':
                return IBC;
            case 'Competitive_and_Anti_Trust':
                return Competitive_and_Anti_Trust;
            case 'AVIATION_LAW':
                return AVIATION_LAW;
            case 'Environment':
                return Environment;
            case 'Public_Policy':
                return Public_Policy;
            default:
                // Default to Entertainment_and_Media_Law or any other default you prefer
                return Entertainment_and_Media_Law;
        }
    }


    const fieldOfInterest = localStorage.getItem("field_of_interest");
    const selectedQuestions = getQuestionsForFieldOfInterest(fieldOfInterest);
    const [Sillbased] = useState(() => getRandomQuestions(selectedQuestions, 3));

    const [sectionA1] = useState(() => getRandomQuestions(allQuestionsA1, 3));
    const [sectionB] = useState(() => getRandomQuestions(allQuestionsB, 2));
    const [sectionC] = useState(() => getRandomQuestions(allQuestionsC, 2));
    const [sectionD] = useState(() => getRandomQuestions(allQuestionsD, 7));

    const id = localStorage.getItem("id");
    const navigate = useNavigate()

    const [formDataInterestbased, setformDataInterestbased] = useState({
        answer1_entertainment_and_media_law: '',
        answer2_entertainment_and_media_law: '',
        answer3_entertainment_and_media_law: '',
        answer1_capital_market_securities: '',
        answer1_banking_law: '',
        answer2_banking_law: '',
        answer3_banking_law: '',
        answer1_mediation_and_conciliation: '',
        answer2_mediation_and_conciliation: '',
        answer3_mediation_and_conciliation: '',
        answer1_merger_acquisition: '',
        answer2_merger_acquisition: '',
        answer3_merger_acquisition: '',
        answer1_sports_law: '',
        answer2_sports_law: '',
        answer3_sports_law: '',
        answer1_intellectual_property_rights: '',
        answer2_intellectual_property_rights: '',
        answer3_intellectual_property_rights: '',
        answer1_labour_laws: '',
        answer2_labour_laws: '',
        answer3_labour_laws: '',
        answer1_international_business_law: '',
        answer2_international_business_law: '',
        answer3_international_business_law: '',
        answer1_startup_in_india_related_legal_question: '',
        answer2_startup_in_india_related_legal_question: '',
        answer3_startup_in_india_related_legal_question: '',
        answer1_insurance_law: '',
        answer2_insurance_law: '',
        answer3_insurance_law: '',
        answer1_joint_venture_public_private_partnership_and_msme: '',
        answer2_joint_venture_public_private_partnership_and_msme: '',
        answer3_joint_venture_public_private_partnership_and_msme: '',
        answer1_tax_law: '',
        answer2_tax_law: '',
        answer3_tax_law: '',
        answer1_arbitration: '',
        answer2_arbitration: '',
        answer3_arbitration: '',
        answer4_arbitration: '',
        answer5_arbitration: '',
        answer1_ibc: '',
        answer2_ibc: '',
        answer3_ibc: '',
        answer1_competitive_and_anti_trust: '',
        answer1_aviation_law: '',
        answer2_aviation_law: '',
        answer3_aviation_law: '',
        answer4_aviation_law: '',
        answer1_environment: '',
        answer2_environment: '',
        answer3_environment: '',
        answer4_environment: '',
        answer5_environment: '',
        answer1_public_policy: '',
        answer2_public_policy: '',
    });

    const [formDataPartA, setFormDataPartA] = useState({
        answer1_part_a: '',
        answer2_part_a: '',
        answer3_part_a: '',
        answer4_part_a: '',
        answer5_part_a: '',
        answer6_part_a: '',
        answer7_part_a: '',
        answer8_part_a: '',
        answer9_part_a: '',
        answer10_part_a: '',
        answer11_part_a: '',
        answer12_part_a: '',
        answer13_part_a: '',
        answer14_part_a: '',
        // ... other PartA questions
    });

    const [formDataPartB, setFormDataPartB] = useState({
        answer1_part_b: '',
        answer2_part_b: '',
        answer3_part_b: '',
        // ... other PartB questions
    });

    const [formDataPartC, setFormDataPartC] = useState({
        answer1_part_c: '',
        answer2_part_c: '',
        answer3_part_c: '',
        // ... other PartC questions
    });

    const [formDataPartD, setFormDataPartD] = useState({
        answer1_part_d: '',
        answer2_part_d: '',
        answer3_part_d: '',
        answer4_part_d: '',
        answer5_part_d: '',
        answer6_part_d: '',
        answer7_part_d: '',
        answer8_part_d: '',
        answer9_part_d: '',
        answer10_part_d: '',
        // ... other PartD questions
    });


    const handleChangeInterestbased = (event) => {
        const { name, value } = event.target;
        setformDataInterestbased({
            ...formDataInterestbased,
            [name]: value,
        });
    };

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
                ...formDataInterestbased,
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
                // clear localstorage
                localStorage.clear()
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
                <TimmerCompo targetTime={targetTime} onTimeout={Submit} />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                        <div className='section A'>
                            <h3>PART A</h3>
                            {Sillbased.map((questionData, index) => (
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
                                                    onChange={handleChangeInterestbased}
                                                />
                                            }
                                            label={option}
                                        />
                                    ))}
                                </FormControl>
                            ))}
                            {sectionA1.map((questionData, index) => (
                                <FormControl key={index} className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                    <FormLabel sx={{ marginBottom: "15px" }} component="legend">
                                        Q {index + 4}:- {questionData.question}
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
                                        placeholder="Maximum 250 Words"
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
                                        placeholder="Maximum 250 Words"
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
