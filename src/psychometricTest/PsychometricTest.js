import React, { useState, useEffect } from "react";
import questionsData from "./questions.json";
import Question from "./Question";
import Header from "./Header";

import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import videobg from "../images/background-video.mp4";
import Pfooter from "./Pfooter";

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
      console.log("Assessment completed");
      navigate("/PsychometricSuccess");
    }
  };

  return (
    <>
      <Header />
      <div className="form-sce">
        <video className="background-video" autoPlay loop muted>
          {" "}
          <source src={videobg} type="video/mp4" />{" "}
        </video>
        <div className="bound">
          <div className="form-box">
            {/* <Link className="back-link" to="/">Back to Job Posting</Link> */}
            <h3>Welcome to Psychometric Test</h3>
            <p className="d-candit">
              <strong>Dear Candidate,</strong>
              <br />
              As part of our onboarding process, we kindly ask you to spare some
              time to complete the attached set of questions. This will help us
              better understand your skills and fit for our team. Thank you for
              your cooperation.
            </p>
            <h5>
              Thank you for your interest in our psychometric test. Please fill
              out the form below to get started.
            </h5>
            <Box className="top-form" component="form">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <div className="test-sec">
                    {questions.length > 0 &&
                      currentQuestionIndex < questions.length && (
                        <Question
                          key={questions[currentQuestionIndex].questionId}
                          question={questions[currentQuestionIndex]}
                          onSubmit={handleSubmit}
                        />
                      )}
                  </div>
                </Grid>
              </Grid>
            </Box>
            <div class="test-sec">
              <div class="qsn-row">
                <div class="cd-time">
                  Time left: <span>14</span> Seconds
                </div>
                <div class="question">
                  <b>Q3.</b> <span class="sec-bg">Section C:</span>{" "}
                  <strong>Situation Based Questions</strong>
                  <ol>
                    <li>
                      <strong>
                        You will be given a series of 10 hypothetical
                        situations, each described in a single line. You are
                        required to give your response to the given situation in
                        a line or two. The time given is 10 minutes to read and
                        respond to all 10 situations
                      </strong>
                      .
                    </li>
                    <ul>
                      <li>
                        He is walking down the road and he sees a stranger
                        collapsed on the road. What would he do?
                      </li>
                      <li>
                        He is standing in a queue and someone tries to jump
                        ahead of him. How would he react?
                      </li>
                      <li>
                        He is in a situation where his team members are not
                        cooperating. What steps would he take?
                      </li>
                      <li>
                        He is in a situation where he is asked to do something
                        that he is not comfortable with. What would he do?
                      </li>
                      <li>
                        He is in a situation where he is running late for an
                        important meeting. What steps would he take?
                      </li>
                      <li>
                        He is in a situation where he is asked to do something
                        illegal. What would he do?
                      </li>
                      <li>
                        He is in a situation where he is accused of something
                        that he did not do. How would he react?
                      </li>
                      <li>
                        He is in a situation where his supervisor is unfair
                        towards him. What steps would he take?
                      </li>
                      <li>
                        He is in a situation where he has to handle a difficult
                        customer. How would he handle the situation?
                      </li>
                      <li>
                        He is in a situation where he has to give bad news to
                        someone. What approach would he take?
                      </li>
                    </ul>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pfooter />
    </>
  );
};

export default PsychometricTest;
