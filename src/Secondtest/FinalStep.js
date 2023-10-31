import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, FormLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
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
                                                <li className="op1">Appeal for restoration of Company’s name can’t be maintained by a person whose status as its director is disputed.</li>  
                                                <li className="op1">Director of a Company can’t be prosecuted vicariously for cheque bounce if Company is not charged as accused.</li>
                                                <li className="op1">Stockbroker has to obtain a registration certificate from SEBI for each SE where he operates and pay prescribed fee.</li>
                                                <li className="op1">SEBI was not justified in penalizing a Company by taking a hyper technical view of the law on related party transaction.</li>
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
                                        <FormLabel component="legend">Q 10. Which of the following in not an essential feature of the Competition Act, 2002</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="Preventing anti-competition practice with maximum intervention" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="Protecting the freedom of trade for individuals and entities in market" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="Preventing monopolies and promoting competition in market  " />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="The Preventing abuse of Dominant Position " />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 11. Choose the most appropriate answer<br />Which of the following activity/activities are invalid under Section 3 of the anti-competitive agreement of the Competition Act, 2002  </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="An agreement containing a clause regarding services likely to cause an appreciable adverse effect on competition in India" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="An agreement containing a clause that there will be a discontinuation in the supply of goods if the dealer is also dealing in products of supplier’s competition.  " />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="An agreement containing a clause that determines purchase or sale prices.  " />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="(i) and (ii)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="(iii) only" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="(ii) and (iii)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="None of the above" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="All of the above" />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 12. An advertisement on television by a company engaged in the business of manufacturing of ‘washing machines’ under the brand name ‘Whirlpool’ portrayed that washing machines are being manufactured in collaboration with a foreign company irrespective of the fact the government had not permitted/authorized any collaboration for such manufacturing. Comment.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 13. Identify the issues discussed in corporate governance case law and match the following correctly: (change to confuse the students/young scholars)</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 195 of the Income Tax Act applies to residents and cannot be extended to have extraterritorial jurisdiction.  </li>  
                                                <li className="op1">Directors are entitled to attend board meetings through VC even if intimation is not given at beginning of Calendar year.</li>
                                                <li className="op1">Whether straitjacket formula to brand Company as ‘Shell Company’ was justified or not.</li>
                                                <li className="op1">Whether the Board could be empowered to appoint additional directors by articles of Company without specifying it in the agenda of the meeting.</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Vodafone International Holdings B. V. v. Union of India (2012) </li>
                                                <li className="ans1">Rupak Gupta v. U. P. Hotels Ltd. (2015)</li>
                                                <li className="ans1">Assam Company India Ltd. v. Union of India (2019)</li>
                                                <li className="ans1">Needle Industries Ltd. v. Needle Industries Newly (India) Holding Ltd. (1981)</li>
                                            </ul>
                                        </div>
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 14. Match the following Corporate Governance theories: (Correctly placed – change the order to confuse students/young lawyers)</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Agency Theory</li>  
                                                <li className="op1">Stewardship Theory</li>
                                                <li className="op1">Resource Dependency Theory</li>
                                                <li className="op1">Stakeholder Theory</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Delegating the work of operating business to company’s directors or managers with expectation that they would make fruitful decision and act in the best interest of shareholders/stakeholders.</li>
                                                <li className="ans1">To achieve organizational success company executives and managers are placed under an obligation to take ownership of their job and work diligently to maximize shareholders/stakeholders’ investment in the company.</li>
                                                <li className="ans1">Directors’ linkages to the capital market environment enhances organization overall performance. Directors are made responsible to secure essential contracts for growth and survival of the organization.</li>
                                                <li className="ans1">Identifying key prospects for accountability of management to serve the interest of broad range of stakeholders/shareholders.</li>
                                            </ul>
                                        </div>
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 15. Match the following provisions from The Recovery of Debts and Bankruptcy Act, 1993: (reshuffle the options to confuse students/young lawyers).  </FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Section 25</li>  
                                                <li className="op1">Section 22 A</li>
                                                <li className="op1">Section 17A </li>
                                                <li className="op1">Section 19</li>
                                                <li className="op1">Section 30A</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Modes of recovery of debts</li>
                                                <li className="ans1">Uniform procedure for conduct of proceedings</li>
                                                <li className="ans1">Power of Chairperson of Appellate Tribunal</li>
                                                <li className="ans1">Application to the Tribunal</li>
                                                <li className="ans1">Deposit of amount of debt due for filing appeal against orders of the Recovery Officer</li>
                                            </ul>
                                        </div>
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 16. Match the provisions under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act 2002 correctly.</FormLabel>
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
                                        <FormLabel component="legend">Q 20. Match the following case laws with issues that were adjudicated in them.</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Committee of Creditors Essar Steel India Limited v. Satish Kumar Gupta</li>  
                                                <li className="op1">Bank of Baroda v. MBL Infrastructure Limited an Ors.</li>
                                                <li className="op1">Mobilox Innovations Private Limited v. Kirusa Software Private Limited</li>
                                                <li className="op1">K. Sashidhar v. Indian Overseas Bank</li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Resolution Applicants could be disqualified from submitting a Resolution Plan being inconsistent with Section 29A of the Insolvency and Bankruptcy Code, 2016.</li>
                                                <li className="ans1">Whether judicial interpretation by the apex court of our country over Section 29A of the Insolvency and Bankruptcy Code, 2016 as amended by the Act 26 of 2018 was justified or not.</li>
                                                <li className="ans1">Whether the maintainability of an application filed by an Operational Creditor under Section 8(2)(a) of the Insolvency and Bankruptcy Code, 2016 demands interpretation of the expression ‘dispute’ and the ‘existence of dispute’.</li>
                                                <li className="ans1">Whether decision taken by the Committee of Creditor (CoC) on approval of a resolution plan be scrutinized by judiciary.</li>
                                            </ul>
                                        </div>
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 21. Principle of Corporate Law in various jurisdictions across the globe follow a principle that states that a parent company cannot be held liable for the acts or omissions of its subsidiary unless this arrangement of companies is misused to accomplish wrongful purposes. Explain the principle stated above with the help of case laws.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 22. Corporal form often used by Multi-National Companies creates a complex vertical pyramid like structure of wholly owned subsidiaries WOS either to evade tax or to avoid legal liabilities. What tools, if any, under the Companies Act, 2013, are available to hold parent company responsible for the acts of their WOS.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
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
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 25. Mr. Ajay Bhai was appointed as workman in a company named “the Dublin” (hereinafter ‘the company’) that manufactured auto parts and related products for export to Germany. Mr. Ajay Bhai served amicably in the company for 15 years without any serious complaints. In any event, the above-named workmen was dismissed and terminated from services based on his conduct on the occasion of Dussehra when he was drunk and picked up a fight with some co-workers over illogical issues.<br /> <br />  
Aggrieved by the decision of dismissal and termination of services, the workmen approached Labor Court for proper adjudication over the matter. The workmen want to allege that he was dismissed and terminated from the company illegally and that the action taken against him was not justified whatsoever. The workmen seek your advice and wants you to address the issue of whether the management was justified in dismissing or terminating his services with the company before the Labor Court. Advice the workmen and identify reliefs under the relevant provisions of the Industrial Dispute Act.   </FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 12. Match the provisions from the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act 2002 correctly.</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">The Minimum Wages Act, 1948</li>  
                                                <li className="op1">The Industrial Dispute Act, 1947 </li>
                                                <li className="op1">The Workmen’s Compensation Act, 1923</li>
                                                <li className="op1">The payment of wages Act, 1936</li>
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
                                        <FormLabel component="legend">Q 27. Identify the issue adjudicated in case laws mentioned below:</FormLabel>
                                        <div className="four-op">
                                            <ul className="op-row">
                                                <li className="op1">Syndicate Bank and Ors. V. K. Umesh Nayak, MANU/SC/0066/1995</li> 
                                                <li className="op1">Central Provinces Transport Services Ltd. v. Raghunath Gopal Patwardhan MANU/SC/0067/1956</li>  
                                                <li className="op1">Steel Authority of India Ltd. and Ors. v. National Union Waterfront Workers and Ors. MANU/SC/0515/2001</li> 
                                                <li className="op1">Bengaluru Water Supply and Sewerage Board v. A. Rajappa MANU/SC/0257/1978 </li>
                                            </ul>
                                            <ul className="ans-row">
                                                <li className="ans1">Whether workmen who proceed on legal or illegal strike are entitled to wages for period of strike.</li> 
                                                <li className="ans1">Whether the definition of the term ‘industry’ under Section 2 of the Industrial Disputes Act, 1947 is wide enough to incorporate a dispute between employer and an individual employee as industrial dispute.</li>   
                                                <li className="ans1">Whether or not, the concept of automatic absorption of contract labor, in establishment of principle employer especially on issuance of abolition notification, was implied in Section 10 of the Contract Labour (Regulation and Abolition) Act, 1970.</li>    
                                                <li className="ans1">Whether a statutory body performing sovereign functions are exempted from the definition of the term ‘industry’ under the Industrial Disputes Act, 1947.</li>
                                            </ul>
                                        </div>
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 3. The deputy Speaker of Lok Sabha is appointed/elected by   GK</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Appointed by the President" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Appointed by the Speaker" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Appointed by the Prime Minister" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Elected by members of the Lok Sabha" />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 29. <i>“Novelty or invention or innovative idea is not the requirement for protection of copyright but it does require minimal degree of creativity.”</i> <br /><br />  
Originality, in the eyes of copyright law lies not in the idea or thought but the representation thereof. Analyze the above statement and discuss the proposition as applicable to literary, musical, dramatic and artistic works. <br /><br />
Use decided cases to illustrate and support your arguments and analysis.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 30. “Cookware” is introduced in the market place by well-established metal industry which manufactures many other products including utensils. The stainless-steel products manufactured by the metal industry are very popular in the State. However, the manufacturing process adopted by the industry is very tedious and laborious. <br /><br /> 
                                            “Fantastic 3 Pvt. Ltd.” (Hereinafter the company) proprietors of cookware products invented some improvement in the old laborious method through which the company could produce plates of better quality and with higher speed. The company now wants to claim a patent in the said method of manufacturing.<br /><br />
                                            Discuss the position of the company’s patent in the territorial jurisdiction of India? What is the relationship between the Patent and Design Act? Answer the question in the light of potential overlap, if any, and the relative scope of protection offered by both statutes (i.e., Patent and Design Act), especially in the light of case law.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 31. The intellectual property (IP) system is designed to protect humankind’s intellectual achievements, not only at the national level, but also across borders. Many products developed thanks to IP, such as Hollywood movies, French wines and German precision machine tools, have crossed national borders to enter other countries. But if the IP inherent in these products is not protected in other countries, they may be freely counterfeited and plagiarized, to the serious detriment of the right holders. In order to solve the problem of international protection of IP rights, countries enter into international IP treaties to align and harmonize as much as possible their IP regimes. <br /><br />  
For example, the “Coca-Cola” trademark is worth billions, but its value is mainly derived from the goodwill amassed by the company in its long-term business operations, instead of the design of the mark itself. <br /><br /> 
What remedies are available to redress Intellectual Property infringement? How does the international community coordinate Intellectual Property protection? </FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 32. <i>“What is accorded to American nationals in a country should also be given to German and Japanese nationals doing business in that country, with no prejudice to nationals of any member countries. The principle of national treatment allows foreign nationals the same treatment as nationals on some important substantive issues, but not in all aspects.” Explain?</i> <br /><br />
On the other hand, the MFN principle aims to iron out differences in treatment among foreign nationals. What is the “most-favoured-nation (MFN) treatment” principle and how is it different from national treatment principle?   </FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 33. ‘Ankush’ is a very famous writer and novelist. His novels gather publicity in no time. His first novel was published in 1950 with rare photographs, unpublished/inaccessible material. The effort to produce a coherent and authoritative volume involves considerable labor over several years. Therefore, Ankush’s work becomes hard to obtain. He submitted copy of a latest novel for publication in Thomson Reuters that was kept for by the publication house for more than 6 months due to Covid-19 pandemic. Ankush’s novels are impossible to come by except in some pirated or unauthorized editions. <br /><br /> 
‘Balbir’, a not so well-known writer submitted his manuscripts to Penguin publishers that could be considered as pirated or unauthorized edition of Ankush’s original work. The pirated versions got published soon after the lockdown restrictions were lifted. The publishing house contacted Balbir and congratulated him for the popularity of his latest novel tilted “Do Apple Dream of Unmanned Vehicles”.  <br /><br /> 
Ankush has approached you to confirm his legal rights, position and remedies if any available in Intellectual Property Law in force in territorial jurisdiction of our country?</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 9. The oath is administered to the president of India by</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"1"} control={<Checkbox />} label="A.	Speaker of Lok Sabha" />
                                        <FormControlLabel name='PreferredLocation' value={"2"} control={<Checkbox />} label="B.	Prime Minister of India" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="C.	Attorney General of India" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="D.	Chief Justice of India" />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 35. A company called “Calico” (hereinafter the company) is a traditional biotechnology company. The company ambitiously works on a mission of patenting the biological process of controlling aging and life span of human beings. The company filed for a patent in many jurisdictions for inventing a new gene that enables people to stay young and health. The new gene invented by the company supports life expectancy in human beings. The company successfully developed interventions in gene formation that enables people to live longer and healthier lives. The company has obtained patent protection on the invented gene from almost 123+ countries around the world. It was granted protection on the basis of inventing state-of-the-art-technology of nurturing human being. <br /><br /> 
The company wants to file for patent protection in India for its process of “de novo gene formation”. The “de novo gene formation” proved effective in (a) anti-aging and (b) disease associated with ageing process of human beings. The question posed by legal experts of the company revolves around the issue whether or not patenting of such gene is justified in our jurisdiction? Please guide and advice. </FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>


    
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ width: '100%' }} className="bottom-form">
                            <Link className='back-link' to="/">Back</Link>
                            <Button className="blue-btn">Next</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinalStep