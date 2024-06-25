import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from './questions.json';
import Question from './Question';

const PsychometricTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleSubmit = (questionId, answer) => {
    console.log(`Answer submitted for question ${questionId}: ${answer}`);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log('Assessment completed');
      navigate('/PsychometricSuccess');
    }
  };

  return (
    <div>
      {questions.length > 0 && currentQuestionIndex < questions.length && (
        <Question
          key={questions[currentQuestionIndex].questionId}
          question={questions[currentQuestionIndex]}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default PsychometricTest;
