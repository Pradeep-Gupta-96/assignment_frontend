import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

  
const FinalStep = () => {
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
                                    <h3>PART A</h3>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 1. Match the following case laws with issues that were adjudicated in them.</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Committee of Creditors Essar Steel India Limited v. Satish Kumar Gupta</li>  
                                                <li className="op1">Bank of Baroda v. MBL Infrastructure Limited an Ors.</li>
                                                <li className="op1">Mobilox Innovations Private Limited</li>
                                                <li className="op1">K. Sashidhar v. Indian Overseas Bank</li>
                                                <li className="op1">Kirusa Software Private Limited</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Resolution Applicants could be disqualified from submitting a Resolution Plan being inconsistent with Section 29A of the Insolvency and Bankruptcy Code, 2016.</li>
                                                <li className="ans1">Whether judicial interpretation by the apex court of our country over Section 29A of the Insolvency and Bankruptcy Code, 2016 as amended by the Act 26 of 2018 was justified or not.</li>
                                                <li className="ans1">Whether the maintainability of an application filed by an Operational Creditor under Section 8(2)(a) of the Insolvency and Bankruptcy Code, 2016 demands interpretation of the expression ‘dispute’ and the ‘existence of dispute’.</li>
                                                <li className="ans1">Whether decision taken by the Committee of Creditor (CoC) on approval of a resolution plan be scrutinized by judiciary.</li>
                                            </ul>
                                        </div>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="a)	i – (a); ii - (b); iii. - (c); iv - (d); v. – (e)" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="b)	i. – (b); ii. – (a); iii. – (c); iv – (e); v. – (d) " />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="c)	i. – (a); ii. – (e); iii. – (b); iv. – (c); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="d)	i. – (b); ii. – (a); iii. – (d); iv. – (c); v. – (e)" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 2. Choose the most appropriate answer <br />Which of the following activity/activities are invalid under Section 3 of the anti-competitive agreement of the Competition Act, 2002  </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	An agreement containing a clause regarding services likely to cause an appreciable adverse effect on competition in India" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	An agreement containing a clause that there will be a discontinuation in the supply of goods if the dealer is also dealing in products of supplier’s competition." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	An agreement containing a clause that determines purchase or sale prices." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	(i) and (ii)" />
                                        <FormControlLabel name='PreferredLocation' value={"5"} control={<Checkbox />} label="E.	(iii) only" />
                                        <FormControlLabel name='PreferredLocation' value={"6"} control={<Checkbox />} label="F.	(ii) and (iii)" />
                                        <FormControlLabel name='PreferredLocation' value={"7"} control={<Checkbox />} label="G.	None of the above" />
                                        <FormControlLabel name='PreferredLocation' value={"8"} control={<Checkbox />} label="H.	All of the above" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 3. Match the provisions of the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act 2002 correctly.</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 13</li>  
                                                <li className="op1">Section 17</li>
                                                <li className="op1">Section 27</li>
                                                <li className="op1">Section 31</li>
                                                <li className="op1">Section 34</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Enforcement of security interest</li>
                                                <li className="ans1">Application against measures to recover secured debts</li>
                                                <li className="ans1">Penalties</li>
                                                <li className="ans1">Provisions of the Act not to apply in certain cases</li>
                                                <li className="ans1">Civil court not to have jurisdiction</li>
                                            </ul>
                                        </div>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="a)	i – (a); ii - (b); iii. - (c); iv - (d); v. – (e)" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="b)	i. – (b); ii. – (a); iii. – (c); iv – (e); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="c)	i. – (a); ii. – (e); iii. – (b); iv. – (c); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="d)	i. – (b); ii. – (a); iii. – (d); iv. – (c); v. – (e)" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 4. Choose the most appropriate answer:<br /> Which of the following acts governs the capital market and securities?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	The Depositories Act, 1996" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Securities Contract (Regulation) Act, 1956" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Security and Exchange Board of India Act, 1992" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	(ii) and (iii)" />
                                        <FormControlLabel name='PreferredLocation' value={"5"} control={<Checkbox />} label="E.	All of the above" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 5. Match the provisions from the Insolvency and Bankruptcy Code, 2016:</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 7</li>  
                                                <li className="op1">Section 9</li>
                                                <li className="op1">Section 12A</li>
                                                <li className="op1">Section 21</li>
                                                <li className="op1">Section 31</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Initiation of corporate insolvency resolution process by financial creditor</li>
                                                <li className="ans1">Application for initiation of corporate insolvency resolution process by operational creditor</li>
                                                <li className="ans1">Withdrawal of application admitted under Section 7, 9 and 10</li>
                                                <li className="ans1">Committee of creditor</li>
                                                <li className="ans1">Approval of resolution plan</li>
                                            </ul>
                                        </div>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="e)	i – (a); ii - (b); iii. - (c); iv - (d); v. – (e)" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="f)	i. – (b); ii. – (a); iii. – (c); iv – (e); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="g)	i. – (a); ii. – (e); iii. – (b); iv. – (c); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="h)	i. – (b); ii. – (a); iii. – (d); iv. – (c); v. – (e)" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 6. Choose the most appropriate answer<br />Which of the following activity/activities are invalid under Section 3 of the anti-competitive agreement of the Competition Act, 2002<br />
                                        <br />A. An agreement containing a clause regarding services not likely to cause an appreciable adverse effect on competition in India  
                                        <br />B. An agreement containing a clause that there will be a discontinuation in the supply of goods if the dealer is also dealing in products of the supplier’s competition.  
                                        <br />C. An agreement containing a clause that determines purchase or sale prices.</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	A and B are correct" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	(B) and (C) are correct" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	None of the above" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	All of the above" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 7. Identify the arrangement of provisions under the Companies Act, 2013 to match the following correctly </FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 7</li>  
                                                <li className="op1">Section 24</li>
                                                <li className="op1">Section 43</li>
                                                <li className="op1">Section 166</li>
                                                <li className="op1">Section 232</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Incorporation of company</li>
                                                <li className="ans1">Poer of Securities and Exchange Board to regulate issue and transfer of securities etc.</li>
                                                <li className="ans1">Kinds of share capital</li>
                                                <li className="ans1">Duties of Directors</li>
                                                <li className="ans1">Merger and amalgamation of companies</li>
                                            </ul>
                                        </div>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="a)	i – (a); ii - (b); iii. - (c); iv - (d); v. – (e)" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="b)	i. – (b); ii. – (a); iii. – (c); iv – (e); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="c)	i. – (a); ii. – (e); iii. – (b); iv. – (c); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="d)	i. – (b); ii. – (a); iii. – (d); iv. – (c); v. – (e) " />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 8. In Extradition Treaty, extradition means ______________? </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Order of Indian Court will apply to Indians living elsewhere than India" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Export without double taxation" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Two countries will deport criminals on reciprocal basis to each other" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	None of the above" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 9. An appeal shall lie from the orders (and from no others) to the court authorized by law to hear appeals from original decrees of the court passing the order: </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Setting aside or refusing to set aside an arbitral award under Section 34" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Granting any measures under Section 9" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Refusing to grant any measures under Section 9" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	All of the above" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 10. An arbitral tribunal shall be deemed to have entered upon the reference on the date on which the arbitrator):</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	have received notice, in writing, of their appointment" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	have received notice, orally, of their appointment" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	have received notice of their appointment" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	have given the consent of their appointment" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 11. Chapters I of Part II of the Arbitration and Conciliation Act, 1996 deal with the enforcement of certain foreign awards made under: </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	The Geneva Convention " />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	The New York and Geneva Conventions" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	The New York Convention" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	None of the above." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 12. Match the provisions from the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act 2002 correctly.</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 13</li>  
                                                <li className="op1">Section 17</li>
                                                <li className="op1">Section 27</li>
                                                <li className="op1">Section 31</li>
                                                <li className="op1">Section 34</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Enforcement of security interest</li>
                                                <li className="ans1">Application against measures to recover secured debts</li>
                                                <li className="ans1">Penalties</li>
                                                <li className="ans1">Provisions of the Act not to apply in certain cases</li>
                                                <li className="ans1">Civil court not to have jurisdiction</li>
                                            </ul>
                                        </div>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="a)	i – (a); ii - (b); iii. - (c); iv - (d); v. – (e)" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="b)	i. – (b); ii. – (a); iii. – (c); iv – (e); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="c)	i. – (a); ii. – (e); iii. – (b); iv. – (c); v. – (d)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="d)	i. – (b); ii. – (a); iii. – (d); iv. – (c); v. – (e) " />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 13. Where the place of arbitration is situated in India, the arbitration other than an international commercial arbitration, the arbitral tribunal shall decide the dispute submitted to arbitration:</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	In accordance with the special law for the time being in force in India." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	In accordance with the substantive law for the time being in force in India." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	In accordance with the general law for the time being in force in India." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	In accordance with the common law for the time being in force in India." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 14. An arbitral agreement should NOT have the following: </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	An Arbitration agreement may not be in writing." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Arbitration agreement by the parties to submit to arbitration all or certain disputes." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	The arbitration agreement should have mentioned a place." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Arbitration Agreement should bear a date." />
                                    </FormControl>

                                    <h3>PART B</h3>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 1. Under the brand name “McRest”, Chandra Inns International, Inc. (hereinafter “Chandra Inns”) launched a new chain of economy hotels. The word “Mc” is used as prefix by McDonald’s Corporation (hereinafter “the Corporation”). An immediate action through a letter dated 30.10.2023 was taken by the Corporation demanding Chandra Inns to not to use the name “McRest” because it infringes the family of great reputation of marks used by the Corporation.  <br /> <br />The issue before the court is whether a person driving along the highway would expect this hotel to be associated with the Corporation? Decide the matter by applying relevant statutory provisions on the factual matrix.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 2. Whether the classification between financial creditor and operational creditor is based on intelligible differentia between the two or is it discriminatory or violative of Article 14 of the Constitution of India. Write a brief analysis of the above with the help of relevant case laws.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 3. The role of the Resolution Professional in the revival of the Corporate Debtor is highlighted in detail through relevant provisions of the Insolvency and Bankruptcy Code, 2016 read with the 2016 Regulations. Comment on the statutorily required conduct of Resolution Professional during the entire Corporate Insolvency Resolution Process (CIRP) operations of the Corporate Debtor.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>

                                    <h3>PART C</h3>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 1. Donald Duck wrote a letter to the Chief Justice of India complaining about prevalence of bonded labour system at Disney Land, New Delhi, wherein his friends namely, Mickey, Minnie, Goofy, Pinocchio and many other co-workers are forced to live in the most inhuman conditions that one could ever imagine. Donald Duck through his letter to the Chief Justice of India has demanded an in-depth investigation on factory units operated by Walt Disney, the owner of the factory units, to identify legal aspects of the problem highlighted in the letter. The Chief Justice of India has approached and appointed you to inquire two aspects in this matter: (a) whether the letter received could be treated as an application under Article 32 of the Constitution especially when no grounds of infringement of fundamental rights is stated in the letter by Donal Duck; (b) under these circumstances, whether the letter received by the Chief Justice of India could be treated as Writ Petition.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 2. A company called “Calico” (hereinafter the company) is a traditional biotechnology company. The company ambitiously works on the mission of patenting the biological process of controlling aging and life span of human beings. The company filed for a patent in many jurisdictions for inventing a new gene that enables people to stay young and health. The new gene invented by the company supports life expectancy in human beings. The company successfully developed interventions in gene formation that enable people to live longer and healthier lives. The company has obtained patent protection on the invented gene from almost 123+ countries around the world. It was granted protection on the basis of inventing state-of-the-art technology of nurturing human beings.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important"}} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 3. The company wants to file for patent protection in India for its process of “de novo gene formation”. The “de novo gene formation” proved effective in (a) anti-aging and (b) disease associated with ageing process of human beings. The question posed by legal experts of the company revolves around the issue of whether or not patenting such a gene is justified in our jurisdiction. Please guide and advice.</FormLabel>
                                        <Textarea required id="outlined-required" label="Answer" name='Answer1' value={''} aria-label="minimum height" minRows={3} placeholder="Answer..." />
                                    </FormControl>

                                    <h3>PART D</h3>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 1. Which one of the following institutions has been replaced by the NITI Ayog?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Inter-State Council" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Planning Commission of India" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Public Account Committee" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Ministry of Agriculture" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 2. The Supreme Court of India consists of ______________ ?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	The Chief Justice of India and other 25 Judges." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	The Chief Justice of India and other 7 Judges." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	The Chief Justice of India and other 21 Judges." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	The Chief Justice of India and other 33 Judges." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 3. The deputy Speaker of Lok Sabha is appointed/elected by   GK</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Appointed by the President" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Appointed by the Speaker" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Appointed by the Prime Minister" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Elected by members of the Lok Sabha" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 4. “The name you can Bank Upon” is the slogan of which bank?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Punjab National Bank" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B. State Bank of India" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	HDFC India" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Canara Bank" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 5. Who was the first law minister of independent India?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	B.R. Ambedkar" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Dr. Rajendra Prasad" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Sardar Vallabai Patel" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Jawaharlal Nehru" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 6. 'Persona non- grata' in legal terms means ______________ ?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Non-person" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	An unacceptable person" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Non-performance of promise" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Ungrateful person" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 7. 'Obiter dicta' in legal terms means ______________ ?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Direction by a judge." />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Basis of judicial decision." />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Judgment of a court in the case before it." />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	An opinion given by the court not necessary for the decision." />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 8. Which among the following was described by Dr B.R. Ambedkar as the "heart and soul of the Constitution of India"? </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Right to Constitutional Remedies" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Right to equality" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Freedom of Religion" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Right to move throughout the territory of India" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 9. The oath is administered to the president of India by</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Speaker of Lok Sabha" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Prime Minister of India" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Attorney General of India" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Chief Justice of India" />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 10. The abbreviation of PETA, stands for</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	People for the ethical treatment of animals" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Public for the ethical treatment of animals" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Person for the ethical treatment of animals" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	People for the empathised treatment of animals " />
                                    </FormControl>
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
  )
}

export default FinalStep