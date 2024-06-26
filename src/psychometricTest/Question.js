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
            <div className='cd-time'>Time left: <span>{timeLeft}</span> Seconds</div>
            {showQuestionText && <div className='question' dangerouslySetInnerHTML={{ __html: question.questionText }}></div>}
            {showOptions && (
                <div className='Ans-row fadeInRight'>
                    <h4 style={{ marginTop: "0px" }}><span>Ans:</span> Write your answer here</h4>
                    <div className='checkbox-row test-checkbox'>
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
                        {question.type === 'input' && question.inputType === 'text' && (
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        )}
                    </div>
                    <div className='input-row'>
                        {question.type === 'input' && question.inputType === 'textarea' && (
                            <textarea
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            ></textarea>
                        )}
                    </div>

                    <button onClick={handleSubmit}>Submit</button>
                </div>
            )}

        </div>
    );
};

export default Question;
