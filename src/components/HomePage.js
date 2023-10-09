import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleIcon from '@mui/icons-material/Article';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const HomePage = () => {
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
                    <div className="banner-box">Main Banner Coming Soon!!</div>
                </div>
            </div>
            <div className="page-content">
                <div className="bound">
                    <Grid className="main-content" container spacing={2}>
                        <Grid item xs={12} md={9}>
                            <div className='shadow-remove left-sec'>
                                <div className="title-box">
                                    <h2 className="css-7papts">Assessment Intern</h2>
                                    <a className="blue-btn" href="#">Apply</a>
                                </div>
                                <div className="content-box">
                                    <div className="c-box-1">
                                        <div className="loction"><LocationOnOutlinedIcon />Gurugram</div>
                                        <div className="other-info">
                                            <div className="time"><WorkOutlineIcon /> Full time</div>
                                            <div className="date"><AccessTimeIcon /> Posted 7 Days Ago</div>
                                            <div className="number"><ArticleIcon /> R0026172</div>
                                        </div>
                                    </div>
                                    <div className="c-box-2">
                                        <h3>Job Description:</h3>
                                        <p>We're looking for an early stage career marketing professional to work with our team on all things marketing, including managing Purchase Orders and their payment, assisting with supplier support for all items related to conferences and events. To be on point for all new hire equipment and onboarding. To assist with meeting scheduling and support as determined by the team to be needed. The candidate will experience all areas of a well functioning marketing department including identity marketing - visual and verbal brand, digital marketing and market awareness. marketing for sales- lead generation and activities associated with communication and product marketing - the creation of message maps, asset matrix and a calendar of events.</p>
                                        <h3>Responsibilities</h3>
                                        <ul>
                                            <li>Assist in editing content to post to the website, helping to identify content to be updated, and routing website inquiries to the appropriate teams</li>
                                            <li>Perform market and industry research, competitive analyses, and business trend reporting</li>
                                            <li>Prepare marketing activity and ROI reports by collecting and summarizing data to measure and assess program success</li>
                                            <li>Support internal collaboration capabilities and intranet sites</li>
                                            <li>Support virtual and in-person event planning, management, and follow-up</li>
                                            <li>Assist in the implementation of the company’s brand campaigns</li>
                                            <li>Support invoice submission and vendor onboarding processes</li>
                                            <li>Expand knowledge and competencies through training and research</li>
                                            <li>Support the Marketing practice with additional projects as needed.</li>
                                        </ul>
                                        <h3>Requirements</h3>
                                        <ul>
                                            <li>Bachelor’s degree in marketing, business, or communications</li>
                                            <li>Proficiency in Microsoft Office Suite: Word, PowerPoint, and Excel</li>
                                            <li>Knowledge of traditional and digital marketing, business communications, and social media marketing</li>
                                            <li>Excellent writing, communication, and presentation skills</li>
                                            <li>Experience with research projects and business analytics</li>
                                            <li>Highly organized with strong attention to detail and excellent project management skills</li>
                                            <li>Ability to work remotely with a team, communicating effectively and managing time to meet deadlines</li>
                                            <li>Solid work ethic, integrity, and reliability</li>
                                        </ul>
                                        <h3>Preferred Qualifications</h3>
                                        <ul>
                                            <li>Familiarity with content management systems (CMS) and customer relationship management (CRM) tools</li>
                                            <li>Working knowledge of HTML and email software</li>
                                            <li>Working knowledge of Adobe Creative Suite: InDesign, Photoshop, and Illustrator</li>
                                        </ul>
                                        <p>If you like wild growth and working with happy, enthusiastic over-achievers, you'll enjoy your career with us!</p>
                                        <p>It is Epiq’s policy to comply with all applicable equal employment opportunity laws by making all employment decisions without unlawful regard or consideration of any individual’s race, religion, ethnicity, color, sex, sexual orientation, gender identity or expressions, transgender status, sexual and other reproductive health decisions, marital status, age, national origin, genetic information, ancestry, citizenship, physical or mental disability, veteran or family status or any other basis protected by applicable national, federal, state, provincial or local law. Epiq’s policy prohibits unlawful discrimination based on any of these impermissible bases, as well as any bases or grounds protected by applicable law in each jurisdiction. In addition Epiq will take affirmative action for minorities, women, covered veterans and individuals with disabilities. If you need assistance or an accommodation during the application process because of a disability, it is available upon request. Epiq is pleased to provide such assistance and no applicant will be penalized as a result of such a request.  Pursuant to relevant law, where applicable, Epiq will consider for employment qualified applicants with arrest and conviction records.</p>
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
            <div className="footer">
                <div className="bound">
                    <div className="social-icon">
                        <a href="https://www.facebook.com/arenesslaw" target="_blank"><FacebookIcon /></a>
                        <a href="https://twitter.com/Arenesslaw" target="_blank"><TwitterIcon /></a>
                        <a href="https://www.linkedin.com/company/areness" target="_blank"><LinkedInIcon /></a>
                        <a href="https://www.instagram.com/areness_law/" target="_blank"><InstagramIcon /></a>
                    </div>
                    <div className="copyright">© 2023 Areness Law, All Rights Reserved</div>
                </div>
            </div>
        </>
    )
}

export default HomePage