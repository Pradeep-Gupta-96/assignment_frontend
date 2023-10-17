import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [todos, setTodos] = useState([]);

    const API1 = 'http://localhost:4000/api/getAllTodo'

    const fetchData1 =React.useCallback( async (page) => {
        try {
            const response = await fetch(`${API1}`)

            const data = await response.json()

            setTodos(data.todos)
        } catch (error) {
            console.log(error)
        }
    },[API1])

    React.useEffect(() => {
        fetchData1();
    }, [ fetchData1]);


    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>University</th>
                        <th>College</th>
                        {/* Add headers for other fields */}
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.university}</td>
                            <td>{item.college}</td>
                            {/* Add table cells for other fields */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
