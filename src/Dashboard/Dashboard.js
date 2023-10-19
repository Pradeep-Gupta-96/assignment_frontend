import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Link } from '@mui/material';
import Footer from '../components/Footer';
import * as XLSX from 'xlsx'; // Correct import statement
import ArticleIcon from '@mui/icons-material/Article';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Dashboard = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [todos, setTodos] = useState([]);
    const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const API1 = 'http://3.111.214.106:4000/api/getAllTodo';

    const fetchData1 = React.useCallback(async () => {
        try {
            const response = await fetch(`${API1}`);
            const data = await response.json();
            setTodos(data.todos);
        } catch (error) {
            console.log(error);
        }
    }, [API1]);

    React.useEffect(() => {
        fetchData1();
    }, [fetchData1]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleClickOpen = (index, answerNumber) => {
        setOpenDialogIndex(index);
        setSelectedAnswer(answerNumber);
    };

    const handleClose = () => {
        setOpenDialogIndex(-1);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
        const year = date.getFullYear().toString().slice(-2); // Extract last two digits of the year

        return `${day}/${month}/${year}`;
    };
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(todos);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Candidates');
        XLSX.writeFile(workbook, 'candidates.xlsx');
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
            <div className="data-sce">
                <div className="bound">
                    <Link className='dawn-csv' variant="contained" color="primary" onClick={exportToExcel}><FileDownloadIcon /> Export to CSV </Link>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table" className='data-table'>
                                <TableHead>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>University</TableCell>
                                    <TableCell>College</TableCell>
                                    <TableCell>Course Duration</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Field of Interest</TableCell>
                                    <TableCell>Skills</TableCell>
                                    <TableCell>Internship Details</TableCell>
                                    <TableCell>Publications</TableCell>
                                    <TableCell>Class 10th Education</TableCell>
                                    <TableCell>10th Percentage</TableCell>
                                    <TableCell>10th Year of Passing</TableCell>
                                    <TableCell>Class 12th Education</TableCell>
                                    <TableCell>12th Percentage</TableCell>
                                    <TableCell>12th Year of Passing</TableCell>
                                    <TableCell>Graduation University</TableCell>
                                    <TableCell>Graduation Percentage</TableCell>
                                    <TableCell>Graduation Year of Passing</TableCell>
                                    <TableCell>Masters university</TableCell>
                                    <TableCell>Masters percentage</TableCell>
                                    <TableCell>Masters year of passing</TableCell>
                                    <TableCell>lastinternshipdetails</TableCell>
                                    <TableCell>Participated in Court</TableCell>
                                    <TableCell>Preferred Location</TableCell>
                                    <TableCell>Answer 1</TableCell>
                                    <TableCell>Answer 2</TableCell>
                                    <TableCell>Answer 3</TableCell>
                                    <TableCell>Resume</TableCell>
                                    <TableCell>Created at</TableCell>
                                </TableHead>
                                <TableBody>
                                    {todos
                                        .map((item, index) => {
                                            const isDialogOpen = openDialogIndex === index;
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                    <TableCell>{item.id}</TableCell>
                                                    <TableCell>{item.name}</TableCell>
                                                    <TableCell>{item.email}</TableCell>
                                                    <TableCell>{item.phone}</TableCell>
                                                    <TableCell>{item.university}</TableCell>
                                                    <TableCell>{item.college}</TableCell>
                                                    <TableCell>{item.course_duration}</TableCell>
                                                    <TableCell>{item.course}</TableCell>
                                                    <TableCell>{item.field_of_interest}</TableCell>
                                                    <TableCell>{item.skills}</TableCell>
                                                    <TableCell>{item.last_internship_details}</TableCell>
                                                    <TableCell>{item.publications}</TableCell>
                                                    <TableCell>{item.class10education}</TableCell>
                                                    <TableCell>{item.class10_percentage}</TableCell>
                                                    <TableCell>{item.class10_year_of_passing}</TableCell>
                                                    <TableCell>{item.class12education}</TableCell>
                                                    <TableCell>{item.class12_percentage}</TableCell>
                                                    <TableCell>{item.class12_year_of_passing}</TableCell>
                                                    <TableCell>{item.graduation_university}</TableCell>
                                                    <TableCell>{item.graduation_percentage}</TableCell>
                                                    <TableCell>{item.graduation_year_of_passing}</TableCell>
                                                    <TableCell>{item.masters_university}</TableCell>
                                                    <TableCell>{item.masters_percentage}</TableCell>
                                                    <TableCell>{item.masters_year_of_passing}</TableCell>
                                                    <TableCell>{item.lastinternshipdetails}</TableCell>
                                                    <TableCell>{item.haveyouparticipatedinmootcourt}</TableCell>
                                                    <TableCell>{item.preferredlocation}</TableCell>

                                                    <TableCell>
                                                        <Link
                                                            variant="outlined"
                                                            onClick={() => handleClickOpen(index, 1)}
                                                        >
                                                            View Answer 1
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link
                                                            variant="outlined"
                                                            onClick={() => handleClickOpen(index, 2)}
                                                        >
                                                            View Answer 2
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Link
                                                            variant="outlined"
                                                            onClick={() => handleClickOpen(index, 3)}
                                                        >
                                                            View Answer 3
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <a href={`http://3.111.214.106:4000/${item.uploadresume}`} target="_blank" rel="noopener noreferrer">
                                                            <ArticleIcon/>
                                                        </a>
                                                    </TableCell>

                                                     <TableCell>{formatDate(item.created_at)}</TableCell>

                                                    <Dialog open={isDialogOpen} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                                                        <DialogContent>
                                                            <DialogContentText>
                                                                {item[`answer${selectedAnswer}`]}
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={handleClose} autoFocus>
                                                                Close
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>

                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={todos.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>
            </div>

            <Footer />

        </>

    );
};

export default Dashboard;
