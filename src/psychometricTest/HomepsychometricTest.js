import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import videobg from '../images/background-video.mp4';
import Pfooter from "./Pfooter";

const HomepsychometricTest = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/psychometric-test-start");
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
                  <div className="eduction p-details ps-test">
                    <label
                      style={{ marginBottom: "10px", display: "inline-block" }}
                      htmlFor=""
                    >
                      Basic Details
                    </label>
                    <div className="edu-class">
                      <div className="class-box">
                        <TextField
                          required
                          id="outlined-required"
                          label="Name"
                          name="name"
                          fullWidth
                        />
                      </div>
                      <div className="class-box">
                        <TextField
                          required
                          id="outlined-required"
                          label="Email"
                          name="email"
                          fullWidth
                        />
                      </div>
                      <div className="class-box">
                        <TextField
                          required
                          id="outlined-required"
                          label="Phone"
                          name="phone"
                          fullWidth
                        />
                      </div>
                      <div className="class-box">
                        <TextField
                          required
                          id="outlined-required"
                          label="Role applied for Department"
                          name="role"
                          fullWidth
                        />
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Box sx={{ width: "100%" }} className="bottom-form">
                <Link className="back-link">Back</Link>
                <Button onClick={submit} type="submit" className="blue-btn">
                  Start Test
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default HomepsychometricTest;
