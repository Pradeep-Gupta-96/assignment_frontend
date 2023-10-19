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
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 1. In which of the following case laws the issue regarding – whether under Section 9 of The Arbitration and Conciliation Act, 1996, the Court has jurisdiction to pass interim orders even before arbitral proceedings commence and before an arbitrator is appointed was decide?</FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"M.M.T.C. Ltd. v. Sterlite Industries (Mia) Ltd., AIR 1997 SC 605"} control={<Checkbox />} label="M.M.T.C. Ltd. v. Sterlite Industries (Mia) Ltd., AIR 1997 SC 605" />
                                        <FormControlLabel name='PreferredLocation' value={"Sundaram Finance Ltd. v. N.E.P.C. India Ltd., AIR 1999 SC 565"} control={<Checkbox />} label="Sundaram Finance Ltd. v. N.E.P.C. India Ltd., AIR 1999 SC 565" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="Olympus Super Structures Pvt. Ltd. v. Meena Vijay Khetan, AIR 1999 SC 2102" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="Orma Impex Pvt. Ltd. v. Nissari Arb. Pte. Ltd., AIR 1999 SC 2871" />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 2. Explain in brief the following principle of Arbitration Law: <br /> <i>“Landlord-tenant disputes governed by the Transfer of Property Act are arbitrable as they are not actions in rem but pertain to subordinate rights in personam that arise from rights in rem.” </i> </FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 3. Identify remedies under the Arbitration & Conciliation Act that safeguards the essential feature of ‘mutuality’ in an arbitration agreement.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 4. With the help of recent Supreme Court judgment explain: whether or not, a power is vested in the Court to modify an award while exercising jurisdiction under Section 34 of the Arbitration & Conciliation Act would amount to crossing the “Lakshman Rekha”?</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 5. The nationalization of Indian Banks dates back to the year 1969, however, recent nationalization of commercial banks has proved efficient to provide steady growth to Indian Economy by providing funds to the capital market. Comment.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="question-row" sx={{ marginBottom: "25px", display: "inline-block !important", marginBottom: "25px" }} fullWidth>
                                        <FormLabel sx={{ marginBottom: "15px" }} component="legend">Q 6. What according to you are the most essential rules, regulations or guidelines implemented by the Securities and Exchange Board of India (SEBI) to safeguard securities market, which is at risk of scams, frauds or unfair trade practices. How has SEBI ensured the protection of interest of investors from such vulnerabilities to develop the securities market.</FormLabel>
                                        <TextField required id="outlined-required" label="Answer" name='Answer1' fullWidth />
                                    </FormControl>
                                    <FormControl className="test-checkbox" sx={{ marginBottom: "25px" }} fullWidth>
                                        <FormLabel component="legend">Q 7. Choose the most appropriate answer: Which of the following act/acts governs the capital market and securities?  </FormLabel>
                                        <FormControlLabel name='PreferredLocation' value={"M.M.T.C. Ltd. v. Sterlite Industries (Mia) Ltd., AIR 1997 SC 605"} control={<Checkbox />} label="The Depositories Act, 1996 " />
                                        <FormControlLabel name='PreferredLocation' value={"Sundaram Finance Ltd. v. N.E.P.C. India Ltd., AIR 1999 SC 565"} control={<Checkbox />} label="Securities Contract (Regulation) Act, 1956" />
                                        <FormControlLabel name='PreferredLocation' value={"3"} control={<Checkbox />} label="Security and Exchange Board of India Act, 1992" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="(ii) and (iii)" />
                                        <FormControlLabel name='PreferredLocation' value={"4"} control={<Checkbox />} label="All of the above " />
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