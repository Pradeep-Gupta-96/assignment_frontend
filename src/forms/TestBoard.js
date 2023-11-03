import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgresA from './ProgresA';
import ProgresB from './ProgresB';
import ProgresC from './ProgresC';

const TestBoard = () => {
    const navigate = useNavigate();
    const sectA = localStorage.getItem('yashodanandA');
    const sectB = localStorage.getItem('yashodanandB');
    const sectC = localStorage.getItem('yashodanandC');
    const sectD = localStorage.getItem('yashodanandD');

    // Check the presence of sectA, sectB, sectC and sectD decide what to render
    if (sectA && sectB && sectC && sectD) {
        return (
            <>
                <ProgresA   />
            </>
        );
    } else if (sectA && sectB) {
        return (
            <>
                <ProgresA />
                <ProgresB />
            </>
        );
    } else if (sectB && sectC) {
        return (
            <>
                <ProgresB />
                <ProgresC />
            </>
        );
    } else if (sectA) {
        return (
            <>
                <ProgresA  />
            </>
        );
    } else {
        // If any of them is missing, navigate to "/"
        navigate('/');
        return null; // You can return null or a message if needed
    }
};

export default TestBoard;
