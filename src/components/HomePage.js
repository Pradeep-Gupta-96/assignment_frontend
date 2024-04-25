import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import videobanner from '../images/main-banner.mp4'
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleIcon from '@mui/icons-material/Article';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';
import Footer from './Footer';
import { Baseurl } from '../common/Url';

// import "particles/app.js"


const HomePage = () => {
    const navigate = useNavigate()

    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            const API = `${Baseurl}/insertTimestampOnly`;

            const response = await fetch(API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                const id = data.todo.id; // Assuming the response includes the ID

                // Save the ID in local storage
                localStorage.setItem("id", id);

                // Set a flag in local storage to indicate that step A is completed
                localStorage.setItem("yashodanandA", "yashodanandA");

                // Redirect to the '/testboard' route
                navigate('/testboard');
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
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
            <div className="banner">
                <div className="bound">
                    <div className="banner-box">
                        <video
                            autoPlay
                            loop
                            muted
                        >
                            <source src={videobanner} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="bound">
                    <Grid className="main-content" container spacing={2}>
                        <Grid item xs={12} md={9}>
                            <div className='shadow-remove left-sec'>
                                <div className="title-box">
                                    <h2 className="css-7papts">Assessment Intern</h2>
                                    <Button className="blue-btn" onClick={onSubmit} >Apply</Button>
                                </div>
                                <div className="content-box">
                                    <div className="c-box-1">
                                        <div className="loction"><LocationOnOutlinedIcon />Gurugram</div>
                                        <div className="time"><WorkOutlineIcon /> Full time</div>
                                        <div className="other-info">
                                            <div className="date"><AccessTimeIcon /> Posted 7 Days Ago</div>
                                            {/* <div className="number"><ArticleIcon /> R0026172</div> */}
                                        </div>
                                    </div>
                                    <div className="c-box-2">
                                        <h3>Job Description:</h3>
                                        <p>As an Assessment Intern at Areness, you will have the unique opportunity to gain invaluable experience in various areas of law. We are looking for a dedicated law fresher who is committed to providing exceptional legal research and eager to learn from experienced attorneys. </p>
                                        <h3>Key Responsibilities:</h3>
                                        <ol>
                                            <li><strong>Legal Research:</strong> Conduct legal research to support senior attorneys and clients in various legal matters. Stay updated on relevant laws, regulations, and case precedents.</li>
                                            <li><strong>Documentation:</strong> Assist in drafting legal documents, contracts, and agreements under the guidance of senior attorneys. Ensure accuracy and compliance with legal standards.</li>
                                            <li><strong>Court Appearances:</strong> Attend court proceedings and hearings as required.</li>
                                            <li><strong>Case Analysis:</strong> Analyse legal issues and provide recommendations to senior attorneys. Contribute to the development of case strategies. </li>
                                        </ol>
                                        <h3>Qualifications:</h3>
                                        <ol>
                                            <li>Bachelor’s degree in Law (LLB or equivalent)</li>
                                            <li>Strong analytical and research skills.</li>
                                            <li>Excellent written and verbal communication skills.</li>
                                            <li>Professionalism and commitment to maintaining client confidentiality.</li>
                                        </ol>
                                        <h3>Skills:</h3>
                                        <ul>
                                            <li>Legal Knowledge</li>
                                            <li>Research Skills</li>
                                            <li>Legal Writing</li>
                                            <li>Analytical Skills</li>
                                            <li>Negotiation</li>
                                            <li>Networking </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <div className='shadow-remove right-sce'>
                                <h3>About</h3>
                                <div className="arenesss-logo"><img src={logo} alt="Logo" /></div>
                                <p>Areness is a prestigious firm renowned for its exceptional legal and consultancy services. Our unwavering commitment to business advisory, establishing new ventures, and delivering practical solutions backed by thorough research, has propelled us to unprecedented heights.</p>
                                <p>At Areness, our dedicated teams are driven by their passion for excellence. They uphold the highest standards of professional ethics and demonstrate unwavering compassion for society as a whole. Building the best team is essential to our success. We value the power of collaboration, recognizing that successful outcomes are achieved through the collective efforts of diverse teams with a mix of sector, product, and jurisdictional knowledge. By bringing together the right expertise, we develop practical and effective solutions for our clients.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default HomePage