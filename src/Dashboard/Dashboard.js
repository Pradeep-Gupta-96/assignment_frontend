import React, { useState } from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [todos, setTodos] = useState([]);
    const [openDialogIndex, setOpenDialogIndex] = React.useState(-1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const API1 = 'http://localhost:4000/api/getAllTodo';

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

    const clickForDelete = async (id) => {
        const API2 = `http://3.111.214.106:4000/api/deletetodo/${id}`;
        try {
            const response = await fetch(`${API2}`,{
                method:"DELETE"
            });
            await response.json();
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

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
                    <Button variant="contained" color="primary" onClick={exportToExcel}>
                        Export to Excel
                    </Button>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table" className='data-table'>
                                <TableHead>
                                    <TableCell>id</TableCell>
                                    <TableCell>name</TableCell>
                                    <TableCell>email</TableCell>
                                    <TableCell>phone</TableCell>
                                    <TableCell>university</TableCell>
                                    <TableCell>college</TableCell>
                                    <TableCell>course duration</TableCell>
                                    <TableCell>course</TableCell>
                                    <TableCell>field of interest</TableCell>
                                    <TableCell>skills</TableCell>
                                    <TableCell>last internship details</TableCell>
                                    <TableCell>publications</TableCell>
                                    <TableCell>class10education</TableCell>
                                    <TableCell>class10 percentage</TableCell>
                                    <TableCell>class10 year of passing</TableCell>
                                    <TableCell>class12education</TableCell>
                                    <TableCell>class12 percentage</TableCell>
                                    <TableCell>class12 year of passing</TableCell>
                                    <TableCell>graduation university</TableCell>
                                    <TableCell>graduation percentage</TableCell>
                                    <TableCell>graduation year of passing</TableCell>
                                    <TableCell>masters university</TableCell>
                                    <TableCell>masters percentage</TableCell>
                                    <TableCell>masters year of passing</TableCell>
                                    <TableCell>lastinternshipdetails</TableCell>
                                    <TableCell>have you participated in court</TableCell>
                                    <TableCell>preferredlocation</TableCell>
                                    <TableCell>answer1</TableCell>
                                    <TableCell>answer2</TableCell>
                                    <TableCell>answer3</TableCell>
                                    <TableCell>Resume</TableCell>
                                    <TableCell>created at</TableCell>
                                    <TableCell>Delete</TableCell>
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
                                                            <ArticleIcon />
                                                        </a>
                                                    </TableCell>

                                                    <TableCell>{formatDate(item.created_at)}</TableCell>
                                                    <TableCell><DeleteIcon onClick={()=>{clickForDelete(item.id)}}/></TableCell>

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
