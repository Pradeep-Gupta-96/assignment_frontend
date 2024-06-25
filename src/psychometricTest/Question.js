import React, { useEffect, useState } from 'react';

const Question = ({ question, onSubmit }) => {
    const [timeLeft, setTimeLeft] = useState(20);
    const [answer, setAnswer] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [showQuestionText, setShowQuestionText] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        const showOptionsTimeout = setTimeout(() => {
            setShowOptions(true);
            setShowQuestionText(false); // Hide question text after 2 seconds
            setTimeLeft(60); // Reset timeLeft to 2 seconds for answering
        }, 20000);

        const autoSubmitTimeout = setTimeout(() => {
            onSubmit(question.questionId, answer);
        }, 80000);

        return () => {
            clearInterval(timer);
            clearTimeout(showOptionsTimeout);
            clearTimeout(autoSubmitTimeout);
        };
    }, [question, answer, onSubmit]);

    useEffect(() => {
        if (timeLeft === 0) {
            if (!showOptions) {
                setShowOptions(true);
                setShowQuestionText(false);
                setTimeLeft(60);
            } else {
                onSubmit(question.questionId, answer);
            }
        }
    }, [timeLeft, showOptions, question.questionId, answer, onSubmit]);

    const handleSubmit = () => {
        onSubmit(question.questionId, answer);
    };

    return (
        <div className='qsn-row'>
            <div className='question'>{showQuestionText && <h3>{question.questionText}</h3>}</div>
            {showOptions && (
                <div className='Ans-row'>
                    <div className='checkbox-row'>
                        {question.type === 'checkbox' &&
                            question.options.map((option) => (
                                <label key={option.optionId}>
                                    <input
                                        type="checkbox"
                                        value={option.optionText}
                                        onChange={(e) => setAnswer(e.target.value)}
                                    />
                                    {option.optionText}
                                </label>
                            ))}
                    </div>
                    <div className='input-row'>
                        {question.type === 'input' && (
                            <input
                                type={question.inputType}
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        )}
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}
            <p>Time left: {timeLeft} seconds</p>
        </div>
    );
};

export default Question;
